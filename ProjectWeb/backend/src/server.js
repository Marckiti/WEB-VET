//Crear nuestro backend
import express from 'express'
//Manejo de variables de entorno
import dotenv from 'dotenv'
//Permite comunicar entre dos paginas web de diferente dominio
import cors from 'cors'

//Inicializaciones
const app = express()
dotenv.config()

//Configuraciones


//Middlewares
app.use(express.json())
app.use(cors())

//Variables globales y de entorno
//con procces invoco DESDE .env
app.set('port', process.env.PORT || 3000)

//Rutas
app.get('/', (req,res) => res.send("Server on"))

//Exportar la instancia de express por medio de app
export default app