// import libs
import { Component } from 'react';
import clsx from 'clsx';
// import components
// import css

class TopNavigationBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            links: [
                {id: 1, name: 'Pizza', active: true},
                {id: 2, name: 'Donut', active: false},
                {id: 3, name: 'Drink', active: false},
            ]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <div className="container-lg">
                    <ul className="navbar-nav">
                        {this.state.links.map(link => (
                            <li key={link.id} className="nav-item">
                                <a
                                    className={clsx("nav-link", {
                                        [link.active]: link.active ? "active" : ""
                                    })}
                                    href="/"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    }
};

export default TopNavigationBar;