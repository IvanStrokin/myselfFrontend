import React from "react";


const name = "Ivan"
const surename = "Strokin"
const description = "Dota player, student, programmer"

class Profile extends React.Component {
    render() {
        return (
        <div className="profileWrapper">

            <div className="profImg">
                <Image />
            </div>

           <div className="name">
                <h3>{this.name}</h3>
                <h3>{this.surename}</h3>
           </div>

           <div className="shortDiscription">
                <h3>{this.description}</h3>
           </div>
        </div>
        )

    }
}

export default Profile