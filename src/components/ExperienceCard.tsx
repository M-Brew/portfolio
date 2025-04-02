import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ExperienceCard(props: IExperienceCard) {
  const { startYear, endYear, role, roleSummary, company, fields } =
    props.experience;

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
                {startYear} - {endYear ?? "PRESENT"}
              </Typography>
            </Grid>
            <Grid size={9}>
              <Typography mb={1} variant="subtitle1" fontWeight="bold">
                {role}{" "}
                <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                  <FiberManualRecordIcon
                    fontSize="small"
                    sx={{ fontSize: "5px" }}
                  />
                </span>{" "}
                {company}
              </Typography>
              <Typography mb={1} variant="body1" fontWeight={200}>
                {roleSummary}
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

export interface IExperience {
  startYear: string;
  endYear?: string;
  role: string;
  roleSummary: string;
  company: string;
  fields: string[];
}

interface IExperienceCard {
  experience: IExperience;
}
