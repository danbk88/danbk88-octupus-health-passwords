import * as express from 'express';
import routes from './routes/routes';
import * as dotenv from 'dotenv';

dotenv.config();

let app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use('/api/', routes);

app.listen(port, () => console.log(`Octupus health Home assignment listening at http://localhost:${port}`)); 

export default app;