import React from "react";
import "./style.css";
import Button from "./Button";

const App=()=>{
    return (
        <div>
    <h1 style={{textAlign:"center"}}> Hello World!!</h1>
    <Button title="appstore"></Button>
<Button title="playstore"></Button>
<Button></Button>
    {/* <button className="button">Appstore</button>
    <button className="button">playstore</button> */}
    </div>
    )
};
export default App;
