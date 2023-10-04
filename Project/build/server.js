"use strict";
var __importDefault =
 (this && this.__importDefault) || function (mod) 
  {  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/ads', (request, response) => {
    return response.json([
        { id: 1, name: 'League Of Legends' },
        { id: 2, name: 'Counter Strike: Global' },
        { id: 3, name: 'Valorant' },
        { id: 4, name: 'Habbo' },
        { id: 5, name: 'Sea Of Thieves' },
        { id: 6, name: 'COD - WarZone' },
        { id: 7, name: 'Battlefield 1' },
        { id: 8, name: 'Fall Guys' }
    ]);
});
app.listen(5254);
//Rodar: node build/server.js (DENTRO DA PASTA BUILD/ Atualiza o comentario também)
//RODAR AGORA: npm run dev
//compilar de TS para JS : npm run build
