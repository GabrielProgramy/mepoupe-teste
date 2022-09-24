import express from 'express'
import AverageController from './controllers/AverageController'
import CEPController from './controllers/CEPController'

const app = express()

const cepController = new CEPController()
const averageController = new AverageController()

app.use(express.json())

app.get('/average', averageController.calculate)

app.get('/cep/:cep', cepController.getCep)

app.listen(3333, () => console.log('Listening on Port 3333'))
