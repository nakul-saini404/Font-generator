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
      px: 2,
    };
  };

  return (
    <Box
      sx={{
        bgcolor: "#F1F5F9",
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
      <Button sx={getButtonStyle("/big")} onClick={() => navigate("/big")}>
        ᗷᏆǤ
      </Button>
      <Button sx={getButtonStyle("/bold")} onClick={() => navigate("/bold")}>
        𝐁𝐨𝐥𝐝
      </Button>
      <Button sx={getButtonStyle("/cool")} onClick={() => navigate("/cool")}>
        匚ㄖㄖㄥ
      </Button>
      <Button sx={getButtonStyle("/creepy")} onClick={() => navigate("/creepy")}>
        🅲ᖇ𝒆𝒆ק𝔂 
      </Button>
      <Button sx={getButtonStyle("/cursed")} onClick={() => navigate("/cursed")}>
        ርሁዪነቿጋ
      </Button>
      <Button sx={getButtonStyle("/cursive")} onClick={() => navigate("/cursive")}>
        𝒞𝓊𝓇𝓈𝒾𝓋ℯ
      </Button>
      <Button sx={getButtonStyle("/facebook")} onClick={() => navigate("/facebook")}>
       𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
      </Button>
      <Button sx={getButtonStyle("/italic")} onClick={() => navigate("/italic")}>
        𝘐𝘵𝘢𝘭𝘪𝘤
      </Button>
      <Button sx={getButtonStyle("/small")} onClick={() => navigate("/small")}>
        ꜱᴍᴀʟʟ
      </Button>
      <Button sx={getButtonStyle("/strikethrough")} onClick={() => navigate("/strikethrough")}>
        S̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶ 
      </Button>
      <Button sx={getButtonStyle("/underline")} onClick={() => navigate("/underline")}>
        U͟n͟d͟e͟r͟l͟i͟n͟e͟
      </Button>
      <Button sx={getButtonStyle("/upside-down")} onClick={() => navigate("/upside-down")}>
        uʍoꓷ ǝpᴉsdꓵ
      </Button>
      <Button sx={getButtonStyle("/weird")} onClick={() => navigate("/weird")}>
        ⏙ℇ⟟☈⟄
      </Button>
    </Box>
  );
}
