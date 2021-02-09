import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import "./styles.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  Box,
  InputBase,
  Paper,
  makeStyles,
  Toolbar,
  fade,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  SvgIcon
} from "@material-ui/core";
import { ReactComponent as SunRise } from "../icon/sunrise.svg";
import { ReactComponent as SunSet } from "../icon/sunset.svg";
const api = {
  key: "dccaf6aa0d20098d29d68bf74d603f83",
  url: "https://api.openweathermap.org/data/2.5/"
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 360
  },
  affichePrinc: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 420
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  button: {
    marginLeft: theme.spacing(30),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  search: {
    marginLeft: 120,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  paper: {
    marginLeft: 20,
    marginTop: 20,
    height: 60,
    width: 160
  },
  paperWind: {
    marginLeft: 20,
    marginTop: 20,
    height: 100,
    width: 160
  },
  paperSun: {
    marginLeft: 20,
    marginTop: 35,
    height: 100,
    width: 160
  },
  searchIcon: {
    marginRight: theme.spacing(),
    padding: theme.spacing(0, 0),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
export default function App() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  /*const geo = navigator.geolocation;
  geo.getCurrentPosition(function (position) {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  });
  console.warn("loc", location);*/
  const handleOnKeyPress = (e) => {
    console.log("search");
    if (e.key === "Enter") {
      fetch(
        `${api.url}weather?q=${query}&units=metric&language=fr&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.warn("essay meteo", result);
        });
    }
  };
  const hourSunset = moment.unix(weather && weather.sys.sunset).format("kk:mm");
  const hourSunrise = moment
    .unix(weather && weather.sys.sunrise)
    .format("kk:mm");
  const speedWind = weather && Math.round(weather.wind.speed * 3.6);

  return (
    <Box>
      <Container maxWidth="lg">
        <Toolbar>
          <Paper className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Rechercher une Ville"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={handleOnKeyPress}
            />
            <SearchIcon />
          </Paper>
        </Toolbar>

        {/** Météo du jour  */}
        <Box component="container-Globale-Weather">
          {weather && (
            <Box className="location-Box">
              <Typography variant="h6" gutterBottom>
                Météo du jour:
              </Typography>
              <Box className="location">
                <Card variant="outlined" className={classes.affichePrinc}>
                  <CardContent>
                    <Grid item xs={12}>
                      <Grid container spacing={3}>
                        <Grid item>
                          <Typography variant="h6" gutterBottom>
                            {`${weather.name}, ${weather.sys.country}`}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <img
                            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                            alt="openweather"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Paper className={classes.paper}>
                            <Typography variant="subtitle1" gutterBottom>
                              {`Température : ${Math.round(
                                weather.main.temp
                              )} ° C`}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              {`Ressentie: ${Math.round(
                                weather.main.feels_like
                              )} ° C`}
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Paper className={classes.paper}>
                            <Typography variant="subtitle1" gutterBottom>
                              {`Temp min: ${Math.round(
                                weather.main.temp_min
                              )} ° C`}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              {`Temp max: ${Math.round(
                                weather.main.temp_max
                              )} ° C`}
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Paper className={classes.paperWind}>
                            <Typography variant="subtitle1" gutterBottom>
                              Vent:
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              {`vitesse: ${speedWind} km/h`}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                              {`direction : ${Math.round(weather.wind.deg)}°`}
                            </Typography>
                          </Paper>
                        </Grid>
                        <Grid item>
                          <Paper className={classes.paperSun}>
                            <Grid item xs={60}>
                              <Grid container spacing={3}>
                                <Grid item>
                                  <Grid item>
                                    <SvgIcon
                                      component={SunRise}
                                      viewBox="0 0 32 32"
                                      style={{
                                        cursor: "pointer",
                                        boxSizing: "content-box",
                                        fontSize: "32px"
                                      }}
                                    />
                                  </Grid>
                                  <Grid item>
                                    <SvgIcon
                                      component={SunSet}
                                      viewBox="0 0 32 32"
                                      style={{
                                        cursor: "pointer",
                                        boxSizing: "content-box",
                                        fontSize: "32px"
                                      }}
                                    />
                                  </Grid>
                                </Grid>
                                <Grid item>
                                  <Grid item>
                                    <Typography
                                      variant="subtitle1"
                                      gutterBottom
                                    >
                                      {hourSunrise}
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Typography
                                      variant="subtitle1"
                                      gutterBottom
                                    >
                                      {hourSunset}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
              <Box className="date"></Box>
            </Box>
          )}
        </Box>
        {/*
        <Box className="weather-box">
          <Box className="temp">
            <Grid item xs={12}>
              <Grid container spacing={1}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <Typography variant="caption" justifyContent="center">
                      {weather &&
                        `Température : ${Math.round(weather.main.temp)} ° C `}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    {location && location.longitude},<br />
                    {location && location.latitude}
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>Proba + precipitation</Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    vent vitesse + orientation
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>*/}
      </Container>
    </Box>
  );
}
