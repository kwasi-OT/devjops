import React from 'react';
import Details from './Details';


function Jobs({job}) {

    const handleClick = () => {
        <Details/>
    };

    return (
        <div className='jobCard' onClick={handleClick}>
            <img className='logo' src={job.logo} alt='logo' style={{backgroundColor: job.logoBackground}}/>
            <div className='jobsContent'>
                <div className='timePosted'>
                    <p>{job.postedAt}</p>
                    <p>.</p>
                    <p>{job.contract}</p>
                </div>
                <p><span className='position'>{job.position}</span></p>
                <p className='timePosted'>{job.company}</p>
                <p className='location'>{job.location}</p>
            </div>
        </div>
    );
}

export default Jobs;
