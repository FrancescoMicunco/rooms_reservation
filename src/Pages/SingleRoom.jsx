import React from "react";
import { useParams } from 'react-router-dom'

const SingleRoom = () => {
    let { name } = useParams()
    return (

        < h1 > {name} Description</h1 >
    )


}

export default SingleRoom