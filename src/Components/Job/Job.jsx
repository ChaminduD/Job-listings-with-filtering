import PropTypes from 'prop-types';
import './Job.css'

function Job({
    company,
    logo,
    newJob,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
    onClick
}) {

    return (
        <>  
            <div className='job-container'>
                <div className={`job ${featured ? "featured-job" : ""}`}> {/* Apply 'featured-job' class if the job is featured */}
                    {/* Display company logo */}
                    <img src={logo} alt="logo" />
                    {/* Container for job details */}
                    <div className='full-job-details'>
                        <div className='company-details'>
                            <span className='company'>{company}</span>
                            {newJob ? <span className='new'>New!</span> : ""} {/* Show 'New!' tag if applicable */}
                            {featured ? <span className='featured'>Featured</span> : ""} {/* Show 'Featured' tag if applicable */}
                        </div>
                        
                        <div className='job-details-container'>
                            <h1>{position}</h1>
                            <div className='job-details'>
                                <span>{postedAt}</span>
                                    <span className='dot'>.</span>
                                <span>{contract}</span>
                                    <span className='dot'>.</span>
                                <span>{location}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="job-tags">
                        <span className='role filter-tablets' onClick={onClick}>{role}</span>
                        <span className='level filter-tablets' onClick={onClick}>{level}</span>
                        {/* Dynamically render required languages */}
                        {languages.map((language, index) => (
                            <span key={index} className='languages filter-tablets' onClick={onClick}>{language}</span>
                        ))}
                        {/* Dynamically render required tools */}
                        {tools.map((tool, index) => (
                            <span key={index} className='tools filter-tablets' onClick={onClick}>{tool}</span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

Job.propTypes = {
    company: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    newJob: PropTypes.bool.isRequired,
    featured: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    postedAt: PropTypes.string.isRequired,
    contract: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Job;