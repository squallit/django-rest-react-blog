
//using spread operator to override properties from oldObject
//with new properties with the same name from updatedProperties
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
}
