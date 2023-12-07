import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie,faChartGantt,faMagnifyingGlassChart,faUser} from '@fortawesome/free-solid-svg-icons'
function Main(){
    return(
        <div className="main">
            <div className="analytics-score">
                <div className="sales">
                    <span>
                        <h4>Total slaes</h4>
                        <h3>$65,024</h3>
                    </span>
                    <div>
                        <FontAwesomeIcon icon={faChartPie} size="2xl"/>
                    </div>
                </div>
                <div className="sales">
                    <span>
                        <h4>Site visite</h4>
                        <h3>65,024</h3>
                    </span>
                    <div>
                    <FontAwesomeIcon icon={faChartGantt} size="2xl" />
                    </div>
                </div>
                <div className="sales">
                    <span>
                        <h4>Searches</h4>
                        <h3>14,024</h3>
                    </span>
                    <div>
                    <FontAwesomeIcon icon={faMagnifyingGlassChart} size="2xl" />
                    </div>
                </div>
                
               
            </div>
            <div className="new-users">
                  <h4>New Users</h4>
                  <div className="users-logo">
                        <div className="users-info">
                            <span><div className="face-img1"></div></span>
                            <h4>Jack</h4>
                            <h5>jack lorem</h5>
                        </div>
                        <div  className="users-info"> 
                            <span><div className="face-img2"></div></span>
                            <h4>Jack</h4>
                            <h5>jack lorem</h5>
                        </div>
                        <div  className="users-info"> 
                            <span><div className="face-img3"></div></span>
                            <h4>Jack</h4>
                            <h5>jack lorem</h5>
                        </div>
                        <div  className="users-info"> 
                            <span><div className="face-img4"></div></span>
                            <h4>Jack</h4>
                            <h5>jack lorem</h5>
                        </div>
                  </div>  
            </div>
            <div className="recent-orders">
                <h4>Recent Orders</h4>
                <div className="order-list">
                    <table>
                        <tr>
                            <th>Course Name</th>
                            <th>Course Name</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Alfreds Futterkiste</td>
                            <td>Done</td>
                            <td className="credited">credited</td>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Alfreds Futterkiste</td>
                            <td>Done</td>
                            <td className="credited">credited</td>
                        </tr><tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Alfreds Futterkiste</td>
                            <td>Done</td>
                            <td className="pennding">pennding</td>
                        </tr><tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Alfreds Futterkiste</td>
                            <td>Done</td>
                            <td className="credited">credited</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Main