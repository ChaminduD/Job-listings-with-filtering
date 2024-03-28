import './Job.css'

function Job() {

    return (
        <>  
            <div className='job-container'>
                <div className="job">
                    <img src="/src/assets/images/photosnap.svg" alt="logo" />
                    <div className='company-details'>
                        <span className='company'>Photosnap</span>
                        <span className='new'>New!</span>
                        <span className='featured'>Featured</span>
                    </div>
                    <h1>Senior Frontend Developer</h1>
                    <div className='job-details'>
                        <span>1d ago</span>
                            <span className='dot'>.</span>
                        <span>Full Time</span>
                            <span className='dot'>.</span>
                        <span>USA only</span>
                    </div>
                    <hr />
                    <div className="job-tags">
                        <span className='role filter-tablets'>Frontend</span>
                        <span className='level filter-tablets'>Senior</span>
                        <span className='languages filter-tablets'>HTML</span>
                        <span className='languages filter-tablets'>CSS</span>
                        <span className='languages filter-tablets'>JavaScript</span>
                        <span className='tools filter-tablets'></span>
                    </div>
                </div>
                <div className="job">
                    <img src="/src/assets/images/manage.svg" alt="logo" />
                    <div className='company-details'>
                        <span className='company'>Manage</span>
                        <span className='new'>New!</span>
                        <span className='featured'>Featured</span>
                    </div>
                    <h1>Fullstack Developer</h1>
                    <div className='job-details'>
                        <span>1d ago</span>
                            <span className='dot'>.</span>
                        <span>Part Time</span>
                            <span className='dot'>.</span>
                        <span>Remote</span>
                    </div>
                    <hr />
                    <div className="job-tags">
                        <span className='role filter-tablets'>Fullstack</span>
                        <span className='level filter-tablets'>Midweight</span>
                        <span className='languages filter-tablets'>Python</span>
                        <span className='tools filter-tablets'>React</span>
                    </div>
                </div>
            </div>
            {/* Item Start */}
            Photosnap
            New!
            Featured
            Senior Frontend Developer
            1d ago
            Full Time
            USA only
            {/* Role */}
            Frontend
            {/* Level */}
            Senior
            {/* Languages */}
            HTML
            CSS
            JavaScript
            {/* Item End */}

            {/* Item Start */}
            Manage
            New!
            Featured
            Fullstack Developer
            1d ago
            Part Time
            Remote
            {/* Role */}
            Fullstack
            {/* Level */}
            Midweight
            {/* Languages */}
            Python
            {/* Tools  */}
            React
            {/* Item End */}

            {/* Item Start */}
            Account
            New!
            Junior Frontend Developer
            2d ago
            Part Time
            USA only
            {/* Role */}
            Frontend
            {/* Level */}
            Junior
            {/* Languages */}
            JavaScript
            {/* Tools  */}
            React
            Sass
            {/* Item End */}

            {/* Item Start */}
            MyHome
            Junior Frontend Developer
            5d ago
            Contract
            USA only
            {/* Role */}
            Frontend
            {/* Level */}
            Junior
            {/* Languages */}
            CSS
            JavaScript
            {/* Item End */}

            {/* Item Start */}
            Loop Studios
            Software Engineer
            1w ago
            Full Time
            Worldwide
            {/* Role */}
            Fullstack
            {/* Level */}
            Midweight
            {/* Languages */}
            JavaScript
            Ruby
            {/* Tools  */}
            Sass
            {/* Item End */}

            {/* Item Start */}
            FaceIt
            Junior Backend Developer
            2w ago
            Full Time
            UK only
            {/* Role */}
            Backend
            {/* Level */}
            Junior
            {/* Languages */}
            Ruby
            {/* Tools  */}
            RoR
            {/* Item End */}

            {/* Item Start */}
            Shortly
            Junior Developer
            2w ago
            Full Time
            Worldwide
            {/* Role */}
            Frontend
            {/* Level */}
            Junior
            {/* Languages */}
            HTML
            JavaScript
            {/* Tools  */}
            Sass
            {/* Item End */}

            {/* Item Start */}
            Insure
            Junior Frontend Developer
            2w ago
            Full Time
            USA only
            {/* Role */}
            Frontend
            {/* Level */}
            Junior
            {/* Languages */}
            JavaScript
            {/* Tools  */}
            Vue
            Sass
            {/* Item End */}

            {/* Item Start */}
            Eyecam Co.
            Full Stack Engineer
            3w ago
            Full Time
            Worldwide
            {/* Role */}
            Fullstack
            {/* Level */}
            Midweight
            {/* Languages */}
            JavaScript
            Python
            {/* Tools  */}
            Django
            {/* Item End */}

            {/* Item Start */}
            The Air Filter Company
            Front-end Dev
            1mo ago
            Part Time
            Worldwide
            {/* Role */}
            Frontend
            {/* Level */}
            Junior
            {/* Languages */}
            JavaScript
            {/* Tools  */}
            React
            Sass
            {/* Item End */}
        </>
    );
}

export default Job;