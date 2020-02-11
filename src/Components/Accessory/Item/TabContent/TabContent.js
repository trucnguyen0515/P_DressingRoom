import React, { Component } from 'react';
import TabPane from './TabPane/TabPane';
import ButtonArray from '../../../../Data/ButtonArray';

class TabContent extends Component {

    Get_Pane_Button = () => {
        let val = ButtonArray.map((btn,index)=>{
            return <TabPane tabName={btn.tabName} type={btn.type} key={index} transferItem={this.props.transferItem} choosenItem={this.props.choosenItem}/>
        });
        return val;
    }

    render() {

        const PaneButton = this.Get_Pane_Button();

        return (
            <div className="tab-content">
                {PaneButton}
            </div>
        );
    }
}

export default TabContent;