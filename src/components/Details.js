import React from 'react';


function Details({job}) {

    return (
        <div className='jobDetails'>
            <img className='logo' src={job.logo} alt='logo' style={{backgroundColor: job.logoBackground}}/>
            <div className='jobsContentD'>
                <div className='titleContainer'>
                    <div className='title'>
                        <p className='positionD'>{job.position}</p>
                        <p className='contractD'>{job.contract}</p>
                    </div>
                    <div>
                        <button className='apply' onClick = {() => (job.apply)}>Apply</button>
                    </div>
                </div>
                <div className='topCompLabel'>
                    <p className='companyD'><i class="fa-regular fa-building"></i> {job.company}</p>
                    <p className='locationD'><i class="fa-solid fa-map-location-dot"></i> {job.location}</p>
                    <p className='timePostedD'><i class="fa-solid fa-hourglass-half"></i> {job.postedAt}</p>
                </div>
                <div className='downCompLabel'>
                    <div>
                        <p><b>Company:</b> {job.company}</p>
                        <p><b>Location:</b> {job.location}</p>
                        <p><b>Website:</b> {job.website}</p>
                    </div>
                    <p>{job.description}</p>
                    <div>
                        <h3>Position Overview:</h3>
                        <p>{job.requirements.content}</p>
                    </div>
                    <div>
                        <h3>Qualifications:</h3>
                        <ul>
                            {job.requirements.items.map(qualification => <li>{qualification}</li>)}
                        </ul>
                    </div>
                    <h3>The Role</h3>
                    <p>{job.role.content}</p>
                    <div>
                        <h4>Key Responsibilities:</h4>
                        <ul>
                            {job.role.items.map(responsibilities => <li>{responsibilities}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
