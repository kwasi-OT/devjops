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
                <div className='topCompLabel'>
                    <p className='company'>{job.company}</p>
                    <p className='location'>{job.location}</p>
                    <p className='timePosted'>{job.postedAt}</p>
                </div>
                <div className='downCompLabel'>
                    <p>{job.company}</p>
                    <p>{job.location}</p>
                    <p>{job.website}</p>
                    <p>{job.description}</p>
                    <h3>Position Overview:</h3>
                    <p>{job.requirements.content}</p>
                    <h3>Qualifications:</h3>
                    <ul>
                        {job.requirements.items.map(qualification => <li>{qualification}</li>).join('')}
                    </ul>
                    <h3>The Role</h3>
                    <p>{job.role.content}</p>
                    <h4>Key Responsibilities:</h4>
                    <ul>
                        {job.role.items.map(responsibilities => <li>{responsibilities}</li>).join('')}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Details;
