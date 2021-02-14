import React from 'react'
import './MainContent.scss'
import '../slide-show/Slideshow';
import Slideshow from '../slide-show/Slideshow';

const MainContent = () => {
    const images = [
        {
            url: 'https://6.viki.io/image/4db090be7c3b4285ba59cd678100398a.jpeg?s=900x600&e=t'
        }, 
        {
            url: 'https://www.thefamouspeople.com/profiles/images/kim-tae-ri-2.jpg'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxq5ebU3v4oOzEwmM7V15EUArWrW5Cq9MEDw&usqp=CAU'
    }];

    return (
        <div className="main-content">
            <Slideshow images = {images} auto={true} showArrows = {true}/>
            <div className="grid-movie-title">
                <div className="movieType">Now Playing</div>
                <div className="paginate">Paginate</div>
            </div>
            {/* Display grid component */}
        </div>
    )
}

export default MainContent;
