import logo from './logo.svg';
import './App.css';
import React from "react";
import RedLight from "./components/red__light";
import YellowLight from "./components/yellow__light";
import GreenLight from "./components/green__light";



function App() {


    return (

        <div className="container">

                <RedLight />
                <YellowLight />
                <GreenLight />




            </div>


    );
}

export default App;
