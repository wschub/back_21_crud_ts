"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const roues_1 = __importDefault(require("./routes/roues"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(roues_1.default);
app.listen(4000);
console.log('ts corriendo en el puerto 4000');
