import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const normal = "abcdefghijklmnopqrstuvwxyz";

const makeMap = (to) => (text) =>
  text
    .split("")
    .map((c) => {
      const i = normal.indexOf(c.toLowerCase());
      return i === -1 ? c : to[i];
    })
    .join("");

// --- COOL FONTS ---

const COOL_1 = "卂乃匚刀乇下厶卄丨ﾌ长乚爪几回卩Ɋ尺丂丅凵ᐯ山乂ㄚ乙";
const COOL_2 = "нєιισɓ¢∂єfɠнιנαႦƈԃԇϝɠԋιʝƙʅɱɳσρϙɾʂƚυᴠɯxყƶ";
const COOL_3 = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
const COOL_4 = "a꙰b꙰c꙰d꙰e꙰f꙰g꙰h꙰i꙰j꙰k꙰l꙰m꙰n꙰o꙰p꙰q꙰r꙰s꙰t꙰u꙰v꙰w꙰x꙰y꙰z꙰";
const COOL_5 =
  "⋆a⋆⋆b⋆⋆c⋆⋆d⋆⋆e⋆⋆f⋆⋆g⋆⋆h⋆⋆i⋆⋆j⋆⋆k⋆⋆l⋆⋆m⋆⋆n⋆⋆o⋆⋆p⋆⋆q⋆⋆r⋆⋆s⋆⋆t⋆⋆u⋆⋆v⋆⋆w⋆⋆x⋆⋆y⋆⋆z⋆";
const COOL_6 =
  "⌌🅐⌌⌏⌌🅑⌌⌏⌌🅒⌌⌏⌌🅓⌌⌏⌌🅔⌌⌏⌌🅕⌌⌏⌌🅖⌌⌏⌌🅗⌌⌏⌌🅘⌌⌏⌌🅙⌌⌏⌌🅚⌌⌏⌌🅛⌌⌏⌌🅜⌌⌏⌌🅝⌌⌏⌌🅞⌌⌏⌌🅟⌌⌏⌌🅠⌌⌏⌌🅡⌌⌏⌌🅢⌌⌏⌌🅣⌌⌏⌌🅤⌌⌏⌌🅥⌌⌏⌌🅦⌌⌏⌌🅧⌌⌏⌌🅨⌌⌏⌌🅩⌌⌏";
const COOL_7 = "ሀበጨዕቹተጎⶴሀክሞረነዐዒዐረሰትሁለአፙነጎጎጎ"; // 26 chars
const ZALGO = (t) =>
  t
    .split("")
    .map((c) => c + "̻̺͙͔͉̩͇͍ͭͨ̿̈ͩͥ̈́̋́̽͂ͅ")
    .join("");

// 20+ final styles
const COOL_FONTS = [
  { name: "Manga", transform: makeMap(COOL_1) },
  { name: "Olive You", transform: makeMap(COOL_2) },
  { name: "Bubble Mix", transform: makeMap(COOL_3) },
  { name: "Kawi Style", transform: makeMap(COOL_4) },
  { name: "Star Font", transform: makeMap(COOL_5) },
  { name: "Bracket Box", transform: makeMap(COOL_6) },
  { name: "Ethiopian Style", transform: makeMap(COOL_7) },
  { name: "Zalgo Glitch", transform: ZALGO },

  // EXTRA COOL STYLES
  {
    name: "Spaced Cool",
    transform: (t) => t.split("").join("  "),
  },
  {
    name: "Emoji Cool",
    transform: (t) =>
      t
        .split("")
        .map((c) => `✨${c}✨`)
        .join(" "),
  },
  {
    name: "Mirror",
    transform: (t) => [...t].reverse().join(""),
  },
  {
    name: "Curly",
    transform: (t) =>
      t
        .split("")
        .map((c) => `➳${c}➳`)
        .join(""),
  },
  {
    name: "Circle Mixed",
    transform: (t) =>
      t
        .split("")
        .map((c) => `❍${c}❍`)
        .join(" "),
  },
  {
    name: "Small Caps Cool",
    transform: (t) =>
      t
        .toLowerCase()
        .replace(
          /[a-z]/g,
          (c) => "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘꞯʀꜱᴛᴜᴠᴡxʏᴢ"[normal.indexOf(c)]
        ),
  },
];

export default function CoolFontProvider() {
  const [text, setText] = useState("");

  const copy = (value) => {
    if (!value) return;
    navigator.clipboard.writeText(value);
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#F1F5F9", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        fontWeight={700}
        textAlign="left"
        color="text.primary"
        textTransform={"uppercase"}
        pb={1}
      >
        Cool Text Generator
      </Typography>

      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
        匚ㄖㄖㄥ ㄒ乇乂ㄒ
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our cool text generator to design fancy text for your social media
        accounts. Copy and paste 274+ weird fonts to upgrade your Discord or
        WhatsApp status!
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
        {COOL_FONTS.map((item) => {
          const out = item.transform(text || "");
          return (
            <Grid size={{ xs: 12 }} key={item.name}>
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: "1.2rem", mb: 1 }}>
                    {out || "Type Something"}
                  </Typography>
                  <Typography variant="caption">{item.name}</Typography>
                </Box>

                <IconButton onClick={() => copy(out)}>
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
