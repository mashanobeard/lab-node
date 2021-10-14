import { noteUpdate } from '../../../db/providers/notes.js'
import { validationResult } from 'express-validator'

const updateController = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() })
    }
    const noteNew = req.body
    const Id = req.params.id
    const note = await noteUpdate(Id, noteNew)
    //Object.assign(note, req.body)
    return res.status(200).json(note)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

export default updateController
