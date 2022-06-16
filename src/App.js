// import libs
import { Navbar, NavbarBrand } from 'reactstrap';
// import components
import { Component } from 'react';
// import css
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand>First Item</NavbarBrand>
                        <NavbarBrand>Second Item</NavbarBrand>
                        <NavbarBrand>Third Item</NavbarBrand>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default App;
