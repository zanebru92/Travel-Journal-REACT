import "./style.css";
import React from "react";
import icon from "../../assets/images/icon.png";

export default function Card(props) {
  return (
    <article className="card">
      <img className="card-img" src={props.item.imageUrl} alt="" />
      <div className="card-content">
        <div className="card-info">
          <img src={icon} height="10px" width="8px" alt="" />
          <p>{props.item.location}</p>{" "}
          <a target="_blank" href={props.item.googleMapsUrl}>
            View on google maps
          </a>
        </div>
        <h1>{props.item.title}</h1>
        <strong>
          {props.item.startDate} - {props.item.endDate}
        </strong>
        <p>{props.item.description}</p>
      </div>
    </article>
  );
}
