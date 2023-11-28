import React from "react";

function Head({buton}){

    
    return(
        <div className="head-container">
            <div className="head-logo center-item">PK<aside>prog</aside></div>
            <div className="head-analytics ">Analytics</div>
            <div className="head-account center-item">
                <div className="toggle-btn">
                    <label className="switch">
                        <input type="checkbox" onChange={buton}/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <h4>account</h4>
            </div>
        </div>
    )
}

export default Head