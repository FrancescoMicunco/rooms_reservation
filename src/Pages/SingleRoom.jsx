import React from "react";
import { useParams } from 'react-router-dom'
import room from "../data/rooms"
import '../styles/singleRoom.css'

const SingleRoom = () => {

    let sectionStyle = {
        backgroundImage: "url('https://picsum.photos/200/300')",
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh'
    }
    let params = useParams()
    let roomSelected = room?.find(r => r.name === params.name)

    return (

        <div>

            <div className="bigContainer" >
                <div className="hero">
                    < h1 className="bigH1" style={{ color: 'white', border: 'solid 8px white', margin: '10% 30%', padding: '3% 0' }}> {params.name} Room</h1 >
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