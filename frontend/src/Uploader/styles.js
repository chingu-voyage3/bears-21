import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  wrapper: {
    padding: '0px 20px',
    border: '2px solid darkgrey',
    borderRadius: '10px',
    boxShadow: '0px 0px 8px 0 #ccc',
    background: 'lightgrey',
    maxWidth: '220px'
    // position: "absolute"
  },
  well: {
    padding: '10px',
    paddingBottom: '10px',
    marginBottom: '0px'
  },
  image_style: { maxWidth: '215px', maxHeight: '215px' },
  ip_wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btn_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '0.8em',
    margin: '1em'
  }
});
