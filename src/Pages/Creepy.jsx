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

const unicodeFont = (text, upperStart, lowerStart) =>
  text
    .split("")
    .map((c) => {
      if (c >= "A" && c <= "Z")
        return String.fromCodePoint(upperStart + c.charCodeAt(0) - 65);
      if (c >= "a" && c <= "z")
        return String.fromCodePoint(lowerStart + c.charCodeAt(0) - 97);
      return c;
    })
    .join("");

const zalgo = (text) =>
  text
    .split("")
    .map((c) => c + "̷̸̴͓͔̤̰̞͍̘̼̥͚͜ͅ")
    .join("");

const squareMap = {
  A: "🄰", B: "🄱", C: "🄲", D: "🄳", E: "🄴",
  F: "🄵", G: "🄶", H: "🄷", I: "🄸", J: "🄹",
  K: "🄺", L: "🄻", M: "🄼", N: "🄽", O: "🄾",
  P: "🄿", Q: "🅀", R: "🅁", S: "🅂", T: "🅃",
  U: "🅄", V: "🅅", W: "🅆", X: "🅇", Y: "🅈", Z: "🅉",
};

const mapFont = (text, map) =>
  text.split("").map((c) => map[c] || c).join("");


const FONT_LIST = [
  { name: "Ransom", fn: (t) => unicodeFont(t, 0x1D504, 0x1D51E) },
  { name: "Dracula", fn: (t) => unicodeFont(t, 0x1D504, 0x1D51E) },
  { name: "Bold", fn: (t) => unicodeFont(t, 0x1D400, 0x1D41A) },
  { name: "Italic", fn: (t) => unicodeFont(t, 0x1D434, 0x1D44E) },
  { name: "Bold Italic", fn: (t) => unicodeFont(t, 0x1D468, 0x1D482) },
  { name: "Script", fn: (t) => unicodeFont(t, 0x1D49C, 0x1D4B6) },
  { name: "Double Struck", fn: (t) => unicodeFont(t, 0x1D538, 0x1D552) },
  { name: "Sans", fn: (t) => unicodeFont(t, 0x1D5A0, 0x1D5BA) },
  { name: "Sans Bold", fn: (t) => unicodeFont(t, 0x1D5D4, 0x1D5EE) },
  { name: "Monospace", fn: (t) => unicodeFont(t, 0x1D670, 0x1D68A) },
  { name: "Square", fn: (t) => mapFont(t.toUpperCase(), squareMap) },
  { name: "Zalgo / Corrupt", fn: zalgo },
  {
    name: "Glitch Gothic",
    fn: (t) => zalgo(unicodeFont(t, 0x1D504, 0x1D51E)),
  },
];

export default function creepyFonts() {
  const [text, setText] = useState("");

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    alert("Copied Creepy Text!");
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#fffaf0", minHeight: "100vh" }}>
      <Typography
              variant="h3"
              fontWeight={700}
              textAlign="left"
              color="text.primary"
              textTransform={"uppercase"}
              pb={1}
            >
              Creepy Text Generator
            </Typography>
      
            <Typography
              variant="h5"
              fontWeight={700}
              textAlign="left"
              color="text.primary"
              pb={1}
            >
              🅲ᖇ𝒆𝒆ק𝔂 т𝐄χｔ
            </Typography>
      
            <Typography
              variant="subtitle1"
              color="text.secondary"
              textAlign="left"
              pb={1}
            >
              Use our creepy text generator to design glitch text for your social media accounts. Copy and paste these cursed fonts to add some weirdness to your profiles!

            </Typography>


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
          marginTop: 2,
          marginBottom: 3,
        }}
            />

      <Grid container spacing={2} flexDirection="column">
         {FONT_LIST.map((font, i) => {
          const output = font.fn(text || font.name);

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
                    {output}
                  </Typography>
                  <Typography sx={{ fontSize: ".9rem", color: "gray" }}>
                    {font.name}
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
