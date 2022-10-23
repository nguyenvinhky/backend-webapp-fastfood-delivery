
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import account from './models/account';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.get('/add', (req, res) => {
    account.create(req.body)
    .then(function(data){
        res.json({da: data})
    }).catch(function(error){
        res.json({er: error})
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT = ${PORT}`);
})
