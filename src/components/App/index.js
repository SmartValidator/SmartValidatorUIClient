import React, {Component} from 'react';
import './style.css';
import Header from '../Header';
import Footer from '../Footer';
import {Route, Switch} from 'react-router-dom';

import RootPage from '../RootPage';
import Conflicts from '../Conflicts';
import DataSources from '../DataSources';
import Simulator from '../Simulator';
import Settings from '../Settings';
import NotFound from '../NotFound';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route path="/ui/data_sources" component={DataSources}/>
                    <Route path="/ui/conflicts" component={Conflicts}/>
                    <Route path="/ui/simulator" component={Simulator}/>
                    <Route path="/ui/settings" component={Settings}/>
                    <Route path="/" component={RootPage}/>
                    <Route component={NotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
