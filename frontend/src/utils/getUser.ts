const getUser = async (token: any) => {
    const response = fetch('http://localhost:4000/auth/profile', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "<origin>",
            "Authorization": `Bearer ${token}`
           },
    })
    const data = (await response).json()
    return data
}


export default getUser