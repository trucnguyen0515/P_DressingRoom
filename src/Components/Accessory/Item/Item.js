import React, { Component } from 'react';

class Item extends Component {

    getItem = () => {
       
        if(this.props.choosenItem.length === 0){
            this.props.transferItem(this.props.item);
        } else {
            for(let i = 0; i < this.props.choosenItem.length; i++){
                // Neu chua co item giong nhau thi add 
                if(this.props.id !== this.props.choosenItem[i].id){
                    this.props.transferItem(this.props.item);
                } 
                // Neu co item thi xoa item cu add item moi
                if(this.props.type === this.props.choosenItem[i].type){
                    this.props.choosenItem.splice(i,1);
                    this.props.transferItem(this.props.item);
                }
            }
        }
    }
   

    render() {
        return (
        <div className="col-md-4" style={{marginTop:'50px'}}>
            <img src={this.props.srcImg} alt={this.props.name} />
            <button style={{marginLeft:'10px'}} onClick={this.getItem}>Thay Do</button>
         </div>
        );
    }
}

export default Item;