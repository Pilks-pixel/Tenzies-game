import React from "react";



export default function Die(props) {
    const styles = {
        backgroundColor: props.value.isHeld? '#59E391' :  '#18191f'
    }

    
    return(
        <>
            {/* <div className='die' style={styles} onClick={props.holdDice} >
                <h3>{props.value.value}</h3>
            </div> */}

            { props.value.value === 1 &&
                <div className='first-face' style={styles} onClick={props.holdDice}>
                    <span className='dot' ></span>
                </div> 
            }
            { props.value.value === 2 &&
                <div className='second-face' style={styles} onClick={props.holdDice}>
                    <span className='dot' ></span>
                    <span className='dot' ></span>
                </div> 
            }
            { props.value.value === 3 &&
                <div className='third-face' style={styles} onClick={props.holdDice}>
                    <span className='dot' ></span>
                    <span className='dot' ></span>
                    <span className='dot' ></span>
                </div> 
            }
            { props.value.value === 4 &&
                <div className='fourth-face' style={styles} onClick={props.holdDice}>
                    <div className='column'>
                        <span className='dot' ></span>
                        <span className='dot' ></span>
                    </div>
                    <div className='column'>
                        <span className='dot' ></span>
                        <span className='dot' ></span>
                    </div>
                </div> 
            }
            { props.value.value === 5 &&
                <div className='fifth-face' style={styles} onClick={props.holdDice}>
                    <div className='column'>
                        <span className='dot' ></span>
                        <span className='dot' ></span>
                    </div>
                    <span className='dot' ></span>
                    <div className='column'>
                        <span className='dot' ></span>
                        <span className='dot' ></span>
                    </div>
                </div> 
            }
            { props.value.value === 6 &&
                <div className='sixth-face' style={styles} onClick={props.holdDice}>
                    <div className='column'>
                        <span className='dot' ></span>
                        <span className='dot' ></span>
                        <span className='dot' ></span>
                    </div>
                    <div className='column'>
                        <span className='dot' ></span>
                        <span className='dot' ></span>
                        <span className='dot' ></span>
                    </div>
                </div> 
            }

        </>
    )}