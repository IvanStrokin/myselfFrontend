import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import  Profile  from "./Components/Pages/Profile/profile";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div className="App">
                    <Header  />
                    <Routes>
                    <Route path='/' element={<Profile/>} />
                    <Route path='/activity' />
                    <Route path='/events'   />
                    </Routes> 
                </div>
            </BrowserRouter>
        )
    }
     
}

export default App