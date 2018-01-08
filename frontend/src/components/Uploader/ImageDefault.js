import React from 'react';

export default class ImageDefault extends React.Component {
  state = {
    image_error: false
  };
  componentWillReceiveProps = (props) => {
    if( props.src !== this.props.src){
      this.setState( {image_error: false});
    }
  };
  onImageError = (e) => {
    console.log( "image error for url:", e.target.src);
    this.setState( {image_error: true});
  };
  render = () => {
    const {src,missing_url} = this.props;
    const {image_error} = this.state;
    const url = src?src:missing_url;
    const style={ maxWidth: "200px", maxHeight: "200px"};
    return (
      <div>
        {image_error?
          <img style={style} src={missing_url} alt="noimage"/>
          :
          <img style={style} src={url} alt="noimage" onError={this.onImageError} />
        }
      </div>
    );
  };
};
