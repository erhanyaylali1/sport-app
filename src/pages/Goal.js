import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLangauge } from '../features/generalSlice'
import { getGoal, setGoal } from '../features/userSlice'
import { text } from '../language'

const Goal = () => {

    const dispatch = useDispatch()
    const language = useSelector(getLangauge)
    const selectedGoal = useSelector(getGoal)
    const goals = text[language].goals

    const HandleClick = (index) => {
        dispatch(setGoal(index));
    }

    const RenderGoals = () => {

        return (
            <React.Fragment>
                {goals.map((goal, index) => {
                    const isSelected = selectedGoal === index;
                    return (
                        <div 
                            className="eachDay" 
                            key={index}
                            onClick={() => HandleClick(index)}
                            style={{ flexDirection: language === "ar" ? 'row-reverse':'row'}}
                        > 
                            <div  style={{ marginLeft: 10 }}>
                                {goal}
                            </div>
                            <div style={{ marginRight: 15, color: isSelected ? 'green':'red' }}>  
                                <input type="radio" checked={isSelected} onChange={() => null }/>
                            </div>
                        </div>
                    )
                })}
            </React.Fragment>
        )

    }

    return (
        <div className="card">
            <div className="title" style={{ marginBottom: 10 }}>
                <p>
                    {text[language].goal_title}
                </p>
            </div>
            <div className="inputs days">
                {RenderGoals()}
            </div>
        </div>
    )
}

export default Goal
