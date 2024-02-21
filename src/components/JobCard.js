import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";

export default function JobCard({ job, onJobClick }) {
  const jobSkills = job.skills.slice(0, 4);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/vinguyen") {
      navigate(`/job/${job.id}`);
    } else {
      onJobClick();
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card onClick={handleClick} sx={{ maxWidth: 345, width: "100%" }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {job.title}
            </Typography>
            <Divider />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {jobSkills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  variant="outlined"
                  style={{ margin: "5px" }}
                />
              ))}
            </div>
            {job.skills.length > 4 && (
              <Typography variant="body2" color="text.secondary">
                {"..."}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary">
              {job.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CardActions>
            <Button size="small" color="primary" onClick={handleClick}>
              Learn More
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
