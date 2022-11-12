import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'

const logout = () => {


    const { state, dispatch } = useContext(UserContext)

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
            dispatch({ type: "USER", payload: false })
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