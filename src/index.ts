import express from 'express';
import { Request, Response, NextFunction, Application} from 'express';
import bodyParser from 'body-parser';


const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});