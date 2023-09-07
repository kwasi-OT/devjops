import React from 'react';


function Jobs({job}) {

    return (
        <div className='jobcard'>
            <img src={job.logo} alt='logo' style={{backgroundColor: job.logoBackground}}/>
            <div className='timePosted'>
                <p>{job.postedAt}</p>
                <p>{job.contract}</p>
            </div>
            <p><span className='position'>{job.position}</span></p>
            <p>{job.company}</p>
            <p>{job.location}</p>
        </div>
    );
}

export default Jobs;
