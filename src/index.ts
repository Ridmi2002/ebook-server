import  express, { response } from 'express'

const app = express()

const port=process.env.PORT || 8989

app.get('/', (request,response)=>{
    response.send("<h1>Hello this is our App!<br>  Warmly welcome</h1>")
})

app.get('/login', (request,response)=>{
    response.send("<h1>Hello this is my login page!</h1>")
})

app.listen(port,() =>{
    console.log(`The application is running on port http://localhost:${port}`)
})