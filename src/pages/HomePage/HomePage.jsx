import React from 'react';
import { Link } from 'react-router-dom';


class HomePage extends React.Component {

    render() {
        return (
            <div>
                This is the homepage
                <Link to="/update">This is a link</Link>
            </div>
        );
    }
}

export { HomePage };