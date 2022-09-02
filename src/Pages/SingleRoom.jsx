import React from "react";
import { useParams } from 'react-router-dom'
import room from "../data/rooms"
import '../styles/singleRoom.css'
import { MdBathroom, MdAccessibleForward, MdSmokingRooms } from 'react-icons/md'



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
                <h3>{roomSelected.description}
                </h3>
            </div>
            <div className="divider"></div>
            <div className="iconSection" >
                <div className='singleIconCard'>
                    <MdBathroom className='icon' />
                    <p className='iconDescription'>{roomSelected.bath}</p>
                </div>
                <div className='singleIconCard'>
                    <MdAccessibleForward className='icon' />
                    <p className='iconDescription'>{roomSelected.handicapHallowed}</p>
                </div>
                <div className='singleIconCard'>
                    <MdSmokingRooms className='icon' />
                    <p className='iconDescription'>{roomSelected.bath}</p>
                </div>
            </div>
            <div className="iconSection" >
                <div className='singleIconCard'>
                    <MdBathroom className='icon' />
                    <p className='iconDescription'>{roomSelected.bath}</p>
                </div>
                <div className='singleIconCard'>
                    <MdAccessibleForward className='icon' />
                    <p className='iconDescription'>{roomSelected.handicapHallowed}</p>
                </div>
                <div className='singleIconCard'>
                    <MdSmokingRooms className='icon' />
                    <p className='iconDescription'>{roomSelected.bath}</p>
                </div>
            </div>


        </div >

    )


}

export default SingleRoom