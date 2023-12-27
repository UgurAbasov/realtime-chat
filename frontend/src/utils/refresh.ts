const refresh = async (refreshToken: any) => {
    const response = await fetch('http://localhost:4000/auth/refresh', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "<origin>",
           },
        body: JSON.stringify({
            refreshToken
        })
    })
    const data = response.json()
    return data
}

export default refresh