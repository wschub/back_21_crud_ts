import { Request, Response} from 'express';
import { pool} from '../db/db';
import { QueryResult} from 'pg';


export const getEstudiantes = async(req:Request,res:Response): Promise<Response> =>{
    
   try{
    const response: QueryResult = await pool.query(
        'SELECT * FROM estudiantes'
    );
    return res.status(200).json(response.rows);
   } catch(e){
       console.log(e);
       return res.status(500).json('Internal server error');
   }
};


export const getEstudianteID = async(req:Request,res:Response): Promise<Response> =>{
    
    try{
        const id = parseInt(req.params.id);

     const response: QueryResult = await pool.query(
         'SELECT * FROM estudiantes WHERE id  = $1',[id]
     );
     return res.status(200).json(response.rows);
    } catch(e){
        console.log(e);
        return res.status(500).json('Internal server error');
    }
 };


export const newEstudiante = async(req:Request,res:Response): Promise<Response> =>{
    
    try{
        
        const { nombres, apellidos, edad} = req.body;
     const response: QueryResult = await pool.query(
         'INSERT INTO estudiantes (nombres,apellidos,edad) VALUES($1,$2,$3)',
         [nombres, apellidos, edad]
     );
     return res.status(200).json('Estudinate creado');
    } catch(e){
        console.log(e);
        return res.status(500).json('Internal server error');
    }
 };


 export const updateEstudiante = async(req:Request,res:Response): Promise<Response> =>{
    
    try{
        
        const { nombres, apellidos, edad} = req.body;
        const id = parseInt(req.params.id);

     const response: QueryResult = await pool.query(
         'UPDATE estudiantes SET nombres = $1, apellidos = $2, edad=$3 WHERE id = $4',
         [nombres, apellidos, edad, id]
     );
     return res.status(200).json('Estudinate update');
    } catch(e){
        console.log(e);
        return res.status(500).json('Internal server error');
    }
 };


 export const deleteEstudiante = async(req:Request,res:Response): Promise<Response> =>{
    
    try{
     
        const id = parseInt(req.params.id);
     const response: QueryResult = await pool.query(
         'DELETE FROM estudiantes WHERE id = $1',
         [id]
     );
     return res.status(200).json(`Estudinate elimnado ${id}`);
    } catch(e){
        console.log(e);
        return res.status(500).json('Internal server error');
    }
 };