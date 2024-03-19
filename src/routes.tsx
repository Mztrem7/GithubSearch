import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Menu from './Menu'


export function RouteApp(){
    return(
        <BrowserRouter>
        
            <Routes>
                <Route path='/' element={<Menu/>}/>
            </Routes>
        
        </BrowserRouter>
    )
}