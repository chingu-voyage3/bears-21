import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "space-around"
  },
  house_wrapper: {
    cursor: "pointer",
    maxWidth:"215px",
    textAlign:"center"
  },
  list: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    textAlign: "center"
  },
  form: {
    margin: "10px auto",
    maxWidth: "600px",
    display: "grid",
    gridTemplateColumns: "100px 1fr",
    gridGap: "8px"
  },
  left_grid: {
    lineHeight: "1.5em",
    textAlign: "right",
    gridColumn: "1 / 2"
  },
  right_grid: {
    gridColumn: "2/3"
  }
});

export default styles;
