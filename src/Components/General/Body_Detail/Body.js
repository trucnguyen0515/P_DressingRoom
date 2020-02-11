import React,{Component} from 'react';
import {topStyle,botStyle,footleftStyle,footrightStyle,feetStyle,handbagStyle,hairStyle,bodyStyle,topStyleChange, botStyleChange, hairStyleChange, feetStyleChange, StyleNone, handbagStyleChange, necklacesStyleChange, backgroundStyle} from '../../../Data/initStyle';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hairStyle: hairStyle,
            topStyle: topStyle,
            botStyle: botStyle,
            feetStyle: feetStyle,
            handbagStyle: handbagStyle,
            necklacesStyle : necklacesStyleChange,
            background: backgroundStyle
        }
    }

    changeStyle = () => {
        this.setState({
            hairStyle: this.CheckItem()[2],
            topStyle: this.CheckItem()[0],
            botStyle: this.CheckItem()[1],
            feetStyle: this.CheckItem()[3],
            handbagStyle: this.CheckItem()[4],
            necklacesStyle: this.CheckItem()[5],
            background: this.CheckItem()[6]
        })
    }

    resetStyle = () => {
        this.setState({
            topStyle:topStyle,
            botStyle:botStyle,
            background: backgroundStyle,
        })
    }


    CheckItem = () => {
        // Neu khong co du lieu se tra ve
        let itemTop = this.state.topStyle;
        let itemBot = this.state.botStyle;
        let itemBackground = this.state.background;
        // Neu co du lieu se check tiep tuc
        let itemHair;
        let itemFeet;
        let itemHandbag;
        let itemNecklaces;
        let background;
        
            for(let item of this.props.item){
                if(item.type === "topclothes"){
                    itemTop = topStyleChange;
                    background = `url(${item.imgSrc_png})`;
                    itemTop = {...itemTop,background};
                }
                if(item.type === "botclothes"){
                    itemBot = botStyleChange;
                    background = `url(${item.imgSrc_png})`;
                    itemBot = {...itemBot,background};
                }
                if(item.type === "hairstyle"){
                    itemHair = hairStyleChange;
                    background = `url(${item.imgSrc_png})`;
                    itemHair = {...itemHair,background};
                }
                if(item.type === "shoes"){
                    itemFeet = feetStyleChange;
                    background = `url(${item.imgSrc_png})`;
                    itemFeet = {...itemFeet,background};
                }
                if(item.type === "handbags"){
                    itemHandbag = handbagStyleChange;
                    background = `url(${item.imgSrc_png})`;
                    itemHandbag = {...itemHandbag,background};
                }
                if(item.type === "necklaces"){
                    itemNecklaces = necklacesStyleChange;
                    background = `url(${item.imgSrc_png})`;
                    itemNecklaces = {...itemNecklaces,background};
                }
                if(item.type === "background"){
                    itemBackground = backgroundStyle;
                    background = `url(${item.imgSrc_png})`;
                    itemBackground = {...itemBackground,background};
                }
            }

        return [itemTop,itemBot,itemHair,itemFeet,itemHandbag,itemNecklaces,itemBackground];
    }

    // Giup render lai component khi nhan dc props
    componentWillReceiveProps = () => {
        this.changeStyle();  
        this.resetStyle();
    }

    render(){
        return (
            <div className="_BackGround" style={this.CheckItem()[6]}>
                <div className="Hair" style={this.CheckItem()[2]}></div>
                <div className="Face" style={hairStyle}></div>
                <div className="Body" style={bodyStyle}></div>
                <div className="Necklaces" style={this.CheckItem()[5]}></div>
                <div className="Handbag" style={this.CheckItem()[4]}></div>
                <div className="BikiniTop" style={this.CheckItem()[0]}></div>
                <div className="BikiniBottom" style={this.CheckItem()[1]}></div>
                <div className="Feet" style={this.CheckItem()[3]}>
                    <div className="footLeft" style={ !this.CheckItem()[3] ? footleftStyle : StyleNone}></div>
                    <div className="footRight" style={ !this.CheckItem()[3] ? footrightStyle : StyleNone}></div>
                </div>
            </div>
           
        );
    }
};

export default Body;