import React, { Component } from 'react';

import Body from './Body_Detail/Body';


class General extends Component {
    
    render() {
        return (
            <div className="General">
                <Body item={this.props.choosenItem} />
            </div>
        );
    }
}

export default General;