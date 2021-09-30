import e from 'express'
import express from 'express'
import { checkSchema, validationResult } from 'express-validator'

const router = express.Router()

let data = []

//read
router.get('/notes', (req, res) => {
  res.status(200).json(data)
})

//create //validation
router.post(
  '/notes',
  checkSchema({
    title: {
      isLength: {
        errorMessage: 'Title should be at least 3 chars long',
        options: { min: 3 },
      },
    },
    content: {
      isLength: {
        errorMessage: 'Content should be min: 3 max:500 chars long',
        options: { min: 3, max: 500 },
      },
    },
  }),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() })
    }
    let itemIds = data.map((item) => item.id)
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1
    let newItem = {
      id: newId,
      title: req.body.title,
      content: req.body.content,
      createdAt: new Date(),
      updateAt: '',
    }
    data.push(newItem)
    res.status(201).json(newItem)
  }
)
//update //validation
router.put(
  '/notes/:id',
  checkSchema({
    id: {
      isLength: {
        errorMessage: 'Id is required ',
        options: { min: 1 },
      },
    },
    title: {
      isLength: {
        errorMessage: 'Title should be at least 3 chars long',
        options: { min: 3 },
      },
    },
    content: {
      isLength: {
        errorMessage: 'Content should be min: 3 max:500 chars long',
        options: { min: 3, max: 500 },
      },
    },
  }),
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    let found = data.find((item) => {
      return item.id === parseInt(req.params.id)
    })
    if (found) {
      let update = {
        id: found.id,
        title: req.body.title,
        content: req.body.content,
        updateAt: new Date(),
      }
      let targetIndex = data.indexOf(found)
      data.splice(targetIndex, 1, update)

      res.status(201).json(update)
    } else {
      res.sendStatus(404)
    }
  }
)

//delete
router.delete('/notes/:id', (req, res) => {
  let found = data.find((item) => {
    return item.id === parseInt(req.params.id)
  })
  if (found) {
    let targetIndex = data.indexOf(found)
    data.splice(targetIndex, 1)
    res.status(201).json({ success: true, id: req.params.id })
  } else {
    res.sendStatus(404)
  }
})

export default router
