import React from 'react';


function Jobs({job}) {

    return (
        <div>
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p><b>{job.position}</b></p>
            <p>{job.company}</p>
            <p>{job.location}</p>
        </div>
    );
}

export default Jobs;
