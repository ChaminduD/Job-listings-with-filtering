import { useState } from "react";
import Job from "../Job/Job.jsx";
import jobs from '../../../data.json';
import Filter from '../Filter/Filter.jsx';
import './JobList.css';

function JobList(){
    const [filterTags, setFilterTags] = useState([]); // State to hold filter tags selected by the user
    const [showFilter, setShowFilter] = useState(false); // State to toggle the visibility of the filter component

    // Function to handle clicks on filter tags
    function handleClick(event){
        const filteredTag = event.target.textContent; // Get the clicked tag's text
        if(!filterTags.includes(filteredTag)){ // If tag is not already in the filter list
            setFilterTags(f => [...f, filteredTag]); // Add tag to the filterTags array
            setShowFilter(true); // Show the filter component
        }
    }

    // Function to remove a specific filter tag by its index
    function removeFilterTag(index){
        setFilterTags(filterTags.filter((_, i) => i !== index)); // Remove the tag at the given index
        if(filterTags.length === 1){ // If only one tag remains, hide the filter component
            setShowFilter(false);
        }
    }

    // Function to clear all filter tags
    function clearFilter(){
        setFilterTags([]); // Reset filterTags to an empty array
        setShowFilter(false); // Hide the filter component
    }

    return(
        <div className="job-list-container">
            {/* Render the Filter component if there are active filter tags */}
            {showFilter && <Filter filterTags={filterTags} remove={removeFilterTag} clear={clearFilter}/>}
            
            {/* Render all job listings if no filter is applied */}
            {!showFilter && jobs.map((job, index) => (
                <Job key={index} {...job} newJob={job.new} onClick={handleClick}/>
            ))}

            {/* Render filtered job listings if a filter is applied */}
            {showFilter && jobs.filter(value =>
                filterTags.every(tag =>
                    value.role.includes(tag) ||
                    value.level.includes(tag) ||
                    value.languages.includes(tag) ||
                    value.tools.includes(tag)
                )
            ).map((job, index) => (
                <Job key={index} {...job} newJob={job.new} onClick={handleClick}/>
            ))}
        </div>
    );
}

export default JobList;