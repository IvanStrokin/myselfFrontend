import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import Profile from "./Components/Pages/Profile/Profile";
import Activities from './Components/Pages/Activities/Activities'
import EventsPage from "./Components/Pages/Events/EventsPage";
import { Provider } from "react-redux";
import {store} from "./store/store";
import { LoginPage } from "./Components/Pages/LogIn/LoginPage";


class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                 <BrowserRouter>
                    <div className="App">
                        <Routes>
                            <Route path='/profile' element={[<Header />, <Profile/>]} />
                            <Route path='/activity' element={[<Header />, <Activities />]} />
                            <Route path='/events' element={[<Header />, <EventsPage/>]}/>
                            <Route path='/' element={[<LoginPage/>]}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
               
        )
    }

}

export default App