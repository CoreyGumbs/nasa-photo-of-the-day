import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CardDatePicker = props => {
    const {addNewDate} = props;
    const [startDate, setStartDate] = useState(new Date());

    const dateHandler =  date => {
        addNewDate(date);
        setStartDate(date);
    }
   
    return (
        <div>
            Select A Date: 
            <DatePicker 
                selected={startDate} 
                maxDate={new Date()} 
                dateFormat="MM/dd/yyyy"
                withPortal 
                onChange={date => dateHandler(date)}
            />
        </div>
    )
}

export default CardDatePicker;