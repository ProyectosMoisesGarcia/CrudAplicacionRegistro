import {Request,  Response} from 'express';

class IndexController {

   public index (req: Request, res: Response) {
    res.json({text: 'La direcciones esta en /registro'})
   } 

}

export const indexController = new IndexController();