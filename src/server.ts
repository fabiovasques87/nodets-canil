import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
//para pasta puublica
import path from 'path';
import mainRoutes from './routes/index';



dotenv.config();

const server = express();

//configurar o template engine "mustache"
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());


//configurar a pasta publica
server.use(express.static(path.join(__dirname, '../public')));


//Rotas
server.use(mainRoutes);


//rota para página não encontrada
server.use((req,res)=>{
   res.render('pages/404') 
});

//rodar o server
server.listen(process.env.PORT);






