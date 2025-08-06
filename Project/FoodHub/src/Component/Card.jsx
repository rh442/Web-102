import React from "react";
import './Card.css'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);
const Card = (props) =>{
    console.log("created_at:", props.created_at);
    return(
        <>
            <div className="Card">
                {/* <img src={props.Url} alt="Picture of Food"/> */}
                <div className="content">
                    <u><h2>{props.Topic}</h2></u>
                    {/* <h3>{props.Blurb}</h3> */}
                
                </div>
                <div className="details">
                        <p>Upvotes: {props.Likes}</p>
                        <p>{dayjs.utc(props.created_at).local().fromNow()}</p>
                        
                </div>
            </div>
        
        
        </>

    )
}
export default Card