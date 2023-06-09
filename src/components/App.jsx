import React, {useEffect} from 'react';
import AppRoutes from "./Routes/Routes";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Sidebar from "./SideBar/Sidebar";
import {useDispatch} from "react-redux";
import {getCategories} from "../features/categories/categoriesSlice";
import {getProducts} from "../features/products/productsSlice";

const App = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts())
    },[dispatch])
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