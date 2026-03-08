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
const transformBubble = (str) => {
  const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const bubble = [
    ..."ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    ..."ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
  ];
  return str
    .split("")
    .map((c) => (normal.includes(c) ? bubble[normal.indexOf(c)] : c))
    .join("");
};

const transformCircle = (str) =>
  str
    .toUpperCase()
    .split("")
    .map((c) =>
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(c)
        ? String.fromCodePoint(0x24b6 + (c.charCodeAt(0) - 65))
        : c
    )
    .join("");

const transformSquare = (str) =>
  str
    .split("")
    .map((c) => {
      const map = {
        a: "🄰",
        b: "🄱",
        c: "🄲",
        d: "🄳",
        e: "🄴",
        f: "🄵",
        g: "🄶",
        h: "🄷",
        i: "🄸",
        j: "🄹",
        k: "🄺",
        l: "🄻",
        m: "🄼",
        n: "🄽",
        o: "🄾",
        p: "🄿",
        q: "🅀",
        r: "🅁",
        s: "🅂",
        t: "🅃",
        u: "🅄",
        v: "🅅",
        w: "🅆",
        x: "🅇",
        y: "🅈",
        z: "🅉",
      };
      return map[c.toLowerCase()] || c;
    })
    .join("");

const transformFilledCircle = (str) => {
  const normal = "abcdefghijklmnopqrstuvwxyz";
  const filled = "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩".split("");
  return str
    .split("")
    .map((c) =>
      normal.includes(c.toLowerCase())
        ? filled[normal.indexOf(c.toLowerCase())]
        : c
    )
    .join("");
};

// Add more styles easily
const FONT_STYLES = [
  { name: "Normal", transform: (t) => t },
  { name: "Bubble", transform: transformBubble },
  { name: "Circle", transform: transformCircle },
  { name: "Square", transform: transformSquare },
  { name: "Filled Circle", transform: transformFilledCircle },
  {
    name: "Small Caps",
    transform: (t) => t.toLowerCase().replace(/[a-z]/g, (c) =>
      String.fromCodePoint(c.charCodeAt(0) + 0x1d00 - 0x61)
    ),
  },
  {
    name: "Monospace",
    transform: (t) =>
      t.replace(/[A-Za-z]/g, (c) =>
        String.fromCodePoint(c.charCodeAt(0) + 0x1d670 - 0x41)
      ),
  },
  {
    name: "Bold",
    transform: (t) =>
      t.replace(/[A-Za-z]/g, (c) =>
        String.fromCodePoint(c.charCodeAt(0) + (c >= "a" ? 0x1d5ee - 0x61 : 0x1d5d4 - 0x41))
      ),
  },
  {
    name: "Italic",
    transform: (t) =>
      t.replace(/[A-Za-z]/g, (c) =>
        String.fromCodePoint(c.charCodeAt(0) + (c >= "a" ? 0x1d622 - 0x61 : 0x1d608 - 0x41))
      ),
  },
  {
    name: "Bold Italic",
    transform: (t) =>
      t.replace(/[A-Za-z]/g, (c) =>
        String.fromCodePoint(c.charCodeAt(0) + (c >= "a" ? 0x1d656 - 0x61 : 0x1d63c - 0x41))
      ),
  },
  {
    name: "Wide",
    transform: (t) => t.split("").join(" "),
  },
  {
    name: "Strike",
    transform: (t) => t.split("").join("̶"),
  },
  {
    name: "Underline",
    transform: (t) => t.split("").join("̲"),
  },
  {
    name: "Double Underline",
    transform: (t) => t.split("").join("̳"),
  },
  {
    name: "Superscript",
    transform: (t) => t.replace(/[0-9]/g, (c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[c]),
  },
  {
    name: "Subscript",
    transform: (t) => t.replace(/[0-9]/g, (c) => "₀₁₂₃₄₅₆₇₈₉"[c]),
  },
  {
    name: "Tiny",
    transform: (t) =>
      t.replace(/[A-Za-z]/g, (c) =>
        "abcdefghijklmnopqrstuvwxyz".includes(c.toLowerCase())
          ? "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘᴏʀsᴛᴜᴠᴡxʏᴢ"[
              "abcdefghijklmnopqrstuvwxyz".indexOf(c.toLowerCase())
            ]
          : c
      ),
  },
  {
    name: "Small Bold",
    transform: (t) =>
      t.replace(/[A-Za-z]/g, (c) =>
        "abcdefghijklmnopqrstuvwxyz".includes(c.toLowerCase())
          ? "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳"[
              "abcdefghijklmnopqrstuvwxyz".indexOf(c.toLowerCase())
            ]
          : c
      ),
  },
];



export default function DiscordFonts() {
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
        Discord Font Generator
      </Typography>

      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
        𐌃𐌉𐌔𐌂Ꝋ𐌐𐌃 𐌅Ꝋ𐌍𐌕𐌔
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our Discord font generator to level up your social media profiles.
        Copy and paste 281+ cool fonts to upgrade your Discord, Instagram, and
        Twitter bios!
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
            <Grid size={{ xs: 12 }}  key={name}>
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
