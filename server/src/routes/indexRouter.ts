import { Router } from 'express';
import { indexController } from '../controllers/indexControllers';

class IndexRouter {

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
    }

}

const indexRouter = new IndexRouter();
export default  indexRouter.router;