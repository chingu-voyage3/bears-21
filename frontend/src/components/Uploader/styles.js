import {StyleSheet} from "aphrodite";

export default StyleSheet.create({
  wrapper: {
    padding: "0px 20px",
    border: "2px solid darkgrey",
    borderRadius: "10px",
    boxShadow: "0px 0px 8px 0 #ccc",
    background: "lightgrey",
    position: "absolute"
  },
  well: {
    padding: "10px",
    paddingBottom: "10px",
    marginBottom: "0px"
  },
  image_style: { maxWidth: "215px", maxHeight: "215px" },
  ip_wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "5px auto"
  },
  btn_wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "0.8em",
    marginBottom: "1em"
  }
});
