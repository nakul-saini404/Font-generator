import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#fffaf0",
        p: 1.5,
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      <Button
        variant="contained"
        sx={{
          bgcolor: "black",
          color: "white",
          textTransform: "none",
          borderRadius: 8,
          "&:hover": { bgcolor: "#333" },
        }}
        onClick={() => navigate("/")}
      >
        All Fonts
      </Button>

      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "black",
          borderColor: "#ccc",
          borderRadius: 8,
          "&:hover": { bgcolor: "#f3f3f3" },
        }}
        onClick={() => navigate("/instagram")}
      >
        Instagram
      </Button>

      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "black",
          borderColor: "#ccc",
          borderRadius: 8,
          "&:hover": { bgcolor: "#f3f3f3" },
        }}
        onClick={() => navigate("/glitch")}
      >
        𝒢𝓁𝒾𝓉𝒸𝒽
      </Button>

      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "black",
          borderColor: "#ccc",
          borderRadius: 8,
          "&:hover": { bgcolor: "#f3f3f3" },
        }}
        onClick={() => navigate("/fancy")}
      >
        Fancy
      </Button>

      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "black",
          borderColor: "#ccc",
          borderRadius: 8,
          "&:hover": { bgcolor: "#f3f3f3" },
        }}
        onClick={() => navigate("/discord")}
      >
        𝔻𝕚𝕤𝕔𝕠𝕣𝕕
      </Button>

      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "black",
          borderColor: "#ccc",
          borderRadius: 8,
          "&:hover": { bgcolor: "#f3f3f3" },
        }}
        onClick={() => navigate("/zalgo")}
      >
        Zalgo
      </Button>

      <Button
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "black",
          borderColor: "#ccc",
          borderRadius: 8,
          "&:hover": { bgcolor: "#f3f3f3" },
        }}
        onClick={() => navigate("/stylish")}
      >
        Stylish
      </Button>
    </Box>
  );
}
