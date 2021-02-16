import React from 'react'
import Rating from '../rating/Rating'
import './Details.scss'
import Overview from './overview/Overview'
import Crew from './crew/Crew'
import Tabs from './tabs/Tabs'
import Media from './media/Media'
import Reviews from './reviews/Reviews'

const Details = () => {
    return (
        <>
            <div className="movie-container">
                <div className="movie-bg" style = {{backgroundImage: `url(https://superstarsbio.com/wp-content/uploads/2020/03/Kim-Tae-ri.jpg)`}}>
                </div>
                <div className="movie-overlay"></div>
                <div className="movie-details">
                    <div className="movie-image">
                        <img src={`https://superstarsbio.com/wp-content/uploads/2020/03/Kim-Tae-ri.jpg`} alt=""/>
                    </div>
                    <div className="movie-body">
                        <div className="movie-overview">
                            <div className="title">
                                Avengers <span>2020-12-03</span>
                            </div>
                            <div className="movie-genres">
                                <ul className="genres">
                                    <li>Action</li>
                                    <li>Comedy</li>
                                    <li>Sci-fi</li>
                                </ul>
                            </div>
                            <div className="rating">
                                <Rating className="rating-stars" rating={5.6} totalStars={10}/>
                                &nbsp;
                                <span>5.6</span> 
                                <p>(200) reviews</p>
                            </div>
                            <Tabs>
                                <div label ="Overview">
                                <Overview/>
                                </div>
                                <div label ="Crew">
                                <Crew/>
                                </div>
                                <div label ="Media">
                                <Media/>
                                </div>
                                <div label ="Reviews">
                                <Reviews/>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details;