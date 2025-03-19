import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Image from "next/image";

export default function ProjectCard() {
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
                  src={
                    "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=2929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
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
                Blog App
              </Typography>
              <Typography mb={1} variant="body1" fontWeight={200}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                sunt mollitia sapiente veniam aperiam dicta ratione hic dolor?
              </Typography>
              <Box mt={2}>
                <Chip
                  size="small"
                  label="CRUD"
                  variant="outlined"
                  sx={{ mr: 1 }}
                />
                <Chip
                  size="small"
                  label="Auth"
                  variant="outlined"
                  sx={{ mr: 1 }}
                />
                <Chip
                  size="small"
                  label="Database"
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
