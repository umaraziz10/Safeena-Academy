// controllers/consultationController.js

const { Consultation } = require('../models');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');

dayjs.extend(utc);
dayjs.extend(timezone);

function toWIB(date) {
  return dayjs(date).utc().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
}

exports.createConsultation = async (req, res) => {
  const { consult_date } = req.body;
  const user_id = req.user.id;

  try {
    const consultDateUTC = dayjs(consult_date).tz('Asia/Jakarta').utc().format();

    const consultation = await Consultation.create({ user_id, consult_date: consultDateUTC });
    res.status(201).json({ message: 'Consultation request created', consultation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.findAll();

    const convertedConsultations = consultations.map(c => {
      return {
        ...c.toJSON(),
        consult_date: toWIB(c.consult_date)
      };
    });

    res.status(200).json({ consultations: convertedConsultations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.getConsultationById = async (req, res) => {
  try {
    const consultation = await Consultation.findByPk(req.params.id);
    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    const result = {
      ...consultation.toJSON(),
      consult_date: toWIB(consultation.consult_date)
    };

    res.status(200).json({ consultation: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateConsultationStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const consultation = await Consultation.findByPk(req.params.id);
    if (!consultation) return res.status(404).json({ message: 'Consultation not found' });

    consultation.status = status;
    await consultation.save();

    const result = {
      ...consultation.toJSON(),
      consult_date: toWIB(consultation.consult_date)
    };

    res.status(200).json({ message: 'Consultation status updated', consultation: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

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
