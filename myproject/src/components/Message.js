import { Component } from "react";
class Message extends Component {
    render () {
        return <h1> MessageCode: {this.props.messageCode} <br>
        </br>{this.props.messageContent} </h1>;
    }
}

export default Message;