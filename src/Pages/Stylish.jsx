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

// =============================
// 🔥 BASE UNICODE FONT STYLES
// =============================
const normalLow = "abcdefghijklmnopqrstuvwxyz";
const normalUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// 1) Bubble Font
const transformBubble = (str) => {
  const bubbleLow = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ".split("");
  const bubbleUp = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓨⓩ".split("");

  return str
    .split("")
    .map((c) =>
      normalLow.includes(c)
        ? bubbleLow[normalLow.indexOf(c)]
        : normalUp.includes(c)
        ? bubbleUp[normalUp.indexOf(c)]
        : c
    )
    .join("");
};

// 2) Circle Font
const transformCircle = (str) =>
  str
    .toUpperCase()
    .split("")
    .map((c) =>
      normalUp.includes(c)
        ? String.fromCodePoint(0x24B6 + (c.charCodeAt(0) - 65))
        : c
    )
    .join("");

// 3) Filled Circle
const transformFilledCircle = (str) => {
  const filled = "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩".split("");

  return str
    .split("")
    .map((c) =>
      normalLow.includes(c.toLowerCase())
        ? filled[normalLow.indexOf(c.toLowerCase())]
        : c
    )
    .join("");
};

// 4) Square
const squareMap = {
  a: "🄰", b: "🄱", c: "🄲", d: "🄳", e: "🄴",
  f: "🄵", g: "🄶", h: "🄷", i: "🄸", j: "🄹",
  k: "🄺", l: "🄻", m: "🄼", n: "🄽", o: "🄾",
  p: "🄿", q: "🅀", r: "🅁", s: "🅂", t: "🅃",
  u: "🅄", v: "🅅", w: "🅆", x: "🅇", y: "🅈", z: "🅉",
};
const transformSquare = (str) =>
  str
    .split("")
    .map((c) => squareMap[c.toLowerCase()] || c)
    .join("");


// 5) Wide
const transformWide = (str) => str.split("").join(" ");

// 6) Strike
const transformStrike = (str) => str.split("").join("̶");

// 7) Underline
const transformUnderline = (str) => str.split("").join("̲");

// 8) Double Underline
const transformDoubleUnderline = (str) => str.split("").join("̳");

// 9) Tiny text
const tiny = "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ".split("");
const transformTiny = (str) =>
  str
    .split("")
    .map((c) =>
      normalLow.includes(c.toLowerCase())
        ? tiny[normalLow.indexOf(c.toLowerCase())]
        : c
    )
    .join("");

// 10) Monospace
const transformMonospace = (str) =>
  str.replace(/[A-Za-z]/g, (c) =>
    String.fromCodePoint(
      c.charCodeAt(0) + (c >= "a" ? 0x1D68A - 0x61 : 0x1D670 - 0x41)
    )
  );

// 11) Bold
const transformBold = (str) =>
  str.replace(/[A-Za-z]/g, (c) =>
    String.fromCodePoint(
      c.charCodeAt(0) + (c >= "a" ? 0x1D5EE - 0x61 : 0x1D5D4 - 0x41)
    )
  );

// 12) Italic
const transformItalic = (str) =>
  str.replace(/[A-Za-z]/g, (c) =>
    String.fromCodePoint(
      c.charCodeAt(0) + (c >= "a" ? 0x1D622 - 0x61 : 0x1D608 - 0x41)
    )
  );

// 13) Bold Italic
const transformBoldItalic = (str) =>
  str.replace(/[A-Za-z]/g, (c) =>
    String.fromCodePoint(
      c.charCodeAt(0) + (c >= "a" ? 0x1D656 - 0x61 : 0x1D63C - 0x41)
    )
  );

// 14) Small Caps
const transformSmallCaps = (str) =>
  str.toLowerCase().replace(/[a-z]/g, (c) =>
    String.fromCodePoint(0x1D00 + (c.charCodeAt(0) - 97))
  );

// 15) Inverted
const invertMap = { a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ",
  g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "ן",
  m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ",
  s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
  y: "ʎ", z: "z"
};
const transformInverted = (str) =>
  str.split("").map((c) =>
    invertMap[c.toLowerCase()] || c
  ).join("");

// 16) Currency Style  
const transformCurrency = (str) =>
  str.replace(/[a-zA-Z]/g, (c) => "€" + c + "€");

// 17) Mirror  
const transformMirror = (str) =>
  str.split("").reverse().join("");

// 18) Serif  
const transformSerif = (str) =>
  str.replace(/[A-Za-z]/g, (c) =>
    c >= "a"
      ? String.fromCodePoint(0x1D4EA + (c.charCodeAt(0) - 97))
      : String.fromCodePoint(0x1D434 + (c.charCodeAt(0) - 65))
  );

// 19) Fancy Script  
const transformScript = (str) =>
  str.replace(/[A-Za-z]/g, (c) =>
    c >= "a"
      ? String.fromCodePoint(0x1D4B6 + (c.charCodeAt(0) - 97))
      : String.fromCodePoint(0x1D49C + (c.charCodeAt(0) - 65))
  );

// 20) Vaporwave  
const transformVaporwave = (str) =>
  str.split("").map((c) => c + " ").join("");


// ------------------------
// STYLE LIST
// ------------------------

const FONT_STYLES = [
  { name: "Normal", transform: (t) => t },
  { name: "Bubble", transform: transformBubble },
  { name: "Circle", transform: transformCircle },
  { name: "Filled Circle", transform: transformFilledCircle },
  { name: "Square", transform: transformSquare },
  { name: "Wide", transform: transformWide },
  { name: "Strike", transform: transformStrike },
  { name: "Underline", transform: transformUnderline },
  { name: "Double Underline", transform: transformDoubleUnderline },
  { name: "Tiny", transform: transformTiny },
  { name: "Monospace", transform: transformMonospace },
  { name: "Bold", transform: transformBold },
  { name: "Italic", transform: transformItalic },
  { name: "Bold Italic", transform: transformBoldItalic },
  { name: "Small Caps", transform: transformSmallCaps },
  { name: "Inverted", transform: transformInverted },
  { name: "Mirror", transform: transformMirror },
  { name: "Serif", transform: transformSerif },
  { name: "Script", transform: transformScript },
  { name: "Vaporwave", transform: transformVaporwave },
  { name: "Currency", transform: transformCurrency },
];




export default function Stylish() {
    
  const [text, setText] = useState("Type Something");

  const copyText = (value) => {
    navigator.clipboard.writeText(value);
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
Stylish Text Generator
      </Typography>

      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
        ꕷꞆ𐒦ԸĬꕷዛ Ꞇꗛ𐠷Ꞇ
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our stylish text generator to design fancy text for your social media accounts. Copy and paste cool fonts to upgrade your Twitter or Instagram bio!
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

      <Grid container spacing={2}>
       {FONT_STYLES.map(({ name, transform }) => {
          const output = transform(text);
          return (
            <Grid size={{ xs: 12 }} md={6} key={name}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  cursor: "pointer",
                }}
              >
                <Box>
                 
                   <Typography
                    variant="h6"
                    sx={{ mt: 1, wordBreak: "break-word" }}
                  >
                    {output}
                  </Typography>

                   <Typography variant="subtitle2" color="text.secondary">
                    {name}
                  </Typography>
                  {/* <Typography
                    sx={{
                      wordWrap: "break-word",
                      fontSize: "1rem",
                      flex: 1,
                    //   fontFamily: font,
                    }}
                  >
                    {font}
                  </Typography> */}
                </Box>

                <IconButton  onClick={() => copyText(output)} size="small">
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
