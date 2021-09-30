import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLangauge } from '../features/generalSlice';
import { getPhysical, setPhysical } from '../features/userSlice';
import { text } from '../language';

const Physical = () => {

    const physical = useSelector(getPhysical)
    const language = useSelector(getLangauge)
    const dispatch = useDispatch()

    const HandleChange = (value, type) => {
        if(type === "h"){
            dispatch(setPhysical({...physical, height: value }))
        } else {
            dispatch(setPhysical({...physical, weight: value }))
        }
    }

    return (
        <div className="card">
            <div className="title">
                <p>
                    {text[language].physical_title}
                </p>
            </div>
            <div className="inputs">
                <input 
                    placeholder={text[language].height_placeholder}
                    className="input"
                    type="number"
                    value={physical.height}
                    onChange={(e) => HandleChange(e.target.value, "h")}
                    dir={language === "ar" ? 'rtl':'ltl'}
                    lang={language}
                />
                <input 
                    placeholder={text[language].weight_placeholder}
                    className="input"
                    type="number"
                    value={physical.weight}
                    onChange={(e) => HandleChange(e.target.value, "w")}
                    dir={language === "ar" ? 'rtl':'ltl'}
                    lang={language}
                />
            </div>
        </div>
    )
}

export default Physical
