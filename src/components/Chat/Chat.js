import "./Chat.css";
import React from "react";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialogSlide() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    mobileNo: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setData({
      mobileNo: "",
      message: "",
    });
    setError("");
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  const submit = () => {
    var errorobject = { mobileNo: "", message: "" };

    if (!data.mobileNo) {
      errorobject.mobileNo = "MobileNo is required ";
    } else {
      setError({ ...error, mobileNo: "" });
    }
    if (!data.message) {
      errorobject.message = "Message is required";
    } else {
      setError({ ...error, message: "" });
    }

    if (data.mobileNo !== "" && data.message !== "") {
      let url = `https://web.whatsapp.com/send?phone=+919788315666`;
      url += `&text=${encodeURI(data.message)}&app_absent=0`;
      window.open(url);
      return true;
    } else {
      setError(errorobject);
      return false;
    }
  };
  console.log("data.mobileNoError", error.mobileNoError);
  return (
    <div>
      <div>
        <a
          onClick={handleClickOpen}
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="contactMe">{"*Contact Me"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className="d-flex flex-column">
              <TextField
                id="outlined-basic"
                label="Mobile No"
                type={"number"}
                variant="outlined"
                className="mt-3"
                name="mobileNo"
                value={data.mobileNo}
                onChange={handleChange}
                maxLength={10}
              />
              {error && error?.mobileNo && (
                <small className="text-normal errorTextColor">
                  *{error.mobileNo}
                </small>
              )}
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                className="mt-3"
                multiline
                name="message"
                value={data.message}
                onChange={handleChange}
              />
              {error && error?.message && (
                <small className="text-normal errorTextColor">
                  *{error.message}
                </small>
              )}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="d-block text-center">
          <button onClick={handleClose} className="cancel">
            Cancel
          </button>
          <button onClick={submit} className="submit">
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AlertDialogSlide;
