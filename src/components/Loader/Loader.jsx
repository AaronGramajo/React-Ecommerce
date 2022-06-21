import React from 'react'
import DogeLoader from '../../assets/DogeCoin.png'
import './Loader.css'

export const Loader = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
                <img className='dogeLoader' src={DogeLoader} alt="" size={150} />
            </div>
        </div>
    )
}
