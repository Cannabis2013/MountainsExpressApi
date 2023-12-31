import {v4 as uuidv4} from 'uuid';

let mountains = [
    {
        name: "Mount Everest",
        nativeNames: ["Sagarmatha", "Chomolungma"],
        location: "China/Nepal",
        height: 8848,
        range: "Mahalangur Himal",
        type: "Mountain",
        description: "The worlds tallest mountain that resides on the border of China And Nepal and has claimed many lives.",
        id: uuidv4()
    },
    {
        name: "Kilimanjaro",
        nativeNames: ["Mont Kilimanjaro"],
        location: "Tanzania",
        height: 5895,
        range: "",
        type: "stratovolcano",
        description: "A stratovolcano located in Tanzania near the border of Kenya.",
        id: uuidv4()
    },
    {
        name: "Mont Blanc",
        nativeNames: ["Monte Bianco"],
        location: "French/Italy",
        height: 4804,
        range: "French Alps",
        type: "Mountain",
        description: "Regarded as the highest mountain in Europa with its 4804 meters above the sea level.",
        id: uuidv4()
    },
    {
        name: "Himmelbjerget",
        nativeNames: [],
        location: "Denmark",
        height: 147,
        range: "Græsplænen",
        type: "Hill",
        description: "An iconic hill located in Denmark and is known for its beatifull nature. You should pay it a visit someday.",
        id: uuidv4()
    },
    {
        name: "K2",
        nativeNames: [],
        location: "Pakistan/China",
        height: 8611,
        range: "Karakoram range",
        type: "Mountain",
        description: "A shitty mountain that is regarded as the second highest mountain in the world. Has also claimed the lives of many good men.",
        id: uuidv4()
    },
    {
        name: "Kangchenjunga",
        nativeNames: ["Kangchenjunga"],
        location: "Nepal/India",
        height: 8586,
        range: "",
        type: "Mountain",
        description: "This mountain is said to be the vacation location of the notorious Yeti. Be carefull.",
        id: uuidv4()
    }
]

let nextId = mountains.length

const sorter = (a, b) => {
    return b.height - a.height
}

export const all = async (filter) => {
    let list = mountains
    if (filter)
        list = list.filter(filter)
    if (sorter)
        list = list.sort(sorter)
    return list
}

export const single = async id => {
    return mountains.find(m => m.id === id)
}

export const add = async m => {
    m.id = uuidv4()
    mountains.push(m)
    return m
}

export const remove = async id => {
    const removed = mountains.find(m => m.id === id)
    if (!removed)
        return null
    mountains = mountains.filter(m => m.id !== id)
    return removed
}

export const updatePartly = async (updateValues) => {
    const candidate = mountains.find(m => m.id === updateValues.id)
    if(!candidate)
        return null
    candidate.name = updateValues.name ? updateValues.name : candidate.name
    candidate.nativeNames = updateValues.nativeNames ? updateValues.nativeNames : candidate.nativeNames
    candidate.location = updateValues.location ? updateValues.location : candidate.location
    candidate.height = updateValues.height ? updateValues.height : candidate.height
    candidate.range = updateValues.range ? updateValues.range : candidate.range
    candidate.type = updateValues.type ? updateValues.type : candidate.type
    candidate.description = updateValues.description ? updateValues.description : candidate.description
    return candidate
}