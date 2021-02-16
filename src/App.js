import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  Paper,
  makeStyles,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  SvgIcon,
  GridList,
  GridListTile,
  Divider
} from "@material-ui/core";

//import des components
import CurrentWeather from "./components/CurrentWeather";

//création de la const pour recupérer la clé de l'api
/*const api = {
  key: "dccaf6aa0d20098d29d68bf74d603f83",
  url: "https://api.openweathermap.org/data/2.5/"
};*/
const api = {
  key: "92cde31c4809b3c22def790b4d19d3ec",
  url: "https://api.openweathermap.org/data/2.5/"
};

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forCast, setForCast] = useState(null);
  const [coordonnees, setCoordonnees] = useState([]);
  let lat = 48.58723;
  let lon = 7.66708;

  // fetch vers api openweather
  const getCurrentWeather = async (lat, lon) => {
    const res = await axios.get(
      `${api.url}weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${api.key}`
    );
    setWeather(res);
  };
  useEffect(() => {
    getCurrentWeather(lat, lon);
  }, [lat, lon]);
  console.warn("essay meteo", weather);
  /*useEffect(() => {
    console.log("useEffect api forCast");
      fetch(
        `${api.url}onecall?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setForCast(result);
          console.warn("essay forcast", result);
        });
  }, [lat, lon]);*/
  return (
    <div>
      <div id="geocoder-container" />
      <Container maxWidth="lg">
        {/** ------------------------------------------------- toolBox ----------------------------------------------------------------------- */}
        {/** ------------------------------------------------- listItem ---------------------------------------------------------------------- */}
        {/** ------------------------------------------------- dialBox ----------------------------------------------------------------------- */}

        {/** -------------------------------------- Météo du jour ------------------------------------------------------ */}

        {/** -------------------------------------- Météo du lendemain ------------------------------------------------- */}

        {/** -------------------------------------- Météo sur 7 jours -------------------------------------------------- */}
        {/** ------------------------------------------------- endDialBox -------------------------------------------------------------------- */}
      </Container>
    </div>
  );
}
