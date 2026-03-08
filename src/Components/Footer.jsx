import React from "react";
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <Box
        sx={{
          backgroundColor: "#d9e0e6",
          p: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            mb: 4,
            textAlign: "left",
            color: "black",
          }}
        >
          EXPLORE FONT GENERATORS
        </Typography>

        <Grid
          container
          spacing={3}
          alignItems="stretch"
          sx={{
            flexWrap: "wrap",
            overflow: "visible",
            justifyContent: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 4,
                p: 3,
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
              }}
            >
              <Typography variant="caption" color="#bdbdbd">
                Font Generator
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
                textAlign="center"
                sx={{ mt: 2 }}
              >
                All Fonts
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="body2" color="#bdbdbd">
                  All Fonts
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "#f8f1df",
                    color: "black",
                    textTransform: "none",
                    fontSize: "0.7rem",
                    "&:hover": {
                      backgroundColor: "#e8e0cf",
                    },
                  }}
                  // onClick={() => navigate("/")}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/");
                  }}
                >
                  VIEW →
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 4,
                p: 3,
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
              }}
            >
              <Typography variant="caption" color="#bdbdbd">
                Font Generator
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
                textAlign="center"
                sx={{ mt: 2 }}
              >
                Instagram
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="body2" color="#bdbdbd">
                  Instagram Fonts
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "#f8f1df",
                    color: "black",
                    textTransform: "none",
                    fontSize: "0.7rem",
                    "&:hover": {
                      backgroundColor: "#e8e0cf",
                    },
                  }}
                  // onClick={() => navigate("/instagram")}
                   onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/instagram");
                  }}
                >
                  VIEW →
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 2 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "#fffbe8",
                color: "black",
                borderRadius: 4,
                p: 3,
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
              }}
            >
              <Typography variant="caption" color="#999">
                Font Generator
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
                textAlign="center"
                sx={{ mt: 2 }}
              >
                𝒢𝓁𝒾𝓉𝒸𝒽
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="body2" color="#999">
                  𝒢𝓁𝒾𝓉𝒸𝒽 Fonts
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    fontSize: "0.7rem",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                  // onClick={() => navigate("/glitch")}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/glitch");
                  }}
                >
                  VIEW →
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "#fffbe8",
                color: "black",
                borderRadius: 4,
                p: 3,
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
              }}
            >
              <Typography variant="caption" color="#bdbdbd">
                Font Generator
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
                textAlign="center"
                sx={{ mt: 2 }}
              >
                F𝒶𝓃𝓈𝓎
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="body2" color="#bdbdbd">
                  Fancy Fonts
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "#f8f1df",
                    color: "black",
                    textTransform: "none",
                    fontSize: "0.7rem",
                    "&:hover": {
                      backgroundColor: "#e8e0cf",
                    },
                  }}
                  // onClick={() => navigate("/fancy")}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/fancy");
                  }}
                >
                  VIEW →
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 4,
                p: 3,
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
              }}
            >
              <Typography variant="caption" color="#999">
                Font Generator
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
                textAlign="center"
                sx={{ mt: 2 }}
              >
                𝔻𝕚𝕤𝕔𝕠𝕣𝕕
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="body2" color="#999">
                  Discord Fonts
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    fontSize: "0.7rem",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                  
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/discord");
                  }}
                >
                  VIEW →
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 4,
                p: 3,
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
              }}
            >
              <Typography variant="caption" color="#999">
                Font Generator
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
                textAlign="center"
                sx={{ mt: 2,
                   "@media (max-width:500px)": {
      fontSize: "1.8rem"
    }
                 }}
              >
                Zalgo
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="body2" color="#999">
                  Zalgo Fonts
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    fontSize: "0.7rem",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                  // onClick={() => navigate("/zalgo")}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/zalgo");
                  }}
                >
                  VIEW →
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Paper
              elevation={0}
              sx={{
                backgroundColor: "black",
                color: "white",
                borderRadius: 4,
                p: 3,
                minHeight: "250px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "auto",
              }}
            >
              <Typography variant="caption" color="#999">
                Font Generator
              </Typography>
              <Typography
                variant="h3"
                fontWeight={600}
                textAlign="center"
                sx={{ mt: 2 }}
              >
                Stylish
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Typography variant="body2" color="#999">
                  Small Fonts
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    borderRadius: "50px",
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    fontSize: "0.7rem",
                    "&:hover": { backgroundColor: "#333" },
                  }}
                  // onClick={() => navigate("/stylish")}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/stylish");
                  }}
                >
                  VIEW →
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      {/* <Box
      sx={{
        backgroundColor: "black",
        color: "#f8f1df",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
      }}
      >
         <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
        }}
      >
        Fancy Font Generator ☞✺✐™
      </Typography>

        <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
        }}
      >
        Fancy Font Generator ☞✺✐™
      </Typography>
        <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
        }}
      >
        Fancy Font Generator ☞✺✐™
      </Typography>
      </Box> */}
    </>
  );
}
