import React from 'react';


function Details({job}) {

    return (
        <div className='jobDetails'>
            <img className='logo' src={job.logo} alt='logo' style={{backgroundColor: job.logoBackground}}/>
            <div className='jobsContentD'>
                <div className='title'>
                    <p className='position'>{job.position}</p>
                    <p className='contract'>{job.contract}</p>
                </div>
                <div className='topDesc'>
                    <p className='company'>{job.company}</p>
                    <p className='location'>{job.location}</p>
                    <p className='timePosted'>{job.postedAt}</p>
                </div>
            </div>
        </div>
    );
}

export default Details;
