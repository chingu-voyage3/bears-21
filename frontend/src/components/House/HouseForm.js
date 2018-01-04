import React from 'react';
import {css} from 'aphrodite';
import styles from './formStyles';
import Uploader from '../Uploader';

export default class HouseForm extends React.Component {
  state = {
    uploader_visible: false
  };
  toggleUploaderViz = () => {
    this.setState( { uploader_visible: !this.state.uploader_visible});
  };

  render = () => {
    const {
      house, onFieldChange, onSaveClick,
      uploadImage
    } = this.props;
    return (
      <form action="" className={css(styles.form)} >
        <label className={css(styles.left_grid)}>Title</label>
        <input className={css(styles.right_grid)} name="title" type="text"
          value={house.title} onChange={onFieldChange} />

        <label className={css(styles.left_grid)}>Description</label>
        <input className={css(styles.right_grid)} name="description" type="text"
          value={house.description} onChange={onFieldChange} />

        <div className="image_title">
          Images <button onClick={this.toggleUploaderViz} >+</button>
        </div>
        <div className="upload_wrapper" style={this.state.uploader_visible} >
          <Uploader onFileDropped={uploadImage}/>
        </div>
        <div className="images_wrapper">
          <div id="image_list" >
            {house.images.map( (img, ndx) => <img key={ndx} src={img} alt="noimg"/>)}
          </div>
        </div>

        <button className={css(styles.right_grid)}
          onClick={onSaveClick}
          type="button">
          Save
        </button>
      </form>
    );
  };
};
