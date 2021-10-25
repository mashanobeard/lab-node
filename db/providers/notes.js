//db calls
import notesSchema from '../../modules/notes/models/notesSchema.js';
import { postfixName } from '../../env.js';
import dotenv from 'dotenv';
dotenv.config();
export const getNote = async () => {
  const noteFind = await notesSchema.find().limit().sort({ createdAt: 1 });
  return noteFind;
};

export const createNote = async (newNote) => {
  newNote.title = postfixName(newNote.title);
  const createdNote = await notesSchema.create(newNote);
  return createdNote;
};

export const updateNote = async (_id, details) => {
  const updatedNote = await notesSchema.findByIdAndUpdate(
    { _id: _id },
    details,
    {
      new: true,
    }
  );
  return updatedNote;
};

export const deleteNote = async (_id) => {
  const deletedNote = await notesSchema.findByIdAndUpdate(
    { _id: _id },
    { $set: { isDeleted: true } },
    {
      new: true,
    }
  );
  return deletedNote;
};
