import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {} from 'dotenv/config'
import router from './routes/index.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser({limit: '50mb'}));
app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`))
