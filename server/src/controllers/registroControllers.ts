import { Request, Response } from 'express';
import  mysql from 'promise-mysql';
import keys from '../keys';
import { text } from 'body-parser';

//import pool from '../database';

class Registrocontrollers {

   public async list (req: Request, res: Response) {
     const peruapps = await mysql.createConnection(keys.database);
     const result = await peruapps.query('SELECT * FROM peruapps');
     peruapps.end();
     res.json(result);
   } 
   
   public async regis (req: Request, res: Response): Promise<any> {
     const { id } = await req.params;
     const peruapps = await mysql.createConnection(keys.database);
     const result = await peruapps.query('SELECT * FROM peruapps WHERE id = ?', [id]);
     peruapps.end();
     console.log(result.length);
     if(result.length > 0) {
        return res.json(result[0]);
     }
     res.status(404).json({Text: 'Este esta persona no existe'});
   } 

   public async create (req: Request, res: Response):  Promise<void>{
     const peruapps = await mysql.createConnection(keys.database);
     const result = await peruapps.query('INSERT INTO peruapps set ? ', [req.body]);
     peruapps.end();
     res.json({text: 'Registro creado'});
   }

   public async update (req: Request, res: Response): Promise<void> {
      const { id } = await req.params;
      const peruapps = await mysql.createConnection(keys.database);
      const result = await peruapps.query('UPDATE peruapps set ? WHERE id = ?', [req.body, id]);
      peruapps.end();
      res.json({message: 'Registro del usuario actualizado'});
   }

   public async delete (req: Request, res: Response): Promise<void> {
      const { id } = await req.params;
      const peruapps = await mysql.createConnection(keys.database);
      const result = await peruapps.query('DELETE FROM peruapps WHERE id = ?', [id]);
      peruapps.end();
      res.json({message: "Registro de usuario eliminado"})
    } 

}

export const registrocontrollers = new Registrocontrollers();

export default registrocontrollers;


