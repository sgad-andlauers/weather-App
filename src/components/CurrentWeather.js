import React from "react";
import moment from "moment";

import {
  Box,
  Paper,
  makeStyles,
  Card,
  CardContent,
  Typography,
  SvgIcon
} from "@material-ui/core";
import { ReactComponent as SunRise } from "../../icon/sunrise.svg";
import { ReactComponent as SunSet } from "../../icon/sunset.svg";

const useStyles = makeStyles((theme) => ({
  affichePrinc: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 420
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
  }
}));

export default function CurrentWeather(props) {
  const classes = useStyles();
  const { weather } = props;

  return (
    <Box component="container-Globale-Weather">
      {weather && (
        <Box className="location-Box">
          <Card variant="outlined" className={classes.affichePrinc}>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box component="div">
                  <Typography variant="h6" gutterBottom>
                    {weather.name}
                  </Typography>
                </Box>
                <Box component="div">
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="openweather"
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Paper className={classes.paper}>
                  <Typography variant="subtitle1" gutterBottom>
                    {`Température : ${Math.round(weather.main.temp)} ° C`}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {`Ressentie: ${Math.round(weather.main.feels_like)} ° C`}
                  </Typography>
                </Paper>

                <Paper className={classes.paper}>
                  <Typography variant="subtitle1" gutterBottom>
                    {`Temp min: ${Math.round(weather.main.temp_min)} ° C`}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {`Temp max: ${Math.round(weather.main.temp_max)} ° C`}
                  </Typography>
                </Paper>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Paper className={classes.paperWind}>
                  <Typography variant="subtitle1" gutterBottom>
                    Vent:
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {`vitesse: ${Math.round(weather.wind.speed * 3.6)} km/h`}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {`direction : ${Math.round(weather.wind.deg)}°`}
                  </Typography>
                </Paper>

                <Paper className={classes.paperSun}>
                  <Box>
                    <SvgIcon
                      component={SunRise}
                      viewBox="0 0 32 32"
                      style={{
                        cursor: "pointer",
                        boxSizing: "content-box",
                        fontSize: "32px"
                      }}
                    />
                    <Typography variant="button text" gutterBottom>
                      {` ${moment.unix(weather.sys.sunrise).format("kk:mm")}`}
                    </Typography>
                  </Box>
                  <Box>
                    <SvgIcon
                      component={SunSet}
                      viewBox="0 0 32 32"
                      style={{
                        cursor: "pointer",
                        boxSizing: "content-box",
                        fontSize: "32px"
                      }}
                    />
                    <Typography variant="button text" gutterBottom>
                      {` ${moment.unix(weather.sys.sunset).format("kk:mm")}`}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}
