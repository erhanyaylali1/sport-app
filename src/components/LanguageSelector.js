import React from 'react'
import { useDispatch } from 'react-redux'
import { setLangauge } from '../features/generalSlice'

const LanguageSelector = () => {

    const dispatch = useDispatch()
    
    return (
        <select 
            className="languages" 
            onChange={(e) => dispatch(setLangauge(e.target.value))}
            style={{ border: "none", borderRadius: 5, padding: 5 }}    
        >
            <option value="en">English</option>
            <option value="tr">Türkçe</option>
            <option value="ar">Arabic</option>
        </select>
    )
}

export default LanguageSelector
