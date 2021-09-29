import express from 'express'

const router = express.Router()

let data = []

//read
router.get('/notes', (req, res) => {
  res.status(200).json(data)
})

//create
router.post('/notes', (req, res) => {
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
})
//update
router.put('/notes/:id', (req, res) => {
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
})

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
