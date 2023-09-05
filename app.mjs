import * as Mountains from "./Mountains/MountainsInterface.mjs"
import {createApp} from "./createApp.mjs";

const app = createApp()

app.get('/', (req, res) => {
    res.send('Welcome to MountainsAPI!')
})

app.get('/mountains',async (req,res) => {
    const mountains = await Mountains.mountains()
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
    const mountains = await Mountains.mountains(m => {
        if(operator === ">")
            return m.height > height
        else if(operator === "=")
            return m.height === height
        else
            return m.height < height
    })
    return res.send(JSON.stringify(mountains))
})

/*
    TODO: Implement some type checking to avoid inappropriate input
    TODO: At least implement wrong input handling
 */
app.post('/mountains',async (req,res) => {
    const persisted = await Mountains.addMountain(req.body)
    return res.send(JSON.stringify(persisted))
})

app.delete('/mountains/:id',async (req,res) => {
    const id = req.params.id
    const result = await Mountains.removeMountain(id)
    return res.send(JSON.stringify(result))
})

