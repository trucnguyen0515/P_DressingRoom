import React, { Component } from 'react';
import $ from 'jquery'

class Button extends Component {

    componentDidMount() {
        // Set active first item
        $("[href*='#tabTopClothes']").removeClass("btn-default").addClass("btn-primary");
        $("#tabTopClothes").attr("class","tab-pane fade active in");
     }

    render() {

        $(document).ready(function(){
            //Click active
            $(".btn-pref .btn").click(function(){
                $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
                $(this).removeClass("btn-default").addClass("btn-primary");
            });
        });
         

        return (
            <div className="btn-group" role="group">
            <button
                type="button"
                id="stars"
                className="btn btn-default"
                href={`#${this.props.tabName}`}
                data-toggle="tab"
            >
                <div className="hidden-xs">{this.props.NameButton}</div>
            </button>
        </div>
        );
    }
}

export default Button;