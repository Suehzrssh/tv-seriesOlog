import express from 'express';
import { getData, postData, updateData, deleteData, getSingle } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getData);
router.get('/single/:id', getSingle);
router.post('/', postData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);





export default router;