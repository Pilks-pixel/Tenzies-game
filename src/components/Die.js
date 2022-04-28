import React from "react";



export default function Die(props) {
    const styles = props.value.isHeld?  {backgroundColor: '#59E391'} : {backgroundColor: '#FFFFFF'}

    return(

        <div className='die' style={styles} >
            <h3>{props.value.value}</h3>
        </div>
    )}