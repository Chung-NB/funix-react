// import libs
import { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={e => this.setState({
                        value: e.target.value
                    })}
                />
                <h2>{this.state.value}</h2>
            </div>
        )
    }
};

export default Content;