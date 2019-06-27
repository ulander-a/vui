export const cleanData = data => {
    const columns = Object.keys(data.results[0])
    const rows = data.results.map(res => Object.values(res))
    return {
        columns: columns,
        rows: rows
    }
}