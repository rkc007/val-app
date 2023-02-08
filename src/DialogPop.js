import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [propose, setPropose] = React.useState(false);
  const [progress, setProgress] = React.useState(true);
  const [state1, setState1] = React.useState({
    tt1: false,
    tt2: false,
    tt3: false,
    tt4: false,
    tt5: false,
    tt6: false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const { tt1, tt2, tt3, tt4, tt5, tt6 } = state1;
  const error = [tt1, tt2, tt3, tt4, tt5, tt6].filter((v) => v).length !== 6;

  const handleCheckbox = (event) => {
    setState1({
      ...state1,
      [event.target.name]: event.target.checked,
    });
  };

  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
  };

  const handleClose1 = () => {
    setOpen(false);
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
    setOpen4(true);
    setTimeout(() => {
      setProgress(false);
    }, 10000);
  };
  const handleClose4 = () => {
    setOpen4(false);
    setOpen5(true);
  };

  const handleproposeclose = () => {
    setPropose(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
    // setOpen3(true);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Hey!
      </Button>
      {/* 1 */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Hey Anjali"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ooopsss! I know you don't like me calling you Anjali. Let's change
            it then ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose1} autoFocus>
            Sure
          </Button>
        </DialogActions>
      </Dialog>
      {/* 2 */}
      <Dialog
        open={open2}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Hey Baby"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            I think this is much better than before. Now that it's better, let's
            find your Valentine ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose2} autoFocus>
            Let's GO
          </Button>
        </DialogActions>
      </Dialog>
      {/* 3 */}
      <Dialog
        open={open3}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"What qualities you want in your guy ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl
              required
              error={error}
              component="fieldset"
              variant="standard"
            >
              <FormLabel component="legend">You gotta pick all</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={tt1}
                      onChange={handleCheckbox}
                      name="tt1"
                    />
                  }
                  label="Caring"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={tt2}
                      onChange={handleCheckbox}
                      name="tt2"
                    />
                  }
                  label="Responsible"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={tt3}
                      onChange={handleCheckbox}
                      name="tt3"
                    />
                  }
                  label="Disciplined (Not much)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={tt4}
                      onChange={handleCheckbox}
                      name="tt4"
                    />
                  }
                  label="Possessive"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={tt5}
                      onChange={handleCheckbox}
                      name="tt5"
                    />
                  }
                  label="Same Humor"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      checked={tt6}
                      onChange={handleCheckbox}
                      name="tt6"
                    />
                  }
                  label="Forever kinda Guy"
                />
              </FormGroup>
            </FormControl>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          {!error && (
            <Button onClick={handleClose3} autoFocus>
              Next
            </Button>
          )}
        </DialogActions>
      </Dialog>
      {/* 4*/}
      <Dialog
        open={open4}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {progress ? (
          <DialogTitle id="alert-dialog-title">{"Finding you Guy"}</DialogTitle>
        ) : (
          <DialogTitle id="alert-dialog-title">
            {"TADAAA, Found your guy"}
          </DialogTitle>
        )}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {progress && <CircularProgress color="secondary" />}
            {!progress && (
              <Typography variant="button" display="block" gutterBottom>
                Rahul
              </Typography>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose4} autoFocus>
            Next
          </Button>
        </DialogActions>
      </Dialog>
      {/* 5*/}
      <Dialog
        open={open5}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"He's asking you out"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {propose ? (
              <Typography variant="body1" gutterBottom>
                YES is the only option :)
              </Typography>
            ) : (
              <Typography variant="body1" gutterBottom>
                In life, a lot of people will hold your hand. But no one will
                hold your heart the way I do. Will you be my Girlfriend, Wife,
                love of my life ?
              </Typography>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {!propose && (
            <Button onClick={handleproposeclose} autoFocus>
              No
            </Button>
          )}

          <Button onClick={handleClose5} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
