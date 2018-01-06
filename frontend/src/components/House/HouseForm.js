import React from 'react';
import {css} from 'aphrodite';
import styles from './formStyles';
import Uploader from '../Uploader';

export default class HouseForm extends React.Component {
  state = {
    uploader_visible: false,
  };
  toggleUploaderViz = () => {
    this.setState( { uploader_visible: !this.state.uploader_visible});
  };

  render = () => {
    const {
      house,
      onFieldChange,
      onSubmit,
      uploadImage
    } = this.props;
    const show_uploader = {
      display: this.state.uploader_visible?"flex":"none"
    }
    return (
      <form action="" className={css(styles.form)} >
        <label className={css(styles.left_grid)}>Title</label>
        <input className={css(styles.right_grid)} name="title" type="text"
          value={house.title} onChange={onFieldChange} />

        <label className={css(styles.left_grid)}>Description</label>
        <input className={css(styles.right_grid)} name="description" type="text"
          value={house.description} onChange={onFieldChange} />

        <label className={css(styles.left_grid)}>Street</label>
        <input className={css(styles.right_gred)} name="location.street" type="text"
          value={house.location.street} onChange={onFieldChange} />

        <label className={css(styles.left_gred)}>postcode</label>
        <input className={css(styles.right_gred)} name="location.postCode" type="text"
          value={house.location.postCode} onChange={onFieldChange} />

        <button className={css(styles.right_grid)}
          onClick={onSubmit}
          type="button">
          Save
        </button>

        <label className={css(styles.left_grid)}>Images</label>
        <div className={css(styles.right_grid)}>
          <button type="button" onClick={this.toggleUploaderViz} >+</button>
        </div>
        <div className={css(styles.right_grid)} style={show_uploader} >
          <Uploader onFileDropped={uploadImage}/>
        </div>
        <div className="images_wrapper">
          <div id="image_list" >
            {house.images.map( (img, ndx) => <img key={ndx} src={img} alt="noimg"/>)}
          </div>
        </div>
      </form>
    );
  };
};
