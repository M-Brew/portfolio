"use client";

import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ px: "3rem" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ position: matches ? "fixed" : "static" }}>
            <Container
              sx={{
                pt: "5rem",
                position: "relative",
                height: { xs: "auto", md: "100vh" },
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "60%", md: "40%" } }}>
                <Box>
                  <Typography variant="h4">Michael Brew</Typography>
                  <Typography variant="subtitle1" fontWeight="bold" mb={3}>
                    Full Stack / DevOps Engineer
                  </Typography>
                  <Typography variant="body1" fontWeight={200}>
                    I am a full stack web application and DevOps engineer
                    developer very proficient with the MERN (MongoDB, Express,
                    React and Node) stack for web development.
                  </Typography>
                </Box>
                <Box mt={5} sx={{ display: matches ? "block" : "none" }}>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <HorizontalRuleIcon sx={{ mr: 1 }} />
                    <Typography>About Me</Typography>
                  </Box>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <HorizontalRuleIcon sx={{ mr: 1 }} />
                    <Typography>Work Experience</Typography>
                  </Box>
                  <Box sx={{ display: "flex", mb: 1 }}>
                    <HorizontalRuleIcon sx={{ mr: 1 }} />
                    <Typography>Projects</Typography>
                  </Box>
                </Box>
                <Box
                  mt={5}
                  sx={matches ? { position: "absolute", bottom: "5rem" } : {}}
                >
                  <GitHubIcon fontSize="medium" sx={{ mr: 1.2 }} />
                  <LinkedInIcon fontSize="medium" sx={{ mr: 1.2 }} />
                  <InstagramIcon fontSize="medium" sx={{ mr: 1.2 }} />
                  <XIcon fontSize="medium" />
                </Box>
              </Box>
            </Container>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Container sx={{ py: "5rem" }}>
              {/* About Me */}
              <Box sx={{ mb: "5rem" }}>
                <Grid container spacing={3}>
                  <Grid size={12}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      ABOUT ME
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1" fontWeight={200}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, debitis! Illum, aut mollitia hic recusandae dolore,
                      porro rem autem blanditiis voluptatem dolorem minus ab
                      temporibus suscipit laboriosam dicta doloribus. Impedit
                      minus quam praesentium natus reprehenderit dolorum?
                      Laboriosam harum unde quibusdam!
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1" fontWeight={200}>
                      Ad, debitis! Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Illum, aut mollitia hic recusandae
                      dolore, porro rem autem blanditiis voluptatem dolorem
                      minus ab temporibus suscipit laboriosam dicta doloribus.
                      Impedit minus quam praesentium natus reprehenderit
                      dolorum? Laboriosam harum unde quibusdam!
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1" fontWeight={200}>
                      Laboriosam harum unde quibusdam!Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Ad, debitis! Illum, aut
                      mollitia hic recusandae dolore, porro rem autem blanditiis
                      voluptatem dolorem minus ab temporibus suscipit laboriosam
                      dicta doloribus. Impedit minus quam praesentium natus
                      reprehenderit dolorum?
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1" fontWeight={200}>
                      Illum, aut mollitia hic recusandae dolore, porro rem autem
                      blanditiis voluptatem dolorem minus ab temporibus suscipit
                      laboriosam dicta doloribus.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              {/* Work Experience */}
              <Box sx={{ mb: "5rem" }}>
                <Grid container spacing={2}>
                  <Grid size={12}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      WORK EXPERIENCE
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <ExperienceCard />
                  </Grid>
                  <Grid size={12}>
                    <ExperienceCard />
                  </Grid>
                  <Grid size={12}>
                    <ExperienceCard />
                  </Grid>
                  <Grid size={12}>
                    <ExperienceCard />
                  </Grid>
                </Grid>
              </Box>
              {/* Projects */}
              <Box>
                <Grid container spacing={2}>
                  <Grid size={12}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      PROJECTS
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <ProjectCard />
                  </Grid>
                  <Grid size={12}>
                    <ProjectCard />
                  </Grid>
                  <Grid size={12}>
                    <ProjectCard />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
