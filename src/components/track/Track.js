import React from 'react';
import './Track.css';


class Track extends React.Component {
  constructor(props){
    super(props);
      this.addTrack = this.addTrack.bind(this);
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist}|{this.props.track.album}m</p>
        </div>
        //Research the meaning behind lines 14 and 15
        {this.props.shouldAdd && <a className="Track-action" onClick={this.addTrack}>+</a>}
        {!this.props.shouldAdd && <a className="Track-action" onClick={this.removeTrack}>-</a>}
      </div>
    );
  }
  addTrack(){
    this.props.onAdd(this.props.track);
  }
}

export default Track;
