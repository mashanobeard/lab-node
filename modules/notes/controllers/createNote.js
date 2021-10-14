import notesSchema from '../models/notesSchema.js'
import { noteCreate } from '../../../db/providers/notes.js'
import { validationResult } from 'express-validator'

const createController = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() })
    }

    const newItem = await noteCreate(req.body)
    return res.status(200).json(newItem)
  } catch (e) {
    return res.status(400).json(e.message)
  }
}
export default createController
