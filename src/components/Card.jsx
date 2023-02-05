import React from 'react'

const Card = (props) => {
  return (
    <>
        <div>{props.name}</div>
        <div>{props.rarity}</div>
        <div>{props.price}</div>
    </>
  )
}

export default Card