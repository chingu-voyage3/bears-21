import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  upload_wrapper: {
    display: "flex",
    flexDirection: "row"
  },
  cross_box_colour: {
    background: "linear-gradient( to top, #49CF87, #40C080)"
  },
  image_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  image_box: {
    maxWidth: "200px",
    maxHeight: "200px"
  },
  close_button: {
    position: "absolute",
    top: "0px",
    right: "0px"
  },
  wrapper: {
    position: "relative"
  }
});
