import React, {useState} from 'react';
import './app.scss';
import Header from "../header";
import Footer from "../footer";
import {CustomButton, CustomPopup} from "../custom-elements";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {

    // const [ popupFlag, setPopupFlag ] = useState(false);


    return (
        <Router>
            <div className="app">
                <Header/>

                {/*<button*/}
                {/*    className='card_btn'*/}
                {/*    onClick={() => setPopupFlag(true)}*/}
                {/*>*/}
                {/*    Добавьте свой товар*/}
                {/*</button>*/}

                {/*<CustomPopup*/}
                {/*    trigger={popupFlag}*/}
                {/*    setTrigger={setPopupFlag}*/}
                {/*>*/}

                {/*    <CustomButton*/}
                {/*        buttonClassName='card_btn'*/}
                {/*        handleClick={() => setPopupFlag(false)}*/}
                {/*    >*/}
                {/*        Добавьте свой товар*/}
                {/*    </CustomButton>*/}
                {/*</CustomPopup>*/}

                <main className='main'>
                    <Switch>

                        <Route
                            path='/'

                        />

                    </Switch>

                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
