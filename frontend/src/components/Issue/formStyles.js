import {StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  image_title: {
    margin: "1em auto",
    fontSize: "1.5em"
  },
  images_wrapper: {
    margin: "1em auto"
  },
  upload_wrapper: {
    flexDirection: "row"
  },
  form: {
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
