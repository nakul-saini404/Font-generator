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
    <Box sx={{ p: 2, backgroundColor: "#F1F5F9", minHeight: "100vh" }}>
      
            <Typography
              variant="h2"
              fontWeight={800}
              textAlign="left"
              color="#0F172A"
              textTransform={"uppercase"}
              pb={1}
            >
Glitch Text Generator
            </Typography>
      
            <Typography
              variant="h3"
              fontWeight={800}
              textAlign="left"
              color="#0F172A"
              pb={1}
            >
              ₲Ⱡł₮₵Ⱨ ₮ɆӾ₮
            </Typography>
      
            <Typography
              variant="subtitle1"
              textAlign="left"
              color="#0F172A"
              pb={1}
            >
              Use our glitch text generator to design creepy text for your social media accounts. Copy and paste these cursed fonts to add some weirdness to your profiles!
            </Typography>


          <TextField
       fullWidth
       value={text}
       onChange={(e) => setText(e.target.value)}
       variant="outlined"
       placeholder="Type something..."
       sx={{
         margin: "0 auto",
         mb: 3,
         "& .MuiOutlinedInput-root": {
           borderRadius: "25px",
           backgroundColor: "#fff", // background only inside border
           "& fieldset": {
             borderColor: "black",
           },
           "&:hover fieldset": {
             borderColor: "black",
           },
           "&.Mui-focused fieldset": {
             borderColor: "black",
           },
         },
         "& input": {
           p: 2,
         },
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
                  backgroundColor: "#FFFFFF",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "1.2rem", wordWrap: "break-word" ,overflowWrap: "break-word",whiteSpace: "pre-wrap"}}>
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
