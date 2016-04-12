import React, { Component } from 'react';
import IconBase from 'react-icon-base';

export default class UserIcon extends Component {
  render() {
    const style = {
      position: 'absolute',
      top: '30%',
      left: '35%'
    };

    return (
      <i className="icon">
        <IconBase style={style} viewBox="0 0 100 100" {...this.props} >
          <path d="M83.4,88.8 L83.4,75.8 C83.4,60.3 70.7,47.6 55.2,47.6 L28.8,47.6 C13.2,47.6 0.6,60.3 0.6,75.8 L0.6,88.8 C0.6,90.2 1.7,91.3 3.1,91.3 L80.8,91.3 C82.2,91.3 83.4,90.2 83.4,88.8 L83.4,88.8 Z M78.4,86.3 L5.6,86.3 L5.6,75.8 C5.6,63 16,52.6 28.8,52.6 L55.1,52.6 C68,52.6 78.4,63 78.4,75.8 L78.4,86.3 L78.4,86.3 Z M42,42.2 C53.4,42.2 62.8,32.9 62.8,21.4 C62.8,9.9 53.4,0.7 42,0.7 C30.6,0.7 21.2,10 21.2,21.4 C21.2,32.8 30.6,42.2 42,42.2 L42,42.2 Z M42,5.7 C50.7,5.7 57.8,12.8 57.8,21.5 C57.8,30.2 50.7,37.2 42,37.2 C33.3,37.2 26.2,30.1 26.2,21.4 C26.2,12.7 33.3,5.7 42,5.7 L42,5.7 Z" id="Shape"></path>
        </IconBase>
      </i>
    );
  }
}
