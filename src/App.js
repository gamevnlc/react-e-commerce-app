import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.scss';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faIgloo} from '@fortawesome/free-solid-svg-icons'
import NavbarApp from './components/NavbarApp'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'

library.add(faIgloo);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarApp />
                <Switch>
                    <Route exact path="/" component={ProductList}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/cart" component={Cart}/>
                    <Route component={Default}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
