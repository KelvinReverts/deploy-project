import React from 'react'
import './style.css'

export default function ItemList(props){
    return(
        <div className='boxSign'>
            <div className='nameSign'>
                {props.sign}
            </div>

            <img className='imgSign' src={props.img} alt={props.sign}/>
            <div className='bornDate'>
                {props.startDate} - {props.endDate}
            </div>
        </div>
    )
}