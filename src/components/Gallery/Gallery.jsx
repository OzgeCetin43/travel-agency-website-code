import React from 'react'
import image1 from "../../assets/images/image-gallery-1.jpg"
import image2 from "../../assets/images/image-gallery-2.jpg"
import image3 from "../../assets/images/image-gallery-3.jpg"
import image4 from "../../assets/images/image-gallery-4.jpg"
import image5 from "../../assets/images/image-gallery-5.jpg"
import image6 from "../../assets/images/image-gallery-6.jpg"
import image7 from "../../assets/images/image-gallery-7.jpg"
import "./Gallery.css"

const Gallery = () => {
    return (
        <div className='gallery-outer-container'>
            <small className='gallery-sub-title'>Photo's from Travelers</small>
            <h1 className='gallery-title'>Our <b>Gallery</b></h1>
            <div className='container'>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src={image1} alt="gallery image" />
                        </div>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src={image2} alt="gallery image" />
                        </div>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src={image3} alt="gallery image" />
                        </div>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src={image4} alt="gallery image" />
                        </div>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src={image5} alt="gallery image" />
                        </div>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src={image6} alt="gallery image" />
                        </div>
                    </div>
                </div>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img src={image7} alt="gallery image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery