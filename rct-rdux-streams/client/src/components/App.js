
import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";



const PageOne=()=>{
    return (
        <div>Page One
            <Link to="/pagetwo">Navigate to page two</Link>
        </div>
    )
};


const PageTwo=()=>{
    return (
            <div>
                Page Two
                <button>Click It</button>
                <Link to="/">Navigate to page one</Link>
            </div>
        );
};



const App =()=>{
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />

            </div>
            </BrowserRouter>
        </div>
    )
};



export default App;