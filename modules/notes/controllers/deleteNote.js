import { noteDelete } from '../../../db/providers/notes.js'

const deleteController = async (req, res) => {
  try {
    const data = await noteDelete(req.params.id)
    return res.status(200).json(data)
  } catch (error) {
    return res.json(error.message)
  }
}
export default deleteController
