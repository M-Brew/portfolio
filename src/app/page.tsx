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

import ExperienceCard, { IExperience } from "@/components/ExperienceCard";
import ProjectCard, { IProject } from "@/components/ProjectCard";

const workExperience: IExperience[] = [
  {
    startYear: "2024",
    role: "Software Engineer",
    roleSummary: "",
    company: "Turing",
    fields: ["ML", "Python", "LLM", "NodeJS", "ReactJS", "JavaScript"],
  },
  {
    startYear: "2023",
    endYear: "2024",
    role: "Full Stack Engineer",
    roleSummary:
      "MaxSold connects people or businesses looking to sell off mostly household items, due to relocation or clearing an estate, with interested buyers. I worked on a web application where users are shown auctions happening in their current or selected vicinity and are able to place bids on auction items.",
    company: "MaxSold",
    fields: ["NodeJS", "NextJS", "UI/UX", "CI/CD", "GCP"],
  },
  {
    startYear: "2022",
    endYear: "2023",
    role: "Full Stack Engineer",
    roleSummary:
      "OOTI is a management software for architectural firms. Worked with a team of developers on their SAAS based enterprise resource planning software. Tasks included developing the OOTI project management dashboard and associated modules, providing comprehensive features for optimized architectural projects working on both the frontend and the backend of the system.",
    company: "OOTI",
    fields: ["NodeJS", "ReactJS", "Typescript", "Figma", "UI/UX"],
  },
  {
    startYear: "2020",
    endYear: "2022",
    role: "Full Stack Engineer",
    roleSummary:
      "Worked on a small team of developers with the task of creating  an application for property and room advertisement and rental. Tasks performed included creating sketches, wireframes and mockups, implementing frontend solutions using React, creating RESTful APIs along with unit tests and implementing search engine optimization techniques.",
    company: "Best Adapted Company Limited",
    fields: [
      "NodeJS",
      "ReactJS",
      "Typescript",
      "SEO",
      "UI/UX",
      "REST API",
      "Unit Testing",
    ],
  },
  {
    startYear: "2018",
    endYear: "2020",
    role: "Full Stack Engineer",
    roleSummary:
      "I was part of a software development team that regularly worked on enterprise scale applications mostly with ReactJS on the frontend and NodeJS on the backend.",
    company: "Fundi Hub Company Limited",
    fields: ["NodeJS", "ReactJS", "Javascript", "DevOps", "Flutter", "Android"],
  },
];

const projects: IProject[] = [
  {
    title: "Art Gallery Website",
    summary:
      "ekowbrew.com is an art gallery website that showcases the art pieces of Ekow Brew, a digital artists. It also includes an e-commerce section where users can buy the art pieces.",
    image: "/ekowbrew-landing-page.png",
    fields: ["E-Commerce", "NextJS", "Express", "AWS"],
  },
];

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
                      I am a software engineer with years of experience working
                      in various sectors of the software development process. I have
                      experience working on the frontend, backend and the
                      operations phases of software development.
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1" fontWeight={200}>
                      I have experience working on small teams with start-ups as
                      well as on large development teams with established
                      companies improving or adding features to an existing
                      codebase. I am comfortable working in either setting but
                      my preference would be building projects from the ground
                      up, going through the entire system design process,
                      identifying the most efficient stack, constructing
                      wireframes and bringing it all to fruition.
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1" fontWeight={200}>
                      I have a strong interest in computer engineering as well.
                      Working with microcontrollers and microchips although I am
                      yet to pursue that professionally. This could be a course
                      for the future, we&apos;ll see. I have a wide range of
                      interests and I&apos;m very willing to jump into new, interesting
                      and challenging fields because why not.
                    </Typography>
                  </Grid>
                  <Grid size={12}>
                    <Typography variant="body1" fontWeight={200}>
                      As hobbies, I am into physical fitness and reading fantasy
                      novels. I also dabble in video games and video game
                      development from time to time.
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
                  {workExperience.map((exp, idx) => (
                    <Grid key={idx} size={12}>
                      <ExperienceCard experience={exp} />
                    </Grid>
                  ))}
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
                  {projects.map((project, idx) => (
                    <Grid key={idx} size={12}>
                      <ProjectCard project={project} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
