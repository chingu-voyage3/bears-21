import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, css} from 'aphrodite';

class Detail extends Component {
  state = {
    email: "",
    name: ""
  };
  onFieldChange = e => {
    this.setState( {[e.target.name]: e.target.value});
  };
  componentWillMount = () => {
    const {data, localUser} = this.props;
    if (localUser) {
      this.setState( {email: data.email, name: data.name});
    }
  };
  render = () => {
    const {name, email} = this.state;
    const {data, localUser} = this.props;
    return (
      <div className={css(styles.wrapper)} >
        <label className={css(styles.left_grid)}>Name</label>
        <div className={css(styles.right_grid)} >
          {localUser
            ? <input name="name" value={name} onChange={this.onFieldChange} />
            : data.name
          }
        </div>
        <label className={css(styles.left_grid)}>Email</label>
        <div className={css(styles.right_grid)} >
          {localUser
            ? <input name="email" value={email} onChange={this.onFieldChange}/>
            : data.email
          }
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  localUser: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    margin: '0 2rem',
    display: "grid",
    alignItems: "baseline",
    flex: '1',
    gridTemplateColumns: "1fr 3fr",
    gridTemplateRows: '2rem 2rem 2rem',
    gridGap: "8px"
  },
  left_grid: {
    padding: '1rem 0 1rem 0',
    lineHeight: "1.5em",
    textAlign: "right",
    gridColumn: "1/2",
    fontWeight: 'bold'
  },
  right_grid: {
    padding: '1rem 0 1rem 0',
    gridColumn: "2/3"
  }
});

export default Detail;
