import Body from './components/Body.js'
import Footer from './components/Footer.js'
import React from 'react'
import ReactDOM from 'react-dom/client.js'
import Header from './components/Header.js'
const App = ()=>{
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)