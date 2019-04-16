import React, { Component } from "react";
//Importing the SDK - need to run npm install @pusher/chatkit-client
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

//Importing our Components
import {
  MessageList,
  NewRoomForm,
  RoomsList,
  SendMessageForm
} from "./ChatComponent";

//Importing our tokenUrl and instanceLocator from config
import { tokenUrl, instanceLocator } from "./ChatComponent/config";

class ChatScreen extends Component {
  state = {
    roomId: null, //room.id isn't defined till we subscribe/join a room
    messages: [], //store our messages
    joinableRooms: [], // All rooms including not subscribed rooms
    joinedRooms: [] // Rooms that the currentuser already subscribed to
  };

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator,
      userId: "manuelc",
      tokenProvider: new TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser; // currentUser is now available in the whole app instance
      this.getRooms();
    });
  }

  getRooms = () => {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        });
      })
      .catch(err => console.log("error on joinableRooms: ", err));
  };

  subscribeToRoom = roomId => {
    this.setState({ messages: [] });
    //needed to prevent a bug, as where we subscribetoroom,
    //we continuously append to our messages aray
    this.currentUser
      .subscribeToRoom({
        roomId,
        hooks: {
          // event listener when a new message is "created/sent"
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message] // add the latest message at the end of the array
            });
          }
        }
      })
      //Updating the joinableRooms after subscribing
      .then(room => {
        //also sets our state roomid into the current room we are in
        this.setState({
          roomId: room.id
        });
        this.getRooms();
      })
      .catch(err => console.log("error on subscribing to room: ", err));
  };

  sendMessage = text => {
    //we will send this down to a child component, so that we get
    // the data from the handleSubmit
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    });
  };

  createRoom = name => {
    this.currentUser
      .createRoom({
        name
      })
      .then(room => this.subscribeToRoom(room.id))
      .catch(err => console.log("error on create Room: ", err));
  };

  render() {
    return (
      <div className="app">
        <MessageList
          roomId={this.state.roomId}
          messages={this.state.messages}
        />
        <NewRoomForm createRoom={this.createRoom} />
        <RoomsList
          roomId={this.state.roomId}
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
        />
        <SendMessageForm
          disabled={!this.state.roomId}
          sendMessage={this.sendMessage}
        />
        {/* inverse dataflow ( child to parent)*/}
      </div>
    );
  }
}

export default ChatScreen;
