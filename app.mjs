import * as Mountains from "./Mountains/MountainsInterface.mjs"
import {createApp} from "./createApp.mjs";

const app = createApp()

const sorter = (a, b) => {
    return b.height - a.height
}

app.get('/', (req, res) => {
    res.send('Welcome to MountainsAPI!')
})

app.get('/mountains',async (req,res) => {
    const mountains = await Mountains.mountains(sorter)
    return res.send(JSON.stringify(mountains))
})

app.get('/mountains/:id', async (req,res) => {
    const id = req.params.id
    const mountain = await Mountains.mountain(id)
    return res.send(JSON.stringify(mountain))
})

app.post('/mountains/byHeight/', async (req,res) => {
    const predicate = req.body
    const operator = predicate.operator
    const height = predicate.height
    const mountains = await Mountains.mountains(sorter,m => {
        if(operator === ">")
            return m.height > height
        else if(operator === "=")
            return m.height === height
        else
            return m.height < height
    })
    return res.send(JSON.stringify(mountains))
})

