import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepo } from '../actions/index';


class AddRepo extends Component {
    constructor(props) {
        super(props);

        this.state = { repo: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ repo: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchRepo(this.state.repo); 
        this.setState({ repo: '' })
    }

    render () {
        return (
        <div className='submit-form'>
            <form onSubmit={this.onFormSubmit}>
                <button>Github.com</button>
                <span className="dash">/</span>
                <input 
                type="text" 
                placeholder= "user/repository"
                value={this.state.repo}
                onChange={this.onInputChange} /> 
                <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRepo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddRepo);