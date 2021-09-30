import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCurrent, getLangauge, nextPage, prevPage, setError, reset } from '../features/generalSlice';
import { getDays, getPhysical, getUser, clear } from '../features/userSlice';
import { text } from '../language';

const Button = (props) => {
    
    const dispatch = useDispatch()
    const current = useSelector(getCurrent)
    const user = useSelector(getUser)
    const days = useSelector(getDays)

    const { weight, height } = useSelector(getPhysical)
    const language = useSelector(getLangauge)

    const isNext = props.type === "next"
    let isDisabled = current === 0 ? (isNext ? false:true):false

    const validateEmail = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    switch(current){

        case 0:
            if(weight < 0 || height < 0){
                isDisabled = true
                dispatch(setError(text[language].pyhsicalNotNegative))
            } else if (weight === "" || height === ""){
                isDisabled = true
                dispatch(setError(text[language].physicalNotEmpty))
            } else {
                dispatch(setError(""))
            }
            break

        case 1:
            if(days.length === 0){
                isDisabled = true
                dispatch(setError(text[language].daysNotEmpty))
            } else {
                dispatch(setError(""))
            }
            break

        case 3:
            if(user.name === "" || user.surname === "" || user.email === "" || user.password === ""){
                isDisabled = true
                dispatch(setError(text[language].userNotEmpty))
            } else if (user.password.length < 8){
                isDisabled = true
                dispatch(setError(text[language].userPassword))
            } else if (!validateEmail(user.email)){
                isDisabled = true
                dispatch(setError(text[language].userMail))
            } else {
                dispatch(setError(""))
            }
            break

        default:
            break
    }

    const HandleClick = () => {
        if(isNext){
            dispatch(nextPage())
        } else {
            dispatch(prevPage())
        }
    }

    const HandleReset = () => {
        dispatch(clear())
        dispatch(reset())
    }

    const style = {
        backgroundColor: isNext ? (isDisabled ? '#41416f    ':'#4140E5'):(current === 0 ? '#CFCFFF':'#5453E3'), 
        borderRadius: 5, 
        color: 'white',
        boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        border: 0,
        padding: "8px 25px",
        cursor: isNext ? (isDisabled ? "not-allowed":"pointer"):(current === 0 ? 'not-allowed':'pointer'),
    }

    
    if(props.type === "reset"){
        if(current === 4) {
            return(
                <button
                style={style}
                onClick={HandleReset}
                >
                    {text[language].reset}
                </button>
            )
        } else {
            return null
        }
    }
    
    if((current === 0 && !isNext) || current === 4) return null
    
    return (
        <button
            style={style}
            disabled={isNext ? isDisabled:false}
            onClick={HandleClick}
        >
            {isNext ? text[language].next:text[language].back}
        </button>
    )
}

export default Button
