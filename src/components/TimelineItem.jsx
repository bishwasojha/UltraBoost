import React from "react";

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="title" >
                {data.title}
            </span>
            <div className="description">
                {data.description}
            </div>
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem;