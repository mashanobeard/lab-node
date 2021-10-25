import { checkSchema } from 'express-validator';

const createSchema = checkSchema({
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
});

export default createSchema;
