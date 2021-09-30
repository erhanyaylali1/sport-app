import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getLangauge } from '../features/generalSlice'
import { getDays, getGoal, getUser } from '../features/userSlice'
import { text } from '../language'

const FinalPage = () => {

    const language =  useSelector(getLangauge)
    const user = useSelector(getUser)
    const goal = useSelector(getGoal)
    const days =  useSelector(getDays).map((index) => text["en"].days[index])
    const [isRegisteredSuccessfully, setIsRegisteredSuccessfully] = useState(true);

    useEffect(() => {
        
        const data = {
            name: user.name,
            surname: user.surname,
            email: user.email,
            password: user.password,
            goal: text["en"].goals[goal],
            days
        }

        fetch('http://localhost:3001/users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(() => setIsRegisteredSuccessfully(true))
        .catch(() => setIsRegisteredSuccessfully(false))

    }, [])


    return (
        <div className="card">
            <div className="title">
                <p>
                    {isRegisteredSuccessfully ? text[language].final_title:'Something went wrong!'}
                </p>
            </div>
        </div>
    )
}

export default FinalPage
