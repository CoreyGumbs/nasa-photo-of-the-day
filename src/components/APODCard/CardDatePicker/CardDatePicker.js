import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import {DatePickerContainer, DatePickerText } from '../StyledComponents/CardStyles';
import 'react-datepicker/dist/react-datepicker.css';


const CardDatePicker = props => {
    const {addNewDate} = props;
    const [startDate, setStartDate] = useState(new Date());

    const dateHandler =  date => {
        addNewDate(date);
        setStartDate(date);
    }
   
    return (
        <DatePickerContainer>

            <DatePickerText>Select A Date: </DatePickerText>
            <DatePicker 
                selected={startDate} 
                maxDate={new Date()} 
                dateFormat="MM/dd/yyyy"
                withPortal 
                onChange={date => dateHandler(date)}
            />
        </DatePickerContainer>
    )
}

export default CardDatePicker;