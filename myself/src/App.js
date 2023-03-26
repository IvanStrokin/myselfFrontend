import React from "react"
import Header from './components/header/header'
import Profile from "./components/profile/profile"

class App extends React.Component {
    render() {
        return(
            <div className="mainWrapper"> 
                <Header />
                <Profile />
            </div>
        )
    }
     
}

export default App