import React from "react"
import Header from "./Header"
import Destination from "./Destination"
import data from "./data.js"

export default function App() {
    const places = data.map(x => {
        return (
            <Destination 
                key={x.title}
                item={x}
            />
        )
    })
    
    return (
        <div>
            <Header />
            <main>
                {places}
            </main>
        </div>
    )
}