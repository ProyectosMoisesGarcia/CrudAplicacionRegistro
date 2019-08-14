"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("../keys"));
//import pool from '../database';
class Registrocontrollers {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const peruapps = yield promise_mysql_1.default.createConnection(keys_1.default.database);
            const result = yield peruapps.query('SELECT * FROM peruapps');
            peruapps.end();
            res.json(result);
        });
    }
    regis(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield req.params;
            const peruapps = yield promise_mysql_1.default.createConnection(keys_1.default.database);
            const result = yield peruapps.query('SELECT * FROM peruapps WHERE id = ?', [id]);
            peruapps.end();
            console.log(result.length);
            if (result.length > 0) {
                return res.json(result[0]);
            }
            res.status(404).json({ Text: 'Este esta persona no existe' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const peruapps = yield promise_mysql_1.default.createConnection(keys_1.default.database);
            const result = yield peruapps.query('INSERT INTO peruapps set ? ', [req.body]);
            peruapps.end();
            res.json({ text: 'Registro creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield req.params;
            const peruapps = yield promise_mysql_1.default.createConnection(keys_1.default.database);
            const result = yield peruapps.query('UPDATE peruapps set ? WHERE id = ?', [req.body, id]);
            peruapps.end();
            res.json({ message: 'Registro del usuario actualizado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = yield req.params;
            const peruapps = yield promise_mysql_1.default.createConnection(keys_1.default.database);
            const result = yield peruapps.query('DELETE FROM peruapps WHERE id = ?', [id]);
            peruapps.end();
            res.json({ message: "Registro de usuario eliminado" });
        });
    }
}
exports.registrocontrollers = new Registrocontrollers();
exports.default = exports.registrocontrollers;
