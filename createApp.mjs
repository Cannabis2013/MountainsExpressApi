import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

export const createApp = () => {
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors({
        origin: '*',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }))

    const port = 3000
    
    app.listen(port, () => {
        console.log(`
    GET http://localhost:${port}
    GET http://localhost:${port}/mountains
    POST http://localhost:${port}/mountains/byHeight
    `)
    })    
    
    return app
}

export class corsOptions {
}