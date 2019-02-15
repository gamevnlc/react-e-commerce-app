import React, {Component} from 'react';
import './App.scss';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faIgloo} from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart'
import Default from './components/Default'

library.add(faIgloo);

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ProductList/>
                <Details/>
                <Cart/>
                <Default/>
            </React.Fragment>
        );
    }
}

export default App;
