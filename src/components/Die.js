import React from "react";



export default function Die(props) {
    const styles = {
        backgroundColor: props.value.isHeld? '#59E391' :  '#FFFFFF'
    }

    return(

        <div className='die' style={styles} onClick={props.holdDice} >
            <h3>{props.value.value}</h3>
        </div>
    )}