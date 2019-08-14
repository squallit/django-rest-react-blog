
//using spread operator to override properties from oldObject
//with new properties with the same name from updatedProperties
//use to combine 2 objects or 2 arrays
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}
