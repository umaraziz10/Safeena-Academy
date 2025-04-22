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
    const updateData = req.body;
  
    try {
      const material = await Material.findByPk(id);
      if (!material) {
        return res.status(404).json({ message: 'Material not found' });
      }
  
      await material.update(updateData);
  
      res.json({ message: 'Material updated successfully', data: material });
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
