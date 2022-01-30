import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
        {isLoggedIn && <Navigation />}
        <Route>
            {isLoggedIn ? (
            <>
                <Route exact path="/">
                    <Home userObj={userObj} />
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
            </>
            ) : (
            
                <Route exact path="/">
                <Auth />
                </Route>
            
            )}
        </Route>
        </Router>
    );
};
export default AppRouter;