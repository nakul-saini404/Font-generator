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

// Zalgo characters (diacritics)
const zalgoUp = [
  "\u030d",
  "\u030e",
  "\u0304",
  "\u0305",
  "\u033f",
  "\u0311",
  "\u0306",
  "\u0310",
  "\u0352",
  "\u0357",
  "\u0351",
  "\u0307",
  "\u0308",
  "\u030a",
];

const zalgoMid = [
  "\u0315",
  "\u031b",
  "\u0340",
  "\u0341",
  "\u0358",
  "\u0321",
  "\u0322",
  "\u0327",
  "\u0328",
  "\u0334",
  "\u0335",
  "\u0336",
];

const zalgoDown = [
  "\u0316",
  "\u0317",
  "\u0318",
  "\u0319",
  "\u031c",
  "\u031d",
  "\u031e",
  "\u031f",
  "\u0320",
  "\u0324",
  "\u0325",
  "\u0326",
  "\u0330",
  "\u0331",
  "\u0332",
];

// Generate Zalgo text
const generateZalgo = (text, level = "medium") => {
  const levels = {
    level_1: 2,
    level_2: 4,
    level_3: 6,
    level_4: 8,
    level_5: 10,
    level_6: 14,
    level_7: 16,
    level_8: 18,
    level_9: 22,
    level_10: 25,
    level_11: 27,
    level_12: 30,
  };

  const count = levels[level] || 12;

  return text
    .split("")
    .map((ch) => {
      if (ch === " ") return ch;

      let newChar = ch;

      for (let i = 0; i < count; i++) {
        newChar += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
        newChar += zalgoMid[Math.floor(Math.random() * zalgoMid.length)];
        newChar += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
      }

      return newChar;
    })
    .join("");
};

export default function Zalgo() {
  const [text, setText] = useState("");
  const levels = ["level_1", "level_2", "level_3", "level_4", "level_5", "level_6", "level_7", "level_8", "level_9", "level_10", "level_11", "level_12"];

  const handleCopy = (txt) => {
    navigator.clipboard.writeText(txt);
    alert("Cursed text copied!");
  };

  return (
    <Box sx={{ p: 4, minHeight: "100vh", backgroundColor: "#fffaf0" }}>
      <Typography variant="h4" fontWeight={700} pb={3}>
        Cursed (Zalgo) Text Generator
      </Typography>

      <TextField
        fullWidth
        placeholder="Enter your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
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
          marginTop: 2,
            marginBottom: 3,
        }}
      />

      <Grid container spacing={2}>
        {levels.map((level, i) => {
          const output = generateZalgo(text, level);

          return (
            <Grid size={{ xs: 12 }} key={i}>
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
                  <Typography sx={{ fontSize: "1.3rem", pb: 1 }}>
                    {output || "Type something..."}
                  </Typography>
                  <Typography color="gray">
                    {level.charAt(0).toUpperCase() + level.slice(1)} 
                  </Typography>
                </Box>

                <IconButton onClick={() => handleCopy(output)}>
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
