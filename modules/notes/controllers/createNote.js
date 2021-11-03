import notesSchema from '../models/notesSchema.js';
import { createNote } from '../../../db/providers/notes.js';
import { validationResult } from 'express-validator';

const createController = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    const newNote = await createNote(req.body);
    return res.status(200).json(newNote);
  } catch (e) {
    return res.status(400).json(e.message);
  }
};
export default createController;
