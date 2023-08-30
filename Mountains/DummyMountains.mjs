const nullMountain = {
    name: "",
    nativeNamess: [],
    location: "",
    height: -1,
    range: "",
    id: -1
}

const mountains = [
    {
        name: "Mount Everest",
        nativeNames: ["Sagarmatha","Chomolungma"],
        location: "China/Nepal",
        height: 8848,
        range: "Mahalangur Himal",
        type: "Mountain",
        id: 0
    },
    {
        name: "Kilimanjaro",
        nativeNames: ["Mont Kilimanjaro"],
        location: "Tanzania",
        height: 5895,
        range: "",
        type: "stratovolcano",
        id: 1
    },
    {
        name: "Blanc",
        nativeNames: ["Monte Bianco"],
        location: "French/Italy",
        height: 4804,
        range: "French Alps",
        type: "Mountain",
        id: 2
    },
    {
        name: "Himmelbjerget",
        nativeNames: [],
        location: "Denmark",
        height: 147,
        range: "Græsplænen",
        type: "Hill",
        id: 3
    },
    {
        name: "K2",
        nativeNames: [],
        location: "Pakistan/China",
        height: 8611,
        range: "Karakoram range",
        type: "Mountain",
        id: 4
    },
    {
        name: "Kangchenjunga",
        nativeNames: ["Kangchenjunga"],
        location: "Nepal/India",
        height: 8586,
        range: "",
        type: "Mountain",
        id: 5
    },
]

let nextId = mountains.length

export const all = async (sorter, filter) => {
    let list = mountains
    if(filter)
        list = list.filter(filter)
    if(sorter)
        list = list.sort(sorter)
    return list
}

export const single = async id => {
    const numericId = Number.parseInt(id)
    const mountain = mountains.find(m => m.id === numericId)
    return mountain ? mountain : nullMountain
}

export const add = async mountain => {
    mountain.id = nextId++
    mountains.push(mountain)
    return true
}

export const remove = async id => true