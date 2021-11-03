import express from 'express';
import getController from '../controllers/getNote.js';
import createController from '../controllers/createNote.js';
import updateController from '../controllers/updateNote.js';
import deleteController from '../controllers/deleteNote.js';
import createSchema from '../validation/createSchema.js';
import updateSchema from '../validation/updateSchema.js';

const router = express.Router();

//read
/**
 *  @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id
 *         title:
 *           type: string
 *           minLength: 3
 *         content:
 *           type: string
 *           minLength: 3
 *           maxLength: 500
 *         isDeleted:
 *           type: boolean
 *           default: false
 *       example:
 *         id: 616804ccd5464b06e00a5856
 *         title: cat
 *         content: meow
 *         createdAt: 2021-10-14T10:20:44.537Z
 *         updatedAt: 2021-10-14T10:20:54.537Z
 */

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: API
 */

/**
 * @swagger
 * /api/notes:
 *  get:
 *      summary: Get notes
 *      tags: [Notes]
 *      responses:
 *         "200":
 *          description: A successful response
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                           $ref: '#/components/schemas/Note'
 */
router.get('/', getController);

//create //validation

/**
 * @swagger
 * /api/notes:
 *  post:
 *      summary: Create note
 *      tags: [Notes]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Note'
 *      responses:
 *        "200":
 *           description: A successful response
 *           content:
 *                application/json:
 *                    schema:
 *                       $ref: '#/components/schemas/Note'
 *        "500":
 *           description: some server error
 */
router.post('/', createSchema, createController);
//update //validation
/**
 * @swagger
 * /api/notes/{id}:
 *  put:
 *      summary: Update note
 *      tags: [Notes]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the note you want to update
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Note'
 *      responses:
 *        "200":
 *           description: The note was updated
 *           content:
 *                application/json:
 *                    schema:
 *                       $ref: '#/components/schemas/Note'
 *        "404":
 *           description: The note wasn't found
 *        "500":
 *           description: some server error
 */
router.put('/:id', updateSchema, updateController);

//delete
/**
 * @swagger
 * /api/notes/{id}:
 *  delete:
 *      summary: Delete note
 *      tags: [Notes]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: Id of the note you want to delete
 *      responses:
 *        "200":
 *           description: The note was deleted
 *           content:
 *                application/json:
 *                    schema:
 *                       $ref: '#/components/schemas/Note'
 *        "404":
 *           description: The note wasn't found
 *        "500":
 *           description: some server error
 */
router.delete('/:id', deleteController);

export default router;
