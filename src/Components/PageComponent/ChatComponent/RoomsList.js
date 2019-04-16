import React, { Component } from "react";

export default class RoomsList extends Component {
  render() {
    const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
    return (
      <div className="rooms-list">
        <ul>
          <h3>Your rooms</h3>
          {orderedRooms.map(room => {
            /*
             * In order to fix a minor bug: joinablerooms jumping into joinedrooms
             * causing a disorder in the RoomsList UI
             * The bug happens in the setState method in getRooms()
             * To fix this: we create an orderedArray and sort them
             * according top their id (ascending order)
             */
            const active = this.props.roomId === room.id ? "active" : "";
            return (
              <li key={room.id} className={"room " + active}>
                {/**
                 * To highlight the room we are in, we pass the
                 * roomid into roomlist so that we can compare
                 * the room.id, if true, const active shall
                 * return "active" which we will then concatinate into className
                 * to get a defined style in our css
                 */}
                <a
                  onClick={() => this.props.subscribeToRoom(room.id)}
                  //doing this will call the function on click not on render
                  href="#s"
                >
                  # {room.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
