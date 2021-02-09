"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEstudiante = exports.updateEstudiante = exports.newEstudiante = exports.getEstudianteID = exports.getEstudiantes = void 0;
const db_1 = require("../db/db");
const getEstudiantes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.pool.query('SELECT * FROM estudiantes');
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
exports.getEstudiantes = getEstudiantes;
const getEstudianteID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield db_1.pool.query('SELECT * FROM estudiantes WHERE id  = $1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
exports.getEstudianteID = getEstudianteID;
const newEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombres, apellidos, edad } = req.body;
        const response = yield db_1.pool.query('INSERT INTO estudiantes (nombres,apellidos,edad) VALUES($1,$2,$3)', [nombres, apellidos, edad]);
        return res.status(200).json('Estudinate creado');
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
exports.newEstudiante = newEstudiante;
const updateEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombres, apellidos, edad } = req.body;
        const id = parseInt(req.params.id);
        const response = yield db_1.pool.query('UPDATE estudiantes SET nombres = $1, apellidos = $2, edad=$3 WHERE id = $4', [nombres, apellidos, edad, id]);
        return res.status(200).json('Estudinate update');
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
exports.updateEstudiante = updateEstudiante;
const deleteEstudiante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield db_1.pool.query('DELETE FROM estudiantes WHERE id = $1', [id]);
        return res.status(200).json(`Estudinate elimnado ${id}`);
    }
    catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error');
    }
});
exports.deleteEstudiante = deleteEstudiante;
