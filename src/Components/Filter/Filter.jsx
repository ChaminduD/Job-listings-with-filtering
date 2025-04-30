import PropTypes from 'prop-types';
import './Filter.css'

function Filter({ filterTags, remove, clear }) {
    return (
        <>
            <div className="filter-container">
                {/* Render each filter tag */}
                <span className="filters">
                    {filterTags.map((filterTag, index) => (
                        <span className="filter-job" key={index}>
                            {/* Display the filter tag and a remove icon */}
                            {filterTag}
                            <img
                                src="/src/assets/images/icon-remove.svg"
                                alt="remove icon"
                                onClick={() => remove(index)} // Remove the tag when the icon is clicked
                            />
                        </span>
                    ))}
                </span>
                
                {/* Render a button to clear all filter tags */}
                <span className="clear" onClick={clear}>
                    Clear
                </span>
            </div>
        </>
    );
}

Filter.propTypes = {
    filterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    remove: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
}

export default Filter;