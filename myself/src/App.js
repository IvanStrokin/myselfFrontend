import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from "./Components/Header/Header";
import Profile from "./Components/Pages/Profile/Profile";
import Activities from './Components/Pages/Activities/Activities'
import { Provider } from "react-redux";
import {store} from "./store/store";



class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                 <BrowserRouter></BrowserRouter>
                    <div className="App">
                        <Header />
                        <Routes>
                            <Route path='/' element={<Profile/>} />
                            <Route path='/activity' element={<Activities />} />
                            <Route path='/events' />
                        </Routes>
                    </div>
                </BrowserRouter>
            </Provider>
               
        )
    }

}

export default App