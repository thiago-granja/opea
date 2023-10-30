import Home from '../pages/Home';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

export default function MainRoutes(){
    
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}