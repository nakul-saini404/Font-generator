import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 To know which route is active

  // Reusable button styling
  const getButtonStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      textTransform: "none",
      borderRadius: 8,
      fontWeight: 600,
      transition: "all 0.3s ease",
      bgcolor: isActive ? "black" : "transparent",
      color: isActive ? "white" : "black",
      border: isActive ? "1px solid black" : "1px solid #ccc",
      "&:hover": {
        bgcolor: isActive ? "#222" : "#f3f3f3",
      },
    };
  };

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
      <Button sx={getButtonStyle("/")} onClick={() => navigate("/")}>
        All Fonts
      </Button>

      <Button sx={getButtonStyle("/instagram")} onClick={() => navigate("/instagram")}>
        Instagram
      </Button>

      <Button sx={getButtonStyle("/glitch")} onClick={() => navigate("/glitch")}>
        𝒢𝓁𝒾𝓉𝒸𝒽
      </Button>

      <Button sx={getButtonStyle("/fancy")} onClick={() => navigate("/fancy")}>
        Fancy
      </Button>

      <Button sx={getButtonStyle("/discord")} onClick={() => navigate("/discord")}>
        𝔻𝕚𝕤𝕔𝕠𝕣𝕕
      </Button>

      <Button sx={getButtonStyle("/zalgo")} onClick={() => navigate("/zalgo")}>
        Zalgo
      </Button>

      <Button sx={getButtonStyle("/stylish")} onClick={() => navigate("/stylish")}>
        Stylish
      </Button>
    </Box>
  );
}
