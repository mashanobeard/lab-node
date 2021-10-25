import { deleteNote } from '../../../db/providers/notes.js';

const deleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await deleteNote(id);
    return res.status(200).json({ deletedNote, success: true, id: id });
  } catch (error) {
    return res.json(error.message);
  }
};
export default deleteController;
