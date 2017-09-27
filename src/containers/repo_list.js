import React, { Component } from 'react';
import { connect } from 'react-redux';

class RepoList extends Component {
    renderRepo(repoData) {
        return (
            <div className='list-item container'>
                <div className="row">
                    <div className='photo-container col-md-3'>
                        <div className='photo'>
                            <a href ={repoData.owner.html_url}>
                                <img src={repoData.owner.avatar_url} />
                            </a>
                         </div>
                    </div>

                    <div className='content col col-md-9'>
                        <div className='name'>
                            <a href={repoData.html_url}>{repoData.name}</a>
                            </div>
                        <div className='author'>{repoData.owner.login}</div>
                        <div className='description'>{repoData.description}</div>
                    </div> 
                </div>
            </div>
        );
    }
    
    render() {
        return (
            
            <div className='list-all'>
                {this.props.repo.map(this.renderRepo)}   
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return { repo: state.repo };
}

export default connect(mapStateToProps)(RepoList);