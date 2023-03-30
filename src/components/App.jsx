import React from 'react';
import AppRoutes from "./Routes/Routes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./SideBar/Sidebar";

const App = () => {
    return (
        <div children="app">
            <Header/>
            <div className="container">
                <Sidebar/>
                <AppRoutes/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;