import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import {DatePickerContainer, DatePickerText, DatePickerInputContainer } from '../StyledComponents/CardStyles';


const CardDatePicker = props => {
    const {addNewDate} = props;
    const [startDate, setStartDate] = useState(new Date());

    const dateHandler =  date => {
        addNewDate(date);
        setStartDate(date);
    }
   
    return (
        <DatePickerContainer>

            <DatePickerText>For More Pictures, Select A Date: </DatePickerText>
            <DatePickerInputContainer>
                <DatePicker 
                    selected={startDate} 
                    maxDate={new Date()} 
                    dateFormat="MM/dd/yyyy"
                    withPortal 
                    onChange={date => dateHandler(date)}
                />
            </DatePickerInputContainer>
        </DatePickerContainer>
    )
}

export default CardDatePicker;