import React, { useState } from 'react';
import './baitap3.css'

const Baitap3 = () => {
    const [check,setCheck]=useState(true)
    const handle_toggle=()=>{
        setCheck(!check)
    }
    
    return (
        <div className={check?"main":"main active"}>
            <button onClick={handle_toggle}>toggle</button>
            {
            check &&
            (<div>
                menu xuất hiện
                </div>)
        }
        </div>
       
    );
}

export default Baitap3;
