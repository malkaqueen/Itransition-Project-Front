import React from 'react'
import Bonuses from './Bonuses'

export default ({components}) =>
{
    return(
        <div id="carouselExampleIndicators" className="carousel slide row" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Bonuses/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="food.png" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://kpopchart.net/wp-content/uploads/2021/03/Chanyeol-The-Box-e1616555084675.jpg" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}