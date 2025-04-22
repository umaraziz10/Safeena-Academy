const { Psychologist, TimeSlot } = require('../models');

exports.getAllPsychologists = async (req, res) => {
  try {
    const psychologists = await Psychologist.findAll({
      include: {
        model: TimeSlot,
        through: { attributes: ['day'] }, // tampilkan info hari di relasi
        attributes: ['id', 'code', 'start_time', 'end_time', 'category']
      }
    });

    res.status(200).json({ psychologists });
  } catch (error) {
    console.error('❌ Error fetching psychologists:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getPsychologistById = async (req, res) => {
  try {
    const id = req.params.id;

    const psychologist = await Psychologist.findByPk(id, {
      include: {
        model: TimeSlot,
        through: { attributes: ['day'] },
        attributes: ['id', 'code', 'start_time', 'end_time', 'category']
      }
    });

    if (!psychologist) {
      return res.status(404).json({ message: 'Psychologist not found' });
    }

    res.status(200).json({ psychologist });
  } catch (error) {
    console.error('❌ Error fetching psychologist by ID:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
