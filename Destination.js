import React from "react"

export default function Destination(props) {
    return (
        <div className="place">
            <img className="place--img" src={props.item.imageUrl} />
            <div className="place--info">
                <div className="place--location">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>{props.item.location}</h3>
                    <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
                </div>
                <h2>{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}