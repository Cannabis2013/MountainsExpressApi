import * as DummyMountains from "./DummyMountains.mjs";

const Mountains = DummyMountains

export const mountains = async (sorter, filter) => await Mountains.all(sorter, filter)
export const mountain = async id => await Mountains.single(id)
export const addMountain = async (mountain) => await Mountains.add(mountain)
export const removeMountain = async id => await Mountains.remove(id)