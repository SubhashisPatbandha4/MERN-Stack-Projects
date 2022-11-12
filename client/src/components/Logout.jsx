import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const logout = () => {

    const navigate = useNavigate()
    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
            navigate("/login ")
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    return (
        <div>logout</div>
    )
}

export default logout