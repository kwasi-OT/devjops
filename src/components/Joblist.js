import React from 'react';
import Data from '../data/data.json';
import Jobs from './Jobs';



function Joblist() {

    const jobList = Data.map(job => <Jobs key = {job.id} job = {job} />);
    return (
        <div className='jobs'>
            {jobList}
        </div>
    );
}

export default Joblist;
