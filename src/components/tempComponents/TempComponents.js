import React from "react";
import PropTypes from "prop-types";

import { Box, Typography } from "@material-ui/core";

export default function TempComponents(props) {
  const { temperature, weather } = props;
  return (
    <Box display="grid">
      {temperature && temperature === "tMaxMin" && (
        <Box>
          <Typography variant="caption">
            {`${Math.round(weather.main.temp_max)}°C | ${Math.round(
              weather.main.temp_min
            )}°C`}
          </Typography>
        </Box>
      )}
      {temperature && temperature === "ressenti" && (
        <>
          <Box>
            <Typography variant="caption">
              {`${Math.round(weather.main.temp_max)}°C | ${Math.round(
                weather.main.temp_min
              )}°C`}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">
              {`ressenti : ${Math.round(weather.main.feels_like)}°C`}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
}

TempComponents.propTypes = {
  temperature: PropTypes.oneOf(["tMaxMin", "ressenti"]).isRequired
};
