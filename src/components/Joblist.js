import Data from '../data/data.json';
import Details from './Details';
import Jobs from './Jobs';
import React, { Component } from 'react';


class Joblist extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            itemsToShow: 12,
            expanded: false
        };
    }

    loadMore = () => {
        this.setState({
            itemsToShow: this.state.itemsToShow + 5,
            expanded: true
        });
    };

    selectJob = (job) => {
        this.setState({
            selectedJob: job
        });
    };
    
    render() {
        const jobList = Data.slice(0, this.state.itemsToShow).map(job =>
            <Jobs key = {job.id} job = {job} onClick = {this.selectJob}/>);
        return (
        <div>
            {this.state.selectedJob ? (<Details job = {this.state.selectedJob}/>) : 
            (<div className='jobs'>
            {jobList}
            </div>)}
            <div className='buttonContainer'>
            {!this.state.expanded && <button className='loadMore' onClick={this.loadMore}>Load More</button>}
            </div>
        </div>
        )
    }
}

export default Joblist;
