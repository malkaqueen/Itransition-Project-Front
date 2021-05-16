import React from "react";
import StarRating from "./StarRating";
import CompanyNavBar from "./CompanyNavBar";

//можно импортировать дарк стайлз и лайт стайлз, проверять и применять эффекты с одним и тем же названием

export default function CompanyHeader({ company }) {
    return (<div>
        <CompanyNavBar />
        <div className='row p-5'>
            <div className='row col-lg-4 col-sm-2'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-3'>
                        <h1>{company.name}</h1>
                    </div>
                    <div className='col-lg-6 col-sm-3'>
                        <StarRating rating={company.rating} />
                    </div>
                    <div className='row'>
                        <div className='m-1'>{`By AuthorName AuthorSurname on ${company.creation_date}`}</div>
                        <div className='m-1'>{company.category}</div>
                    </div>
                </div>
            </div>
            <div className='row col-lg-4 col-sm-2'>
                <img src={company.photo_url}
                    alt = ''
                    className="img-fluid"
                    resizeMode={'cover'}
                    style={{ maxWidth: 400 }}
                />
            </div>
        </div>
    </div>)
}