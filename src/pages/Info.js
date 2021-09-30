import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLangauge } from '../features/generalSlice'
import { getUser, setUser } from '../features/userSlice'
import { text } from '../language'

const Info = () => {

    const dispatch = useDispatch()
    const language = useSelector(getLangauge)
    const user = useSelector(getUser)

    const OnInputChange = (value, entry) => {
        dispatch(setUser({ ...user, [entry]: value }))
    }

    const RenderInputs = () => {
        return Object.entries(user).map((entry, index) => {
            return (
                <input 
                    className="input infoInput"
                    key={index}
                    type={index === 3 ? 'password':''}
                    placeholder={text[language][entry[0]]}
                    value={entry[1]}
                    onChange={(e) => OnInputChange(e.target.value, entry[0])}
                    dir={language === "ar" ? 'rtl':'ltl'}
                    lang={language}
                />
            )
        })
    }

    return (
        <div className="card">
            <div className="title" style={{ marginBottom: 10 }}>
                <p>
                    {text[language].info_title}
                </p>
            </div>
            <div className="inputs">
                {RenderInputs()}
            </div>
        </div>
    )
}

export default Info
