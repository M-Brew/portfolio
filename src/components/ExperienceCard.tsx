import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

export default function ExperienceCard() {
  return (
    <Box
      sx={{
        opacity: 1,
        transition: "all .2s ease-in-out",
        "&:hover": {
          cursor: "pointer",
          scale: 1.02,
        },
      }}
    >
      <Card variant="outlined">
        <Container sx={{ py: "1rem" }}>
          <Grid container spacing={1}>
            <Grid size={3}>
              <Typography fontSize={12} sx={{ opacity: 0.5 }}>
                2024 - PRESENT
              </Typography>
            </Grid>
            <Grid size={9}>
              <Typography mb={1} variant="subtitle1" fontWeight="bold">
                Full Stack Engineer
              </Typography>
              <Typography mb={1} variant="body1" fontWeight={200}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                sunt mollitia sapiente veniam aperiam dicta ratione hic dolor?
                Amet, hic.
              </Typography>
              <Box mt={2}>
                <Chip
                  size="small"
                  label="NodeJS"
                  variant="outlined"
                  sx={{ mr: 1 }}
                />
                <Chip
                  size="small"
                  label="React"
                  variant="outlined"
                  sx={{ mr: 1 }}
                />
                <Chip
                  size="small"
                  label="TypeScript"
                  variant="outlined"
                  sx={{ mr: 1 }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Card>
    </Box>
  );
}
