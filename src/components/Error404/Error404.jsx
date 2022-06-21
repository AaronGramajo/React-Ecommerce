import React from 'react'
import { Link } from 'react-router-dom'

import DogeStonks from '../../assets/dogecoin-doge.gif'

import './Error404.css'

export const Error404 = () => {
    return (
        <div className='error404container'>
            <div className='imageContainer'>
                <img className='dogeStonksGif' src={DogeStonks} alt="" />
            </div>
            <div className='sideContainer'>
                <div>
                    <h1 className='oopsText'>Oops.</h1>
                </div>
                <div>
                    <h2 className='cantFindText'>no podemos encontrar la pagina que estas buscando...</h2>
                </div>
                <div>
                    <span className='findUsHereText'>podria estar en mantenimiento o sera que este mal escrito. Capaz podrias encontrar lo que buscas en nuestro inicio.</span>
                </div>
                <div>
                    <Link to='/'>
                        <button className='btn goBackButton'>
                            <span className='btn-text'>Volver a DogeTech</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
