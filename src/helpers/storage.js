const DATA_KEY = 'userImages'

export const getData = () =>{
    const currentData = localStorage.getItem(DATA_KEY)
    
    if(!currentData) return []
    return JSON.parse(currentData)
}

export const saveData = ({ data }) =>{
    const currentData = getData()
    const _data = {
        id: currentData.length,
        timeStamp: Date.now(),
        ...data
    }
    const parsedData = JSON.stringify([...currentData, _data])
    localStorage.setItem(DATA_KEY, parsedData)
}

export const updateData = ({fieldsToUpdate, objectId}) =>{
    const currentData = getData()
    const match = ({ id:_id }) => _id === objectId
    const dataToUpdate = currentData.find(match)
    const index = currentData.findIndex(match)
    const updatedData = { ...dataToUpdate, ...fieldsToUpdate }
    currentData.splice(index, 1, updatedData)
    localStorage.setItem(DATA_KEY, JSON.stringify(currentData))
}