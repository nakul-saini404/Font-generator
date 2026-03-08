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

const bubbleMap = {
  A: "Ⓐ",
  B: "Ⓑ",
  C: "Ⓒ",
  D: "Ⓓ",
  E: "Ⓔ",
  F: "Ⓕ",
  G: "Ⓖ",
  H: "Ⓗ",
  I: "Ⓘ",
  J: "Ⓙ",
  K: "Ⓚ",
  L: "Ⓛ",
  M: "Ⓜ",
  N: "Ⓝ",
  O: "Ⓞ",
  P: "Ⓟ",
  Q: "Ⓠ",
  R: "Ⓡ",
  S: "Ⓢ",
  T: "Ⓣ",
  U: "Ⓤ",
  V: "Ⓥ",
  W: "Ⓦ",
  X: "Ⓧ",
  Y: "Ⓨ",
  Z: "Ⓩ",
};

const squareMap = {
  A: "🄰",
  B: "🄱",
  C: "🄲",
  D: "🄳",
  E: "🄴",
  F: "🄵",
  G: "🄶",
  H: "🄷",
  I: "🄸",
  J: "🄹",
  K: "🄺",
  L: "🄻",
  M: "🄼",
  N: "🄽",
  O: "🄾",
  P: "🄿",
  Q: "🅀",
  R: "🅁",
  S: "🅂",
  T: "🅃",
  U: "🅄",
  V: "🅅",
  W: "🅆",
  X: "🅇",
  Y: "🅈",
  Z: "🅉",
};

const mapFont = (text, map) =>
  text
    .split("")
    .map((c) => map[c] || c)
    .join("");

const reverseText = (text) => text.split("").reverse().join("");

const spacedText = (text) => text.split("").join(" ");

const spooky = (text) =>
  text
    .split("")
    .map((c) => c + "☠")
    .join("");

const glitch = (text) =>
  text
    .split("")
    .map((c) => `̴${c}̷`)
    .join("");

const underline = (text) =>
  text
    .split("")
    .map((c) => c + "̲")
    .join("");

const strike = (text) =>
  text
    .split("")
    .map((c) => c + "̶")
    .join("");

const doubleText = (text) => text + " " + text;

const FONT_LIST = [
  { name: "Bubble", fn: (t) => mapFont(t.toUpperCase(), bubbleMap) },
  { name: "Square", fn: (t) => mapFont(t.toUpperCase(), squareMap) },

  { name: "Zalgo / Corrupt", fn: zalgo },
  { name: "Glitch", fn: glitch },
  { name: "Glitch Gothic", fn: (t) => zalgo(unicodeFont(t, 0x1d504, 0x1d51e)) },

  { name: "Spooky Skull", fn: spooky },
  { name: "Underline Curse", fn: underline },
  { name: "Strike Curse", fn: strike },

  { name: "Reversed", fn: reverseText },
  { name: "Spaced Out", fn: spacedText },
  { name: "Echo Double", fn: doubleText },

  { name: "Uppercase Curse", fn: (t) => t.toUpperCase() },
  { name: "Lowercase Curse", fn: (t) => t.toLowerCase() },

  { name: "Mirror Curse", fn: (t) => reverseText(t.toUpperCase()) },
  { name: "Random Zalgo", fn: (t) => zalgo(reverseText(t)) },

  {
    name: "Haunted Script",
    fn: (t) => unicodeFont(t, 0x1d49c, 0x1d4b6) + " ☾",
  },
  { name: "Demonic", fn: (t) => t.split("").join("͠") },
  { name: "Witchy", fn: (t) => t.split("").join("✧") },
  { name: "Dark Aura", fn: (t) => t.split("").join("☾") },
  { name: "Ransom", fn: (t) => unicodeFont(t, 0x1d504, 0x1d51e) },
  { name: "Bold", fn: (t) => unicodeFont(t, 0x1d400, 0x1d41a) },
  { name: "Italic", fn: (t) => unicodeFont(t, 0x1d434, 0x1d44e) },
  { name: "Bold Italic", fn: (t) => unicodeFont(t, 0x1d468, 0x1d482) },
  { name: "Script", fn: (t) => unicodeFont(t, 0x1d49c, 0x1d4b6) },
  { name: "Double Struck", fn: (t) => unicodeFont(t, 0x1d538, 0x1d552) },
  { name: "Sans", fn: (t) => unicodeFont(t, 0x1d5a0, 0x1d5ba) },
  { name: "Sans Bold", fn: (t) => unicodeFont(t, 0x1d5d4, 0x1d5ee) },
  { name: "Monospace", fn: (t) => unicodeFont(t, 0x1d670, 0x1d68a) },
];

export default function cursedFonts() {
  const [text, setText] = useState("");

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    alert("Copied Cursed Text!");
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#F1F5F9", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        fontWeight={700}
        textAlign="left"
        color="text.primary"
        textTransform={"uppercase"}
        pb={1}
      >
        Cursed Text Generator
      </Typography>

      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
        ርሁዪነቿጋ ፕቿሸፕ
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our cursed text generator to design creepy text for your social
        media accounts. Copy and paste these glitched fonts to add some
        weirdness to your profiles!
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
        {FONT_LIST.map((font, i) => {
          const output = font.fn(text || font.name);

          return (
            <Grid size={{ xs: 12 }} key={i}>
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{ fontSize: "1.2rem", wordWrap: "break-word" }}
                  >
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
