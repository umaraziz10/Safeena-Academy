const { Consultation, TimeSlot, Psychologist, PsychologistTimeSlot, User } = require('../models');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

function toWIB(date) {
  return dayjs(date).utc().tz('Asia/Jakarta').format('YYYY-MM-DD');
}

// CREATE
exports.createConsultation = async (req, res) => {
  const user_id = req.user.id;
  const { psychologist_id, consult_date, time_slot_id, type_of_service } = req.body;

  try {
    // Ambil user_name dari tabel Users berdasarkan user_id
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user_name = req.user.name; // Ambil user_name

    // Validasi slot tersedia untuk psikolog
    const isAvailable = await PsychologistTimeSlot.findOne({
      where: { psychologist_id, time_slot_id }
    });

    if (!isAvailable) {
      return res.status(400).json({ message: 'Selected time slot is not available for this psychologist' });
    }

    const consultation = await Consultation.create({
      user_id,
      user_name,  // Tambahkan user_name ke dalam Consultation
      psychologist_id,
      consult_date,
      time_slot_id,
      type_of_service,
      status: 'Pending'
    });

    // Return response with consultation and user_name
    res.status(201).json({
      message: 'Consultation booked successfully',
      consultation: {
        ...consultation.toJSON(),  // Destructure consultation data
        user_name // Menambahkan user_name ke dalam response
      }
    });
  } catch (error) {
    console.error('❌ Error creating consultation:', error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// // GET ALL
// exports.getAllConsultations = async (req, res) => {
//   try {
//     const consultations = await Consultation.findAll({
//       include: ['slot', 'psychologist']
//     });

//     const now = dayjs().tz('Asia/Jakarta');

//     for (const consult of consultations) {
//       const consultDate = dayjs(consult.consult_date).tz('Asia/Jakarta');
//       const slotEnd = dayjs(`${consult.consult_date} ${consult.slot.end_time}`).tz('Asia/Jakarta');

//       if (slotEnd.isBefore(now) && consult.status !== 'Done') {
//         consult.status = 'Done';
//         await consult.save();
      
//         // Tambah count hanya jika sebelumnya bukan 'Done'
//         if (consult._previousDataValues.status !== 'Done') {
//           const psychologist = await Psychologist.findByPk(consult.psychologist_id);
//           if (psychologist) {
//             psychologist.handled_count += 1;
//             await psychologist.save();
//           }
//         }
//       }
      
//     }

//     const converted = consultations.map(c => ({
//       ...c.toJSON(),
//       consult_date: toWIB(c.consult_date)
//     }));

//     res.status(200).json({ consultations: converted });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// };



// //GET BY ID
// exports.getConsultationById = async (req, res) => {
//   try {
//     const consultation = await Consultation.findByPk(req.params.id, {
//       include: ['slot', 'psychologist']
//     });

//     if (!consultation) {
//       return res.status(404).json({ message: 'Consultation not found' });
//     }

//     const now = dayjs().tz('Asia/Jakarta');
//     const slotEnd = dayjs(`${consultation.consult_date} ${consultation.slot.end_time}`).tz('Asia/Jakarta');

//     if (slotEnd.isBefore(now) && consult.status !== 'Done') {
//       consult.status = 'Done';
//       await consult.save();
    
//       // Tambah count hanya jika sebelumnya bukan 'Done'
//       if (consult._previousDataValues.status !== 'Done') {
//         const psychologist = await Psychologist.findByPk(consult.psychologist_id);
//         if (psychologist) {
//           psychologist.handled_count += 1;
//           await psychologist.save();
//         }
//       }
//     }
    

//     res.status(200).json({
//       consultation: {
//         ...consultation.toJSON(),
//         consult_date: toWIB(consultation.consult_date)
//       }
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error', error });
//   }
// };

// GET ALL
exports.getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.findAll({
      include: [
        'slot', 
        'psychologist', 
        {
          model: User,  // Menambahkan User untuk mengambil nama pengguna
          as: 'user',   // Menambahkan alias user agar bisa diakses
          attributes: ['name'] // Hanya mengambil kolom 'name'
        }
      ]
    });

    const now = dayjs().tz('Asia/Jakarta');

    for (const consult of consultations) {
      const consultDate = dayjs(consult.consult_date).tz('Asia/Jakarta');
      const slotEnd = dayjs(`${consult.consult_date} ${consult.slot.end_time}`).tz('Asia/Jakarta');

      if (slotEnd.isBefore(now) && consult.status !== 'Done') {
        consult.status = 'Done';
        await consult.save();
      
        // Tambah count hanya jika sebelumnya bukan 'Done'
        if (consult._previousDataValues.status !== 'Done') {
          const psychologist = await Psychologist.findByPk(consult.psychologist_id);
          if (psychologist) {
            psychologist.handled_count += 1;
            await psychologist.save();
          }
        }
      }
    }

    const converted = consultations.map(c => ({
      ...c.toJSON(),
      consult_date: toWIB(c.consult_date),
      user_name: c.user.name  // Menambahkan nama user ke dalam response
    }));

    res.status(200).json({ consultations: converted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// GET BY ID
exports.getConsultationById = async (req, res) => {
  try {
    const consultation = await Consultation.findByPk(req.params.id, {
      include: [
        'slot', 
        'psychologist',
        {
          model: User,  // Menambahkan User untuk mengambil nama pengguna
          as: 'user',   // Menambahkan alias user agar bisa diakses
          attributes: ['name'] // Hanya mengambil kolom 'name'
        }
      ]
    });

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    const now = dayjs().tz('Asia/Jakarta');
    const slotEnd = dayjs(`${consultation.consult_date} ${consultation.slot.end_time}`).tz('Asia/Jakarta');

    if (slotEnd.isBefore(now) && consultation.status !== 'Done') {
      consultation.status = 'Done';
      await consultation.save();
    
      // Tambah count hanya jika sebelumnya bukan 'Done'
      if (consultation._previousDataValues.status !== 'Done') {
        const psychologist = await Psychologist.findByPk(consultation.psychologist_id);
        if (psychologist) {
          psychologist.handled_count += 1;
          await psychologist.save();
        }
      }
    }

    res.status(200).json({
      consultation: {
        ...consultation.toJSON(),
        consult_date: toWIB(consultation.consult_date),
        user_name: consultation.user.name // Menambahkan nama user ke dalam response
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// UPDATE STATUS
exports.updateConsultationStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const consultation = await Consultation.findByPk(req.params.id);
    if (!consultation) return res.status(404).json({ message: 'Consultation not found' });

    consultation.status = status;
    await consultation.save();

    res.status(200).json({
      message: 'Consultation status updated',
      consultation: {
        ...consultation.toJSON(),
        consult_date: toWIB(consultation.consult_date)
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// DELETE
exports.deleteConsultation = async (req, res) => {
  try {
    const consultation = await Consultation.findByPk(req.params.id);
    if (!consultation) return res.status(404).json({ message: 'Consultation not found' });

    await consultation.destroy();
    res.status(200).json({ message: 'Consultation deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};
