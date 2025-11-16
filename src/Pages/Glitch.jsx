import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// 20+ Glitch styles
const glitchStyles = [
  (t) => t.split("").map((c) => c + "̷͝").join(""),
  (t) => t.split("").map((c) => c + "̸̀͠").join(""),
  (t) => t.split("").map((c) => c + "̷̡̛̕").join(""),
  (t) => t.split("").map((c) => c + "͓̽").join(""),
  (t) => t.split("").map((c) => "̗" + c).join(""),
  (t) => t.split("").map((c) => "̴" + c + "̶").join(""),
  (t) => t.split("").map((c) => c + "̷̸̹̜͔̖̞").join(""),
  (t) => t.split("").map((c) => c + "̵̈́͘͘").join(""),
  (t) => t.split("").map((c) => c + "̗̤̪̟").join(""),
  (t) => t.split("").map((c) => c + "̵̲͍̈́͝").join(""),
  (t) => t.split("").map((c) => c + "͓͔͜ͅ").join(""),
  (t) => t.split("").map((c) => c + "̸̴̹͍̩̗").join(""),
  (t) => t.split("").map((c) => "̻̞͉" + c).join(""),
  (t) => t.split("").map((c) => "̷" + c + "̷").join(""),
  (t) => t.split("").map((c) => c + "͘").join(""),
  (t) => t.split("").map((c) => c + "̷̷̷̷̷̷").join(""),
  (t) => t.split("").map((c) => c + "͓͔̻͚̳̥̽̾").join(""),
  (t) => t.split("").map((c) => c + "̷̫̝̥̽").join(""),
  (t) => t.split("").map((c) => c + "̶̶̶̶̶̶̴̴̴̷̷̷").join(""),
  (t) => t.split("").map((c) => c + "̸̸̸̸̸̸̸̸̸̸͍͕̺̲͜").join(""),
];

const glitchNames = [
  "Glitch Light",
  "Glitch Medium",
  "Glitch Heavy",
  "Upper Glitch",
  "Lower Glitch",
  "Full Surround",
  "Intense Corruption",
  "Broken Text",
  "Drip Glitch",
  "Electric Shock",
  "Matrix Glitch",
  "Noise Static",
  "Reverse Corrupt",
  "Side Flicker",
  "Ghost Fade",
  "Destroyed",
  "Horror Glitch",
  "Dark Corrupt",
  "Ultra Chaos",
  "Max Zalgo",
];

export default function GlitchFonts() {
  const [text, setText] = useState("");

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    alert("Copied Glitch Text!");
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#fffaf0", minHeight: "100vh" }}>
      <Typography variant="h3" fontWeight={700} pb={2}>
        Glitch Text Generator
      </Typography>
{/* 
      <TextField
        fullWidth
        placeholder="Type something..."
        value={text}
        
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderRadius: "20px" },
          },
        }}
      /> */}

      <TextField
              fullWidth
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="outlined"
              color="black"
              focused
              placeholder="Type something..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                    borderRadius: "25px", // Default border
                  },
                  "&:hover fieldset": {
                    borderColor: "black", // On hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black", // When focused
                  },
                },
                margin: "0 auto",
                backgroundColor: "#fff",
                //   borderRadius: 4,
                //   border: "1px solid black",
                input: { p: 2 },
              }}
            />

      <Grid container spacing={2} flexDirection="column">
        {glitchStyles.map((styleFn, i) => {
          const glitchText = text ? styleFn(text) : styleFn("Glitch Text");

          return (
            <Grid size={{xs:12}} key={i}>
              <Paper
                sx={{
                   p: 2,
                  backgroundColor: "#fff8f0",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "1.2rem", wordWrap: "break-word" }}>
                    {glitchText}
                  </Typography>
                  <Typography sx={{ fontSize: ".9rem", color: "gray" }}>
                    {glitchNames[i]}
                  </Typography>
                </Box>

                <IconButton onClick={() => handleCopy(glitchText)}>
                  <ContentCopyIcon />
                </IconButton>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
