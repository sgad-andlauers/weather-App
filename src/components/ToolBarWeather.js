import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Box, Paper, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import axios from "axios";
import PropTypes from "prop-types";

import TempComponents from "./tempComponents/TempComponents";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const api = {
  key: "dccaf6aa0d20098d29d68bf74d603f83",
  url: "https://api.openweathermap.org/data/2.5/"
};
export default function ToolBarWeather(props) {
  const classes = useStyles();
  const { icon, wind, onClickOpen, temperature, coordonnees } = props;
  const [weather, setWeather] = useState(null);

  // questionnement de l'api openweather
  const getCurrentWeather = async (coordonnees) => {
    console.log("get api");
    const res = await axios.get(
      `${api.url}weather?lat=${coordonnees[0]}&lon=${coordonnees[1]}&units=metric&lang=fr&appid=${api.key}`
    );
    setWeather(res.data);
  };
  useMemo(() => {
    console.log("use api");
    getCurrentWeather(coordonnees);
  }, [coordonnees]);
  console.warn("essay meteo", weather);

  return (
    <div className={classes.root}>
      {weather && (
        <AppBar position="static">
          <Toolbar onclick={onClickOpen}>
            <Box>
              <Paper>
                {/** affichage icon weather */}
                <Box display="flex">
                  {icon && (
                    <Box>
                      <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                        alt="openweather"
                        style={{
                          marginLeft: "auto",
                          marginRight: "auto",
                          marginTop: "5px"
                        }}
                      />
                    </Box>
                  )}
                  {/** affichage température */}
                  <Box
                    display="grid"
                    style={{ marginLeft: "5px", marginTop: "5px" }}
                  >
                    {temperature && (
                      <>
                        <Typography variant="subtitle1" align="center">
                          {`${Math.round(weather.main.temp)} ° C`}
                        </Typography>
                        <TempComponents
                          temperature={temperature}
                          weather={weather}
                        />
                      </>
                    )}
                  </Box>
                  {/**affichage wind */}
                  {wind && (
                    <Box display="grid" style={{ marginLeft: "5px" }}>
                      <ArrowUpwardIcon
                        fontSize="large"
                        style={{
                          marginLeft: "30px",
                          marginTop: "5px",
                          transform: `rotate(${Math.round(
                            weather.wind.deg
                          )}deg)`
                        }}
                      />
                      <Typography variant="caption">{`${Math.round(
                        weather.wind.speed * 3.6
                      )} km/h | ${Math.round(
                        weather.wind.speed
                      )} m/s`}</Typography>
                    </Box>
                  )}
                </Box>
              </Paper>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
}
ToolBarWeather.propTypes = {
  icon: PropTypes.bool.isRequired,
  temperature: PropTypes.bool.isRequired,
  wind: PropTypes.bool.isRequired
};
