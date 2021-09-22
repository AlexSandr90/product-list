import React from 'react';
import './app.scss';
import Header from "../header";
import Footer from "../footer";
import {
    Route,
    Switch,
    BrowserRouter as Router
} from "react-router-dom";
import ProductList from "../product-list";
import ProductItem from "../product-item";

const App = () => {

    return (
        <Router>
            <div className="app">
                <Header/>

                <main className='main'>
                    <Switch>

                        <Route
                            path='/'
                            exact
                            render={() => <ProductList/> }
                        />

                        <Route
                            path='/product-item'
                            exact
                            render={() => <ProductItem/>}
                        />

                    </Switch>

                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
