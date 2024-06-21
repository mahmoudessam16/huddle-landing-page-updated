import React from 'react'
import '../sass/item.scss'

const Item = ({ title, description, image, direction }) => {
    return (
        <div className='item' style={{ flexDirection: `${direction}` }}>
            <div className='info'>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className='image'>
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default Item
