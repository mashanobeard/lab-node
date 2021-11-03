import { getNote } from '../../../db/providers/notes.js';

const getController = async (req, res) => {
  try {
    const data = await getNote();
    return res.status(200).json(data);
  } catch (e) {
    return res.json(e.message);
  }
};
export default getController;
