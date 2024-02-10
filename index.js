import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return <h2 className="title">this is title</h2>
 }


const HeadingComponent = () => (

    <>
    
    <Title/>
     <h1 className="heading">this is my functional component</h1>
    </>    

   

)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);