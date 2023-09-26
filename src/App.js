import Body from './components/Body.js'
import Footer from './components/Footer.js'
import React from 'react'
import ReactDOM from 'react-dom/client.js'
import Header from './components/Header.js'
import Prac from './components/Prac.js'
const App = ()=>{
    return(
        <>
        {/* <Prac /> */}
        <Header />
        <Body />
        {/* <Footer /> */}
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)