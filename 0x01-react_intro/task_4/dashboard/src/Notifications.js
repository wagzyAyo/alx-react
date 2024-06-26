import React from 'react'
import './Notification.css'
import close from './close.png';
import { getLatestNotification } from './utils';

function Notifiaction() {
    return(
        <div className="Notification">
            
            <button style={{
                position: 'absolute',
                right:'5px',
                top: '15px',
                background: 'none',
                border: 'none'
                }} aria-label='Close' onClick={(e)=> {
                    console.log('Close button has been clicked')
                }}>
                    <img src={close} alt='closeIcon' style={{width:'15px', height: 'auto'}}/>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                <li style={{color:'blue'}}
                    data-priority='default'>New course available</li>
                    <li style={{color:'red'}}
                     data-priority='urgent'>New resume available</li>
                    <li style={{color:'red'}}
                     dta-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
                </ul>
        </div>
    )
}


export default Notifiaction