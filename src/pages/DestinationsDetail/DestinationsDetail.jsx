import React from 'react'
import Slider from '../../components/Slider/Slider'
import { destinationsDetail } from "../../assets/data/destinationsDetail"
import Map from '../../components/Map/Map'
import "./DestinationsDetail.css"

const DestinationsDetail = () => {
    return (
        <div className='destinations-detail-container'>
            <Slider />
            <div className='africa-content'>
                <h1 className="africa-title">Africa</h1>
                <p className="africa-description">Africa is the world's second largest and second most-populous continent. At about 30.3 million km² including djacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.2 billion people as of 2016, it accounts for about 16% of the world's human population.</p>
            </div>
            <div className='destination-details-inner-container'>
                <h1>Based on traveller Visit and Local Insights</h1>
                <div className='destinations-detail-items'>
                    {
                        destinationsDetail.map(item => (
                            <div className="destination-detail-item" key={item.id}>
                                <img src={item.image} alt="destination" />
                                <h1>{item.name}</h1>
                                <p><b>{item.name}</b> is the world's second largest and second most- populous continent, being behind Asia in both. At about 30.3 million km² including adjacent islands, it 6% Earth's total surface area and 20% land area.</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <h1 className='good-to-know-title'>Good to Know</h1>
            <div className='good-to-know-container'>
                <div className="good-to-now-left-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>Country</td>
                                <td>Africa</td>
                            </tr>
                            <tr>
                                <td>Visa Requirements</td>
                                <td>Visa Requirements</td>
                            </tr>
                            <tr>
                                <td>Languages Spoken</td>
                                <td>Afroasiatic languages</td>
                            </tr>
                            <tr>
                                <td>Currency Used</td>
                                <td>Rant</td>
                            </tr>
                            <tr>
                                <td>Areas (km2)</td>
                                <td>30.37 million km²</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="good-to-know-right-container">
                    <Map />
                </div>
            </div>
        </div >
    )
}

export default DestinationsDetail