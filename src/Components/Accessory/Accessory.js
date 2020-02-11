import React, { Component } from 'react';
import TabContent from '../Accessory/Item/TabContent/TabContent'

class Accessory extends Component {
    render() {
        return (
            <div className="well">
                <TabContent transferItem={this.props.transferItem} choosenItem={this.props.choosenItem}/>
            </div>
        );
    }
}

export default Accessory;