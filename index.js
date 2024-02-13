import React from "react";
import ReactDOM from "react-dom/client";

/**
 * --Header
 * - Logo
 * - Navbar
 * 
 * --Body
 * - Searchbar
 * - RestaurantContainer
 *  - Res-card
 *      -Img
 *      -Name of Restaurant , Rating , cuisine , delery tie
 *      
 * 
 * --Footer
 * - Copyright
 * - Links
 * - contact
 */

const Header = () => {
    return (<div className="header">
        <div>
            <img src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png" />
        </div>

        <div className="navItems">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>cart</li>
            </ul>
        </div>
    </div>
    )
}
const ResCard = () => {

    return (
    <div className="res-card">
        <img
        className="res-logo"
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
         alt="res-logo" />
        <h3>Blue Light</h3>
        <h4>kfc Burger India</h4>
        <h4>3.4 stars</h4>
        <h4>38 minuts</h4>
    </div>
    )
}
const Body = () => {
    return (
        <div className="body">

            <div className="search">Search</div>
            <div className="res-container">
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />

               
            </div>
        </div>
    )


}



const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body/>

    </div>


};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);