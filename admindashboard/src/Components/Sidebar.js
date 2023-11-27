import React from "react";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faUser,faTableColumns,faFileLines,faArrowRightFromBracket,faChartLine,faTicket,faPlus,faListUl,faFlag,faGear} from '@fortawesome/free-solid-svg-icons'
function Sidebar(){
    return(
        <div className="sidebar">
            <a href="#">
                <span><FontAwesomeIcon icon={faTableColumns} /></span>
                <h3>Dashboard</h3>
            </a>
            <a href="#">
                <span><FontAwesomeIcon icon={faUser} /></span>
                <h3>User</h3>
            </a>
            <a href="#">
                <span><FontAwesomeIcon icon={faFileLines} /></span>
                <h3>History</h3>
            </a>
            <a href="#">
                <span><FontAwesomeIcon icon={faChartLine} /></span>
                <h3>History</h3>
            </a>
            <a href="#">
                <span><FontAwesomeIcon icon={faTicket} /></span>
                <h3>Tickets</h3>
            </a>
            <a href="#">
                <span><FontAwesomeIcon icon={faListUl} /></span>
                <h3>Solo list</h3>
            </a>
            <a href="#">
                <span><FontAwesomeIcon icon={faFlag} /></span>
                <h3>Reports</h3>
            </a>
            <a href="#">
                <span><FontAwesomeIcon icon={faGear} /></span>
                <h3>Settings</h3>
            </a>
            <a href="#">
                <span><FontAwesomeIcon icon={faPlus} /></span>
                <h3>New login</h3>
            </a>
            <div className="logout-btn">
                <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
                <h3>Login</h3>
            </div>
        </div>
    )
}

export default Sidebar