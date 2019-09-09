export const cleanData = data => {
    const headers = Object.keys(data.results[0]).map(key => {
        return {
            text: key,
            align: 'left',
            sortable: true,
            value: key
        }
    })

    const rows = data.results
    
    return {
        headers: headers,
        rows: rows
    }
}

