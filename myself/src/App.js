import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Header} from "./components/header/header";
import Profile from "./components/Pages/Profile/profile";
import Activities from "./components/Pages/Activities/Activities";
import {LoginPage} from "./components/Pages/LogIn/LoginPage";
import EventsPage from "./components/Pages/Events/EventsPage";
import {EditUser} from "./components/Pages/RegisterPage/registre";
import {UserLoginPage} from "./components/Pages/UserLoginPage/UserLoginPage";
import {TestingPage} from "./components/Pages/TestingPage/TestingPage";


class App extends React.Component {
    render() {
        return (
                 <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path='/profile' element={[<Header />, <Profile/>]} />
                            <Route path='/activity' element={[<Header />, <Activities />]} />
                            <Route path='/events' element={[<Header />, <EventsPage/>]}/>
                            <Route path='/' element={[<LoginPage/>]}/>
                            <Route path='/registration' element={[<EditUser/>]}/>
                            <Route path='/testing' element={[<Header />, <TestingPage/>]}/>
                            <Route path='/userLogin' element={[ <UserLoginPage/>,]}/>
                        </Routes>
                    </div>
                </BrowserRouter>
        )
    }

}

export default App