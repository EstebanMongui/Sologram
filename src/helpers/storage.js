const DATA_KEY = 'userImages'

const getData = () =>{
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