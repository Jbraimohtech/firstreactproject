import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ListAltIcon from '@mui/icons-material/ListAlt';



function Card(props){
    return (
        <div>
                <div className="profile-container">
                    <div className="profile">
                        <img src="https://via.placeholder.com/150" alt="Profile 1" />
                    </div>
                    <div className="profile">
                        <img src="https://via.placeholder.com/150" alt="Profile 2" />
                    </div>
                    <div className="profile">
                        <img src="https://via.placeholder.com/150" alt="Profile 2" />
                    </div>
                    <div className="profile">
                        <img src="https://via.placeholder.com/150" alt="Profile 2" />
                    </div>
                    <div className="profile">
                        <img src="https://via.placeholder.com/150" alt="Profile 2" />
                    </div>
                </div>


            <div className="content-todo-image"> 
                <div className="todo-group">
                <div>  
                    <div>
                        <p className="todo-heading">Johnson's Plans</p>
                    </div>
                    <div className="calender-icon-con">
                    <CalendarMonthIcon />
                    <div>
                        <ListAltIcon />
                    </div>
                    </div>
                    <AddCircleIcon />
                </div>
                <div className="box">
                    <div className="the-one-line"></div>
                    <div className="item-description">
                        <p className="descript-topic"><span>Coffea with Techno Team☕</span><MoreVertIcon style={{ marginLeft: '100px', verticalAlign: "-30%"}}/></p>
                        <div className="time-class">
                            <p>
                                <AlarmIcon style={{ fontSize: '12px', verticalAlign: "-10%"}}/>
                                <span className="time-after-alarm">10:00am - 11:00am</span>
                            </p>                                   
                        </div>
                    </div>    
                    <div></div>
                </div>
                <div className="box">
                    <div className="the-one-line"></div>
                        <p>Gym with mike</p>
                        <p>10:00am - 11:00am</p>
                    </div>
                    <div className="box">
                    <div className="the-one-line"></div>
                        <p>Work mode</p>
                        <p>10:00am - 11:00am</p>
                    </div>
                    <div className="box"> 
                    <div className="the-one-line"></div>
                        <p>Free Time</p>
                        <p>10:00am - 11:00am</p>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Card;