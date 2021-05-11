import React from "react";
import StarRatingComponent from 'react-star-rating-component';


//по дефолту стоит текущее значение и рядом цифра, есть возможность навести мышку и поставить свою отметку
//если зарегистрирован
//сначала поставлю no-editable, потом то, что можно изменять

export default ({rating})=>{
    return <div className='p-3'>
        <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <span></span>}
            starCount={5}
            value={rating}
        />
    </div>
}