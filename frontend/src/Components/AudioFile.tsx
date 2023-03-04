import React, { Component } from "react";
export interface SimplePlayerProps {}
// import myTrack from "../Images/bensound-moose.mp3";

export class SimplePlayer extends Component<SimplePlayerProps> {
    constructor(props: SimplePlayerProps) {
      super(props);
      console.log(this.props);
      this.state = {};
    }
  
    render() {
      return (
        <div id="wrapper">
          <audio id="mytrack" controls autoPlay>
            <source src="" />
          </audio>
        </div>
      );
    }
}
  