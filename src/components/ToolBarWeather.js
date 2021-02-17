import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Paper,
  Typography,
  SvgIcon
} from "@material-ui/core";
import { ReactComponent as windDir } from "../../icon/windDir.svg";
import { Rotate90DegreesCcw } from "@material-ui/icons";
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
    onClickOpen
  } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar onclick={onClickOpen}>
          <Box>
            <Paper>
              <Box display="flex">
                <Box>
                  <img src={icon} alt="openweather" />
                </Box>
                <Box>
                  <Typography variant="subtitle1" gutterBottom align="center">
                    {`${temp} °C`}
                  </Typography>
                  <Typography variant="caption" gutterBottom>
                    {`${temp_max} °C | ${temp_min}°C`}
                  </Typography>
                </Box>
                <Box>
                  <SvgIcon
                    component={windDir}
                    viewBox="0 0 32 32"
                    style={{
                      cursor: "pointer",
                      boxSizing: "content-box",
                      fontSize: "32px",
                      marginBottom: "16px",
                      marginLeft: "12px"
                    }}
                  />
                  <Typography variant="caption" gutterBottom>
                    {`${temp_max} °C | ${temp_min}°C`}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
