import express from 'express';
import cors from 'cors';
import Router from './routes/routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(Router);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})