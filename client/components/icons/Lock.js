import React, { Component } from 'react';
import IconBase from 'react-icon-base';

export default class LockIcon extends Component {
  render() {
    const style = {
      position: 'absolute',
      top: '30%',
      left: '35%'
    };

    return (
      <i className="icon">
        <IconBase style={style} viewBox="0 0 100 100" {...this.props} >
          <path d="M79.2,51.9 C79.2,47.9 75.9,44.6 71.9,44.6 L67.2,44.6 L67.2,28 C67.2,13 55,0.9 40,0.9 C25,0.9 12.8,13 12.8,28 L12.8,44.6 L8.1,44.6 C4.1,44.6 0.8,47.9 0.8,51.9 L0.8,89.8 C0.8,93.8 4.1,97.1 8.1,97.1 L71.8,97.1 C75.8,97.1 79.1,93.8 79.1,89.8 L79.1,51.9 L79.2,51.9 Z M17.8,28 C17.8,15.8 27.7,5.8 40,5.8 C52.2,5.8 62.2,15.7 62.2,28 L62.2,44.6 L17.8,44.6 L17.8,28 L17.8,28 Z M74.2,89.8 C74.2,91.1 73.2,92.1 71.9,92.1 L8.1,92.1 C6.8,92.1 5.8,91.1 5.8,89.8 L5.8,51.9 C5.8,50.6 6.8,49.6 8.1,49.6 L71.8,49.6 C73.1,49.6 74.1,50.6 74.1,51.9 L74.1,89.8 L74.2,89.8 Z M40,61 C34.5,61 30.1,65.4 30.1,70.9 C30.1,76.4 34.5,80.8 40,80.8 C45.5,80.8 49.9,76.4 49.9,70.9 C49.9,65.4 45.5,61 40,61 L40,61 Z M40,75.8 C37.3,75.8 35.1,73.6 35.1,70.9 C35.1,68.2 37.3,66 40,66 C42.7,66 44.9,68.2 44.9,70.9 C44.9,73.6 42.7,75.8 40,75.8 L40,75.8 Z" id="Shape"></path>
        </IconBase>
      </i>
    );
  }
}
