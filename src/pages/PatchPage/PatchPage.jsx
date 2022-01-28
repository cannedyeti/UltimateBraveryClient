import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from 'config';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

class PatchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patch: null,
            fetchingPatch: false
        };
        this.updatePatch = this.updatePatch.bind(this);
    }

    updatePatch() {
        this.setState({fetchingPatch: true})
        fetch(`${config.apiUrl}/api/patch/update`)
        .then((res) => res.json() )
        .then((json) => {
            this.setState({fetchingPatch: false})
            this.setState({patch: json})
            console.log('patch', json)
        })
    }

    componentDidMount() {
        fetch(
        `${config.apiUrl}/api/patch`)
        .then((res) => res.json())
        .then((json) => {
            const patch = json.patchNumber;
            this.setState({ patch: patch })
        })
    }


    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <div>
                    This is the patch page {this.state.patch ? this.state.patch : ''}
                </div>
                <Button variant="contained" disabled={this.state.fetchingPatch} onClick={this.updatePatch}>Update Patch</Button>
            </div>
        );
    }
}

export { PatchPage };