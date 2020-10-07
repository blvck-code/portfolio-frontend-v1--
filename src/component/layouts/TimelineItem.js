import React from 'react'
import Moment from 'react-moment';

function TimelineItem({data}) {
    const setBackground = (category) => {
        if(category === 'Backend'){
            return "#e67e22"
        } else if(category === 'Frontend') {
            return '#3498db'
        } else if(category === 'UX/UI Design') {
            return '#30ff00'
        } else {
            return '#e74c3c'
        }
    }


    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <div className="timeline-item-header">
                    <div className="tag" style={{background:setBackground(data.category)}}>
                        {data.category}
                    </div>
                    <time style={{fontFamily:"monospace", fontSize:"1rem"}}><Moment format="MMM Do, YYYY">{data.date}</Moment></time>
                </div>
                <div className="timeline-item-body">
                    <div className="item-title">
                        <h3>{data.title}</h3>
                    </div>
                    <p className="item-decs">
                        {data.desc}
                    </p>
                </div>
                <div className="timeline-item-footer">
                    <div className="item-tools">
                        {data.tools.length > 0 &&
                            data.tools.split(",").map((item, i) => (
                            <span key={i}>
                                {" "}
                                {item}
                                {" "}
                            </span>
                        ))}
                    </div>

                    <div className="item-links">
                        {data.github ? (
                            <a href={data.github} target="_blank" rel="noopener noreferrer" >
                                <i className="fa fa-github" />
                            </a>
                        ) : (
                            <span>—</span>
                        )}
                        {data.link ? (
                        <a href={data.link} target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-external-link"></i>
                        </a>
                        ) : (
                        <span>—</span>
                        )}
                    </div>

                </div>
                <span className="circle" />
            </div>
        </div>
    )
}

export default TimelineItem
