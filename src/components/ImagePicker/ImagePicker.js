import React, { Component } from 'react';
class ImagePicker extends Component {
    render() {
        return (
            <div>
                <input onChange={this.props.handleInput} value={this.props.userInput} />
                <button onClick={this.props.getUserInput}>Submit Url</button>
                {/* here's a sample image: http://placekitten.com/200/300 */}
                <img src={this.props.userTyped} />
            </div>
        );
    }
}

export default ImagePicker;