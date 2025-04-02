import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Image from "next/image";

export default function ProjectCard(props: IProjectCard) {
  const { title, summary, image, fields } = props.project;

  return (
    <Box>
      <Card elevation={0}>
        <Container sx={{ py: "1rem" }}>
          <Grid container spacing={1}>
            <Grid size={4}>
              <Box
                sx={{
                  display: "block",
                  position: "relative",
                  width: "90%",
                  height: "100px",
                  borderRadius: "5px",
                }}
              >
                <Image
                  alt="landing"
                  src={image}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                  loading="eager"
                  priority
                  unoptimized
                />
              </Box>
            </Grid>
            <Grid size={8}>
              <Typography mb={1} variant="subtitle1" fontWeight="bold">
                {title}
              </Typography>
              <Typography mb={1} variant="body1" fontWeight={200}>
                {summary}
              </Typography>
              <Box mt={2}>
                {fields.map((field, idx) => (
                  <Chip
                    key={idx}
                    size="small"
                    label={field}
                    variant="outlined"
                    sx={{ mr: 1, mb: 1 }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Card>
    </Box>
  );
}

export interface IProject {
  title: string;
  summary: string;
  image: string;
  fields: string[];
}

interface IProjectCard {
  project: IProject;
}
