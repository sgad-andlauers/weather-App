import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const api = {
  key: "dccaf6aa0d20098d29d68bf74d603f83",
  url: "https://api.openweathermap.org/data/2.5/"
};

export default function DialogWeather(props) {
  const { open, onClickClose, coordonees } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClickClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          {/** -------------------------------------- Météo du jour ------------------------------------------------------ */}
          {/** -------------------------------------- Météo du lendemain ------------------------------------------------- */}
          {/** -------------------------------------- Météo sur 7 jours -------------------------------------------------- */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
