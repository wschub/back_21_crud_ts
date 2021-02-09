import { Router} from 'express';
const router = Router();

import {getEstudiantes, getEstudianteID, newEstudiante,updateEstudiante,deleteEstudiante } from '../controllers/controller';

router.get('/estudiantes',getEstudiantes);
router.get('/estudiantes/:id',getEstudianteID);
router.post('/estudiantes',newEstudiante);
router.put('/estudiantes/:id',updateEstudiante);
router.delete('/estudiantes/:id',deleteEstudiante);




export default router;