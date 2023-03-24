import React from 'react'
import "./Map.css"

const Map = () => {
    return (
        <div className='map-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d83997.402219281!2d2.3446317!3d48.8597584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20Fransa!5e0!3m2!1str!2str!4v1679671514395!5m2!1str!2str" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Map