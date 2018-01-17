import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  column_wrapper: {
    padding: "1em 0px",
    width: "30%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    border: "1px solid lightgrey"
  },
  issue_style: {
    cursor: "pointer",
    textAlign: "left",
    listStyle: "none",
    ":hover": {
      background: "lightgrey"
    }
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
