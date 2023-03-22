import React , { useState } from "react";

const TimelineItem = ({ data }) =>  {

    return (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <h4 className="title" >
                {data.cardtitle}
            </h4>
            <p className="description">
                {data.description}
            </p>
        </div>
    </div>
)};

export default TimelineItem;