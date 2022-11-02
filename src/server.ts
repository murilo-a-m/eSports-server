import express, { response } from "express";

 const app = express();

 app.get('/games',(request,response)=>{
    return response.json([]);
 });

 app.post('/ads', (resquest,responde)=>{
   return response.status(201).json([]);
 });

 app.get('/games/:id/ads', (request,response)=>{
   const gameId = request.params.id;

   return response.send(gameId);
 });

 app.get('/ads/:id/discord', (request,response)=>{
   const adId = request.params.id;

   return response.send(adId);
 });

 app.listen(3333);