import React from 'react';
import './Track.css';


class Track extends React.Component {
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3><!-- track name will go here --></h3>
          <p><!-- track artist will go here--> | <!-- track album will go here --></p>
        </div>
        //Research the meaning behind lines 14 and 15
        {this.props.shouldAdd && <a className="Track-action" onClick={this.addTrack}>+</a>}
        {!this.props.shouldAdd && <a className="Track-action" onClick={this.removeTrack}>-</a>}
      </div>
    );
  }
}

export default Track;
