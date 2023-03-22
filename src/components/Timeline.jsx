import React from "react";
import timelineData from '../Assets/json/Timeline.json';
import TimelineItem from './TimelineItem';

const Timeline = () => {
   return (
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
      )
  );
};

export default Timeline;
