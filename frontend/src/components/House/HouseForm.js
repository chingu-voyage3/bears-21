import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';
import styles from './styles';

export default class HouseForm extends React.Component {
  static propTypes = {
    house: PropTypes.object.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  };
  state = {
    uploader_visible: false
  };
  toggleUploaderViz = () => {
    this.setState( { uploader_visible: !this.state.uploader_visible});
  };

  render = () => {
    const {
      house,
      onFieldChange,
      onSubmit
    } = this.props;
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
      </form>
    );
  };
};
