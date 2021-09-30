import React from 'react'
import Physical from './pages/Physical'
import Days from './pages/Days'
import Goal from './pages/Goal'
import Info from './pages/Info'
import FinalPage from './pages/FinalPage'
import { useSelector } from 'react-redux';
import { getCurrent } from './features/generalSlice';
import Button from './components/Button'
import LanguageSelector from './components/LanguageSelector'
import Error from './components/Error'

const App = () => {
    
    const current = useSelector(getCurrent);

    const pages =[<Physical />, <Days />, <Goal />, <Info />, <FinalPage />]

    return (
        <div className="app">
            <div className="container">
                <LanguageSelector />
                <div className="screen" style={{ marginBottom: current === 4 ? '0':'5vh' }}>
                    {pages[current]}
                    <Error />
                </div>
                <div className="buttons">
                    <Button type="back" />
                    <Button type="next" />
                    <Button type="reset" />
                </div>
            </div>
        </div>
    );
}

export default App;
