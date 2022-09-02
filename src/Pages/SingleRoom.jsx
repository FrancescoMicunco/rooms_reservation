import React from "react";
import { useParams } from 'react-router-dom'
import room from "../data/rooms"
import '../styles/singleRoom.css'

const SingleRoom = () => {

    let params = useParams()
    let roomSelected = room?.find(r => r.name === params.name)

    return (

        <div>

            <div className="bigContainer" >
                <div className="hero">
                    < h1 className="bigH1"> {params.name} Room</h1 >
                </div>
            </div>

            <div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque quia hic voluptatibus quaerat cum aliquam, voluptas dolores ut explicabo distinctio!
                </h3>
            </div>


        </div >

    )


}

export default SingleRoom