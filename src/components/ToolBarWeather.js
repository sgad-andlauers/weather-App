import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function ToolBarWeather(props) {
  const classes = useStyles();
  const {
    icon,
    temp,
    temp_max,
    temp_min,
    wind_dir,
    wind_speed,
    fells_like,
    pressure,
    humidity,
    sunSet,
    sunRise
  } = props;
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar onclick={handleClickOpen}>
          <Box display="flex">
            <Paper>{icon}</Paper>
            <Paper>
              {`${temp} °C`}
              <Box>{`${temp_max} °C | ${temp_min}°C`}</Box>
            </Paper>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
