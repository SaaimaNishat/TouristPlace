import React from 'react'
import '../pages/CSS/Details.css'

function Detailselement({props}) {
    return(
        <>
            <p className="paragraph">{props}</p>
            <br></br>
        </>
    );
}

export default Detailselement;