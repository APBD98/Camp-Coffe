import React from 'react'

const MenuList = (props) => {
  return (
    <div className='title-menu row ms-5 mt-5'>
        <div className='col-8'>
            <h5>{props.title}</h5>
            <p>{props.desc}</p>
        </div>
        <div className="price col">
            <p>{props.price}</p>
        </div>
    </div>
  )
}

export default MenuList