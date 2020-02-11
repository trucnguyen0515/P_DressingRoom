import React, { Component } from 'react';
import Item from '../../Item';
import myData from '../../../../../Data/getData';

class TabPane extends Component {

    // Phan loai
    Group_Item = (typeItem) => {
        let Arr_Group_Item = [];
        myData.ListOfItems.forEach(item => {
            if(item.type === typeItem){
                Arr_Group_Item = [...Arr_Group_Item,item];
            }
        }); 
        return Arr_Group_Item;
    }

    // Hien thi item da phan loai
    Show_Item = (Arr_Group_Item) => {
        let val = Arr_Group_Item.map((item,index) => {
            return <Item type={item.type} id={item.id} srcImg={item.imgSrc_jpg} name={item.name} key={index} item={item} transferItem={this.props.transferItem} choosenItem={this.props.choosenItem}/>
        })
        return val;
    }


    render() {
        let arrGroupItem;
        let ShowArrItem;

        switch (this.props.type) {
            case this.props.type:
                arrGroupItem = this.Group_Item(this.props.type);
                ShowArrItem = this.Show_Item(arrGroupItem);
                break;
            default:
                break;
        }

        return (
            <div className="tab-pane fade in" id={this.props.tabName}>
                {ShowArrItem}
            </div>
        );
    }
}

export default TabPane;