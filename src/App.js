// import libs
import { Navbar, NavbarBrand } from 'reactstrap';
// import components
import { Component } from 'react';
import { Menu, Nav, Content } from './components';
// import css
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                {/* <Nav />
                <Menu /> */}
                <Content />
            </div>
        )
    }
}

export default App;
