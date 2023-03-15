import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiArrowSmRight } from "react-icons/hi"
import { TbStarFilled } from "react-icons/tb"
import { destinations } from '../../assets/data/destinations'
import "./Destinations.css"

const FilledStar = ({ starNumber }) => {
    let star = [];

    for (let i = 1; i <= starNumber; i++) {
        star.push(i);
    }
    return (
        <span>
            {
                star.map(i => (
                    <span key={i}>
                        <TbStarFilled className='filled-star' />
                    </span>
                ))
            }
        </span>
    )
}
const EmptyStar = ({ starNumber }) => {
    let star = [];

    for (let i = 1; i <= starNumber; i++) {
        star.push(i);
    }

    return (
        <span>
            {
                star.map(i => (
                    <span key={i}>
                        <TbStarFilled className='empty-star' />
                    </span>
                ))
            }
        </span>
    )
}

const Destinations = () => {
    return (
        <div className='destinations-container'>
            <div className="destinations-banner">
                <h1 className="destinations-title">Top Destinations in the World</h1>
                <p className='destinations-description'>Destinations List</p>
            </div>
            <div className='destinations-inner-container'>
                <div className="destinations-left">
                    <div className="destinations-search-results-container">
                        <h2 className="search-result-title">Search Results</h2>
                        <small className="result-found">{destinations.length} Results Found</small>
                        <form action="" target='/'>
                            <div className="input-container">
                                <label htmlFor="trip">Select your trip</label>
                                <select name="trip" id="trip">
                                    <option value="any">Any</option>
                                    <option value="city-travel">City Travel</option>
                                    <option value="cultural-travel">Cultural Travel</option>
                                    <option value="family-travel">Family Travel</option>
                                    <option value="holiday-travel">Holiday Travel</option>
                                    <option value="luxury-travel">Luxury Travel</option>
                                    <option value="city-travel">City Travel</option>
                                    <option value="wild-and-adventure-travel">Wild & Adventure Travel</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label htmlFor="destination">Destiantion</label>
                                <select name="destination" id="destination">
                                    <option value="any">Any</option>
                                    <option value="asia">Asia</option>
                                    <option value="africa">Africa</option>
                                    <option value="america">America</option>
                                    <option value="australia">Australia</option>
                                    <option value="europe">Europe</option>
                                    <option value="russia">Russia</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label htmlFor="duration">Duration</label>
                                <select name="duration" id="duration">
                                    <option value="any">Any</option>
                                    <option value="one-day-travel">1 Day Travel</option>
                                    <option value="two-days-travel">2 Days Travel</option>
                                    <option value="three-days-travel">3 Days Travel</option>
                                    <option value="four-days-travel">4 Days Travel</option>
                                    <option value="five-days-travel">5 Days Travel</option>
                                    <option value="one-week-travel">1 Week Travel</option>
                                </select>
                            </div>
                            <div className="input-container">
                                <label htmlFor="date">Date</label>
                                <input type="date" id="date" name="date" />
                            </div>
                            <div className="input-container">
                                <button type='submit' className='find-now-button'>Find Now</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="destinations-right">
                    <div className="destination-items">
                        {
                            destinations.map(destination => (
                                <div className="destination-item" key={destination.id}>
                                    <img src={destination.image} className="destination-image" />
                                    <div className='destination-star-container'>
                                        {
                                            <div>
                                                <FilledStar starNumber={destination.star} />
                                                <EmptyStar starNumber={5 - destination.star} />
                                            </div>
                                        }
                                    </div>
                                    <p className="destination-item-description">
                                        <b className='destination-name'>{destination.name}</b> is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.
                                    </p>
                                    <NavLink to="/" className="explore-button">Explore <HiArrowSmRight /></NavLink>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinations