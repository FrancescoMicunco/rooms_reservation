import React from 'react';
import room from '../data/rooms';

const CardRoom = () => {
    return (
        <div >
            {room.map(room =>
                <>
                    <img src="" alt="" />
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>
                    <p>{room.floor}</p>
                </>
            )

            }

        </div>
    )
}

export default CardRoom