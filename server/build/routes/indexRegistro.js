"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registroControllers_1 = __importDefault(require("../controllers/registroControllers"));
class IndexRegistro {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', registroControllers_1.default.list);
        this.router.get('/:id', registroControllers_1.default.regis);
        this.router.post('/', registroControllers_1.default.create);
        this.router.put('/:id', registroControllers_1.default.update);
        this.router.delete('/:id', registroControllers_1.default.delete);
    }
}
const indexRegistro = new IndexRegistro();
exports.default = indexRegistro.router;
