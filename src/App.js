import React, { useState } from "react";
import "./styles.css";
import { Container } from "@material-ui/core";
//import des components
import ToolBarWeather from "./components/ToolBarWeather";
import DialogWeather from "./components/DialogWeather";

//création de la const pour recupérer la clé de l'api
/*;*/

export default function App() {
  const [open, setOpen] = React.useState(false);
  const [coordonnees, setCoordonnees] = useState([47.5833, 7.1667]);

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
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div id="geocoder-container" />
      <Container maxWidth="lg">
        {/** ------------------------------------------------- toolBox --------------------------------------------------------------------- */}
        <ToolBarWeather
          coordonnees={coordonnees}
          onClickOpen={handleClickOpen}
          icon
          temperature
        />
        {/** ------------------------------------------------- listItem -------------------------------------------------------------------- */}
        {/** ------------------------------------------------- dialBox --------------------------------------------------------------------- */}
        <DialogWeather
          coordonnees={coordonnees}
          open={open}
          onClickClose={handleClickClose}
        />
      </Container>
    </div>
  );
}
