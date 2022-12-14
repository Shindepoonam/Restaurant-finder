import React from "react";
import { BrowserRouter as Router,Switch ,Route }from "react-router-dom";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantdetailPage";
const App = () => {
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/restaurants/:id/update" component={UpdatePage} />
                    <Route
                    exact
                    path="/restaurants/:id"
                    component={RestaurantDetailPage}
                    />
                </Switch>
            </Router>
        </div>
    );
};
