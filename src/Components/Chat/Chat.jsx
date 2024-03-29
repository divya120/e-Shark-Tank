import React, { Component } from "react";
import { Launcher } from "react-chat-window";

const myMessageList = [
  {
    author: "me",
    type: "text",
    data: {
      text: "Hi, I liked your idea and concept, ready to invest Rs. 50 lakhs with 10% equity in exchange. PFA the proposal",
    },
  },
  {
    author: "me",
    type: "file",
    data: {
      url: "Negotiation Contract.pdf",
      fileName: "Negotiation Contract.pdf",
    },
  },
  {
    author: "them",
    type: "text",
    data: {
      text: "Hello, thank you for your interest, that seems a fair deal, is it negotiable?",
    },
  },
];

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messageList: myMessageList,
      newMessagesCount: 0,
      isOpen: false,
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
    });
  }

  _onFilesSelected(fileList) {
    const objectURL = window.URL.createObjectURL(fileList[0]);
    this.setState({
      messageList: [
        ...this.state.messageList,
        {
          type: "file",
          author: "me",
          data: {
            url: objectURL,
            fileName: fileList[0].name,
          },
        },
      ],
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen
        ? this.state.newMessagesCount
        : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text },
          },
        ],
      });
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0,
    });
  }

  render() {
    return (
      <div>
        <Launcher
          agentProfile={{
            teamName: "Mukesh Paramar",
            imageUrl:
              "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          onFilesSelected={this._onFilesSelected.bind(this)}
          messageList={this.state.messageList}
          newMessagesCount={this.state.newMessagesCount}
          handleClick={this._handleClick.bind(this)}
          isOpen={this.state.isOpen}
          showEmoji
        />
      </div>
    );
  }
}

export default Chat;
