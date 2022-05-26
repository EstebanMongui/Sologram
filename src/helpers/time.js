export const calculateTime = (timeAgo) => {
    console.log('timeAgo: ', timeAgo)
    const milisecondsAgo = Date.now() - timeAgo
    const seconds = milisecondsAgo / 1000
    const minutesAgo = seconds / 60 
    const hoursAgo = minutesAgo / 60
    const daysAgo = hoursAgo / 24
    
    console.log(minutesAgo)

    const [time, unit] = (
        seconds < 60 ? [seconds, 'seconds'] 
        : minutesAgo < 60 ? [minutesAgo, 'minutes'] 
        : hoursAgo < 60 ? [hoursAgo, 'hours'] : [daysAgo, 'days'])
    
    return Math.round(time).toString() + ' ' + unit
}