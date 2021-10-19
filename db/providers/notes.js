//db calls
import notesSchema from '../../modules/notes/models/notesSchema.js'
import { postfixName } from '../../env.js'
import dotenv from 'dotenv'
dotenv.config()
export const noteGet = async () => {
  const noteFind = await notesSchema.find().limit().sort({ createdAt: 1 })
  return noteFind
}

export const noteCreate = async (newItem) => {
  newItem.title = postfixName(newItem.title)
  const noteSave = await notesSchema.create(newItem)
  return noteSave
}

export const noteUpdate = async (_id, noteNew) => {
  const noteUpd = await notesSchema.findByIdAndUpdate({ _id: _id }, noteNew, {
    new: true,
  })
  return noteUpd
}

export const noteDelete = async (id) => {
  const noteDel = await notesSchema.findByIdAndDelete(id)
  return noteDel
}
