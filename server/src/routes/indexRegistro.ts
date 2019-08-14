import { Router } from 'express';

import  registrocontrollers from '../controllers/registroControllers'

class IndexRegistro {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', registrocontrollers.list);
        this.router.get('/:id', registrocontrollers.regis);
        this.router.post('/', registrocontrollers.create);
        this.router.put('/:id', registrocontrollers.update);
        this.router.delete('/:id', registrocontrollers.delete);
    }

}

const indexRegistro = new IndexRegistro();
export default  indexRegistro.router;