const { Material, Course } = require('../models');

exports.getAllMaterials = async (req, res) => {
  try {
    const materials = await Material.findAll({ include: 'course' });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch materials', error: error.message });
  }
};

exports.getMaterialById = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id, { include: 'course' });
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json(material);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch material', error: error.message });
  }
};

exports.getMaterialsByCourseId = async (req, res) => {
  const { courseId } = req.params;

  try {
    const materials = await Material.findAll({
      where: { course_id: courseId }
    });

    if (materials.length === 0) {
      return res.status(404).json({ message: 'No materials found for this course' });
    }

    res.json(materials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createMaterial = async (req, res) => {
  try {
    const newMaterial = await Material.create(req.body);
    res.status(201).json(newMaterial);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create material', error: error.message });
  }
};

exports.updateMaterial = async (req, res) => {
  const { id } = req.params;
  const { status: newStatusFromBody, ...updateData } = req.body;
  const userId = req.user?.id;

  try {
    const material = await Material.findByPk(id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }

    // Ambil status lama
    let currentStatus = Array.isArray(material.status) ? material.status : [];

    // Gabungkan status baru dari body (jika ada)
    if (Array.isArray(newStatusFromBody)) {
      newStatusFromBody.forEach(uid => {
        if (!currentStatus.includes(uid)) currentStatus.push(uid);
      });
    }

    // Tambahkan user id dari token juga (jika belum masuk)
    if (userId && !currentStatus.includes(userId)) {
      currentStatus.push(userId);
    }

    // Update status di DB
    updateData.status = currentStatus;
    await material.update(updateData);

    // Custom response
    const response = {
      course_id: material.course_id,
      week: material.week,
      materials_title: material.materials_title,
      materials_desc: material.materials_desc,
      materials_video: material.materials_video,
      materials_duration: material.materials_duration,
      status: currentStatus,
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error updating material', error: error.message });
  }
};



  

exports.deleteMaterial = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);
    if (!material) return res.status(404).json({ message: 'Material not found' });

    await material.destroy();
    res.json({ message: 'Material deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete material', error: error.message });
  }
};

exports.updateMaterialStatus = async (req, res) => {
  const { id } = req.params;
  const userId = req.user?.id;

  try {
    const material = await Material.findByPk(id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }

    // Ambil status lama, pastikan array
    let currentStatus = Array.isArray(material.status) ? [...material.status] : [];

    // Tambahkan userId jika belum ada
    if (!currentStatus.includes(userId)) {
      currentStatus.push(userId);
    }

    // Update hanya status
    await material.update({ status: currentStatus });

    res.json({
      message: 'User added to material status successfully',
      data: {
        material_id: material.material_id,
        status: currentStatus
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update material status', error: error.message });
  }
};