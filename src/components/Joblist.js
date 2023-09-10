import Data from '../data/data.json';
import Details from './Details';
import Jobs from './Jobs';
import React, { Component } from 'react';


class Joblist extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            itemsToShow: 12,
            expanded: false,
            showDetails: false,
            selectedJob: null,
        };
    }

    selectJob = (job) => {
        this.setState({
            showDetails: true,
            selectedJob: job,
        });
    };

    goBack = () => {
        this.setState({
            showDetails: false,
            selectedJob: null,
        });
    };

    loadMore = () => {
        this.setState({
            itemsToShow: this.state.itemsToShow + 5,
            expanded: true
        });
    };
    
    render() {
        if(this.state.showDetails) {
            const details = <Details key={Details.id} job = {this.state.selectedJob}/>
            return (
                <div>
                    {details}
                    <div className='buttonContainer'>
                        <button className='loadMore' onClick = {this.goBack}>Back to Jobs</button>
                    </div>
                </div>
            );
        } else { 
            const jobList = Data.slice(0, this.state.itemsToShow).map(job =>
                <Jobs key = {job.id} job = {job} onClick = {this.selectJob}/>);

            return (
                <div>
                    <div className='jobs'>
                    {jobList}
                    </div>
                    <div className='buttonContainer'>
                    {!this.state.expanded && <button className='loadMore' onClick={this.loadMore}>Load More</button>}
                    </div>
                </div>
            );
        }
        
    }
}        



export default Joblist;
