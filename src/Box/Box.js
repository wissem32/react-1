import React, {Component} from "react";
class Box extends Component {
    render() {
        return (
            <div className="box">
                <h1>{this.props.name}</h1>
                <p>{this.props.des}</p>
            </div>
        );
    }

}
export default Box;