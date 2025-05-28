const { Psychologist, TimeSlot, PsychologistTimeSlot } = require('../models');
const dayjs = require('dayjs');


exports.getAllPsychologists = async (req, res) => {
  try {
    const psychologists = await Psychologist.findAll({
      include: {
        model: TimeSlot,
        as: 'timeSlots', // <- gunakan alias yang sesuai
        through: { attributes: ['day'] },
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
        as: 'timeSlots', // sama seperti di atas
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

exports.getAvailableSlotsByDate = async (req, res) => {
  const { date } = req.query;

  try {
    if (!date) {
      return res.status(400).json({ message: 'Query parameter "date" is required' });
    }

    const dayName = dayjs(date).format('dddd'); // e.g., 'Monday'

    // 1. Ambil semua kombinasi psikolog & time slot untuk hari itu
    const schedule = await PsychologistTimeSlot.findAll({
      where: { day: dayName },
      include: [
        { model: TimeSlot, as: 'TimeSlot' },
        { model: Psychologist, as: 'Psychologist' }
      ]
    });

    // 2. Ambil semua konsultasi di tanggal tsb
    const bookings = await Consultation.findAll({ where: { consult_date: date } });

    const result = [];

    for (const s of schedule) {
      const { psychologist_id, time_slot_id, TimeSlot: slot, Psychologist: psychologist } = s;

      // Cek apakah sudah dibooking?
      const alreadyBooked = bookings.some(b =>
        b.psychologist_id === psychologist_id && b.time_slot_id === time_slot_id
      );

      if (!alreadyBooked) {
        // Sudah ada psikolog di result?
        const existing = result.find(r => r.psychologist.id === psychologist_id);

        if (existing) {
          existing.available_slots.push(slot);
        } else {
          result.push({
            psychologist,
            available_slots: [slot]
          });
        }
      }
    }

    res.status(200).json({ date, data: result });
  } catch (error) {
    console.error('❌ Error fetching available slots:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};
