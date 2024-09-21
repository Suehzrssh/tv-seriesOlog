import express from 'express';
import cors from 'cors';
import postRouter from './routes/route.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', postRouter);
app.use('/:id', postRouter);
app.use('/create', postRouter);
app.use('/update/:id', postRouter);
app.use('/delete/:.id', postRouter);



app.listen(5000, () => {
    console.log("server is running on port 5000...");
});