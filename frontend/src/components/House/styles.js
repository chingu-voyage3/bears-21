import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  cross_box_colour: {
    background: "tomato" // "linear-gradient( to top, #49CF87, #40C080)"
  },
  close_button: {
    position: "absolute",
    top: "0px",
    right: "0px"
  },
  wrapper: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-around"
  },
  house_wrapper: {
    cursor: "pointer",
    maxWidth:"215px",
    textAlign:"center"
  },
  card_wrapper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "200px",
    border: "1px solid black",
    borderRadius: "5px",
    background: "#fff",
    margin: "10px"
  },
  list: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    textAlign: "center",
    padding: "6px",
    margin: "0"
  },
  sub_title: {
    maxWidth: "178px",
    padding: "6px"
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
