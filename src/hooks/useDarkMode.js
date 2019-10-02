import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'

function useDarkMode(value){
    // this hook returns an array with a value and setter
    const [darkMode, setDarkMode] = useLocalStorage('darkmode',value) 
    useEffect(()=>{
        if(darkMode){
            const body = document.getElementsByTagName('body')[0]
            body.classList.add('dark-mode')
        }else if (!darkMode){
            const body = document.getElementsByTagName('body')[0]
            body.classList.remove('dark-mode')
        }
    },[darkMode])

    return [darkMode, setDarkMode]
}

export default useDarkMode