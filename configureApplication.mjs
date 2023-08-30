import bodyParser from "body-parser";
import cors from "cors";

export const configureApplication = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors({
        origin: '*',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }))
}

export class corsOptions {
}