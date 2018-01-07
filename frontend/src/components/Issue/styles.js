import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  column_wrapper: {
    padding: "1em 0px",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid lightgrey"
  },
  issue_style: {
    cursor: "pointer",
    textAlign: "left",
    listStyle: "none",
    ':hover': {
      background: "lightgrey"
    }
  },
  title: {
    textAlign: "center"
  }
});

export default styles;
