import { checkSchema } from 'express-validator'

const updateSchema = checkSchema({
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
})

export default updateSchema
