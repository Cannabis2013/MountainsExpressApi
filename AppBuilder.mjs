import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import {expressjwt} from "express-jwt";
import fs from "fs"

let SECRET = fs.readFileSync('./auth0-cert.cer','utf8')

let app = null

export default {
    name: "AppBuilder",
    createApp() {
        if(app)
            return app
        app = express()
        const jwtChecker = expressjwt({
            audience: 'http://localhost:3000',
            issuer: 'https://dev-chlrw7rx.us.auth0.com/',
            secret: SECRET,
            algorithms: ['RS256'],
        })
        app.use(jwtChecker)
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(cors({
            origin: '*',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        }))

        const port = 3000

        app.listen(port, () => {})
        console.log(`
            GET http://localhost:${port}
            GET http://localhost:${port}/mountains
            GET http://localhost:${port}/mountains/{id}
            POST http://localhost:${port}/mountains/byHeight
            POST http://localhost:${port}/mountains
            DELETE http://localhost:${port}/mountains/{id}
        `)
        return app
    }
}

