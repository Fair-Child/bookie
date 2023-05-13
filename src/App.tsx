import React from 'react';
import './App.css';
import { Carousel } from './layouts/HomePage/Carousel';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Heroes } from './layouts/HomePage/Heroes';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';

function App() {
    return (
        <div>
            <Navbar/>
            <ExploreTopBooks/>
            <Carousel/>
            <Heroes/>
        </div>
    );
}

export default App;
