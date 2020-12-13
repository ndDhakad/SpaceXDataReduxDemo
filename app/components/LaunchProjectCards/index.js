/**
 *
 * LaunchProjectCards
 *
 */

import React, { memo } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function LaunchProjectCards({project}) {
  return (
      <Card style={{height:450}}>
        <CardActionArea>
          <CardMedia
              component="img"
              alt={project.mission_name}
              height="240"
              image={project.links.mission_patch}
              title={project.mission_name}
              style={{contain: "size"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.mission_name} #{project.flight_number}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Mission Ids:</b> {project.mission_id.join(',')}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Launch Year:</b> {project.launch_year}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Successful Launch:</b> {project.launch_success.toString()}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Successful Landing:</b> {project.launch_success}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}

LaunchProjectCards.propTypes = {};

export default memo(LaunchProjectCards);
