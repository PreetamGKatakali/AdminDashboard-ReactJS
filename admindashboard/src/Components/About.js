import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones,faEllipsisVertical,faPen,faPlus} from '@fortawesome/free-solid-svg-icons'
function About(){
    return(
        <div className="about-main">
            <div className="about-logo">
                <div className="about-img"></div>
                <h4>Full Stack developer</h4>
                <h5>Full Stack Developer lorem</h5>
            </div>
            <div className="about-reminders">
                <span>
                    <h4>Reminders</h4>
                    <aside></aside>
                </span>
                <div className="reminders-row">
                    <div className="record">
                        <span><FontAwesomeIcon icon={faHeadphones} /></span>
                        <div>
                            <h5>lorem</h5>
                            <h6>lorem of somthing</h6>
                        </div>
                        <aside><FontAwesomeIcon icon={faEllipsisVertical} /></aside>
                    </div>
                    <div className="record">
                        <span><FontAwesomeIcon icon={faPen} /></span>
                        <div>
                            <h5>lorem</h5>
                            <h6>lorem of somthing</h6>
                        </div>
                        <aside><FontAwesomeIcon icon={faEllipsisVertical} /></aside>
                    </div>
                    <div className="record border-dot">
                        <span></span>
                        <div>
                            <span><FontAwesomeIcon icon={faPlus} /></span>
                            <h5>Add More</h5>
                        </div>
                        <aside></aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About