export const convertStringToDate = (date) => {
    if (String(date).split(".").length < 2) return Infinity
    date = String(date).split(".")
    const day = Number(date[0])
    const month = Number(date[1])
    const year = Number(date[2])
    date = new Date(year, month, day)
    return date
}
