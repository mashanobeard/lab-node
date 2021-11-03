import express from 'express';
import router from './modules/notes/routes/index.js';
import router1 from './modules/greeting/routes/index.js';
import morgan from 'morgan';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
//import * as swaggerDocument from './swagger/openapi.json';

import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 4000;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(express.json());

app.use('/api/notes', router);
app.use('/api/greetings', router1);

app.use(morgan(process.env.LOG_LEVEL)); //logger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test API',
      version: '1.0.0',
      description: 'My notes project API',
    },
    servers: [
      {
        url: 'http://localhost:4000/',
      },
    ],
  },
  apis: ['./modules/notes/routes/*.js'],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log('SERVER STARTED ON PORT ' + PORT);
    });
  } catch (e) {
    console.log(e);
  }
}
startApp();
