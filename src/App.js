import React, { Component } from 'react'
import Table from "./Table";

class App extends Component {
    render() {

        const characters = [
            {
                name: 'Charlie',
                job: 'Rat Killer',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspiring Actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
            {
                name: 'Frank Reynolds',
                job: 'Businessman',
            },
        ]

        return (
            <div className="container">
                <Table characterData = {characters} />
            </div>
        )
    }
}

export default App
