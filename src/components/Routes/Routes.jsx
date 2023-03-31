import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import SingleProduct from "../Products/SingleProduct/SingleProduct";

import {ROUTES} from '../../utils/routes'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={''} element={<Home/>}/>
            <Route path={ROUTES.PRODUCTS} element={<SingleProduct/>}/>
        </Routes>
    );
};

export default AppRoutes;