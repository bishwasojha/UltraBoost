import React from "react";
import timelineData from '../Assets/json/Timeline.json';
import TimelineItem from './TimelineItem';
import Timeline_line from '../Assets/Icons/long-string.svg';
import HomeTitle from '../components/HomeTitle';

const Timeline = () => {
   return (
    timelineData.length > 0 && (
        <div className="timeline-container">
            <div className="timeline-heading-wrapper">
            <HomeTitle>TIMELINE</HomeTitle>
            <div className="timeline-second-heading">
                <h2>How It <span>Works</span></h2>
            </div>
            </div>
            
            <div className="timeline-wrapper">
                <div className="timeline-list1">
                {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
                </div>
           
                <div className="long-timeline-line">
                    <img src={Timeline_line} alt="" srcset="" />
                </div>

                <div className="timeline-list2">
                {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
                </div>

            </div>
            <div className="timeline-bg-light">
                    
            </div>
        </div>
      )
  );
};

export default Timeline;
