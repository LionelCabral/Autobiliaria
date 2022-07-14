import React from 'react'

const Item = ({item}) => {
    return (
    <div className="contenderoItem">
        <img src={item.img} alt='' width='100px' />
        <div>
        <h2>{item.name}</h2>
        <h4>${item.price}</h4>
        <h6>{item.description}</h6>
        </div>
    </div>
    )
}

export default Item
