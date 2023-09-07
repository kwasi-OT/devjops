import React from 'react';


function Jobs({job}) {

    return (
        <div>
            <img src={job.logo} alt='logo' style={{backgroundColor: job.logoBackground}}/>
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p><b>{job.position}</b></p>
            <p>{job.company}</p>
            <p>{job.location}</p>
        </div>
    );
}

export default Jobs;
