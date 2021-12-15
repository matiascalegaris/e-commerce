import React from "react";
import { Route, Routes } from 'react-router-dom';
import Collection from "../collection/collection.component";

const ShopPage = () => {
    return ( 
    <div className='shop-page'> 
    <Routes>
        <Route path=":categoryId" element={<Collection/>} />
    </Routes>
    </div>
)};

export default ShopPage