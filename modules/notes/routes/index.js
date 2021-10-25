import express from 'express';
import getController from '../controllers/getNote.js';
import createController from '../controllers/createNote.js';
import updateController from '../controllers/updateNote.js';
import deleteController from '../controllers/deleteNote.js';
import createSchema from '../validation/createSchema.js';
import updateSchema from '../validation/updateSchema.js';

const router = express.Router();

//read
router.get('/', getController);

//create //validation
router.post('/', createSchema, createController);
//update //validation
router.put('/:id', updateSchema, updateController);

//delete
router.delete('/:id', deleteController);

export default router;
