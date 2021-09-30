import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLangauge } from '../features/generalSlice';
import { getDays, setDays } from '../features/userSlice';
import { text } from '../language';

const Days = () => {

    
    const dispatch = useDispatch()
    const selectedDays = useSelector(getDays)
    const language = useSelector(getLangauge)

    const days = text[language].days

    const HandleClick = (isSelected, value) => {
        if(isSelected){
            dispatch(setDays([...selectedDays.filter((index) => index !== value )]))
        } else {
            dispatch(setDays([...selectedDays, value]))
        }
    }
    
    const RenderDays = () => (
        <React.Fragment>
            {days.map((day, index) => {
                const isSelected = selectedDays.includes(index);
                return (
                    <div 
                        className="eachDay" 
                        key={index}
                        onClick={() => HandleClick(isSelected, index)}
                        style={{ flexDirection: language === "ar" ? 'row-reverse':'row'}}
                    > 
                        <div style={{ marginLeft: 10 }}>
                            {day}
                        </div>
                        <div style={{ marginRight: 15, color: isSelected ? 'green':'red' }}>
                            {isSelected ? '✓':''}
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
    )

    return (
        <div className="card">
            <div className="title" style={{ marginBottom: 10 }}>
                <p>
                    {text[language].days_title}
                </p>
            </div>
            <div className="inputs days">
                {RenderDays()}
            </div>
        </div>
    )
}

export default Days