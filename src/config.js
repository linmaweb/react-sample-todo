import moment from "moment";

const timeFormat = moment().format("MMM DD [']YY [at] HH:mm");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    background: "rgba(0, 0, 0, 0.85)",
    border: "none",
    height: "100vh",
  },
};

export { timeFormat, modalStyles };
