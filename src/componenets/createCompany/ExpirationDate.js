import React,  {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import DatePicker from 'react-datepicker'
import {setDate} from '../../redux/actions'

export default function ExpirationDate(){
    const dispatch = useDispatch()
    const [selectedDate, setSelectedDate] = useState(null)
    // const date = useSelector(state=> state.createCompany.expiration)

    return(
        <div>
            <DatePicker
            selected={selectedDate}
            onChange={date=>{
                setSelectedDate(date)
                dispatch(setDate(date))
            }}
            dateFormat='yyyy-MM-dd'
            minDate={new Date()}
            isClearable
            showYearDropdown
            scrollableMonthYearDropdown
            />
        </div>
    )

}