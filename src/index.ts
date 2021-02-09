import express, { Application} from 'express';
const app: Application = express();
import routes from './routes/roues';

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(routes);


app.listen(4000);
console.log('ts corriendo en el puerto 4000');