import * as DummyMountains from "./DummyMountains.mjs";

const Mountains = DummyMountains

export const mountains = async (filter) => await Mountains.all(filter)
export const mountain = async id => await Mountains.single(id)
export const addMountain = async (mountain) => await Mountains.add(mountain)
export const removeMountain = async id => await Mountains.remove(id)
export const updateMountain = async (updateValues) => await Mountains.updatePartly(updateValues)