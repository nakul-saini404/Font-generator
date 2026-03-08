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

const boldMap = (from, to) => {
  const fromArr = Array.from(from);
  const toArr = Array.from(to);

  return (text = "") =>
    Array.from(text)
      .map((c) => {
        const idx = fromArr.indexOf(c.toLowerCase());
        return idx === -1 ? c : toArr[idx];
      })
      .join("");
};

// --- 26-Character Unicode Sets ---
const BOLD = "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇";
const BOLD_ITALIC = "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯";
const DOUBLE = "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫";
const SANS_BOLD = "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇";
const SANS_BOLD_ITALIC = "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘃𝘄𝘹𝘆𝘻";
const MONO_BOLD = "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣";
const FULLWIDTH = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ";

const BUBBLE = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
const SQUARE = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉";
const OUTLINE = "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟";

const CURVED = "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃";
const GREEK = "αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυᴠɯxყƶ";

const KAWAII = [
  "么",
  "乃",
  "ᄃ",
  "り",
  "乇",
  "ｷ",
  "ム",
  "ん",
  "ﾉ",
  "ﾌ",
  "ズ",
  "ﾚ",
  "ﾒ",
  "れ",
  "の",
  "尸",
  "ゐ",
  "尺",
  "丂",
  "ｲ",
  "ひ",
  "√",
  "W",
  "ﾒ",
  "ﾘ",
  "乙",
].join("");

const ASIAN = [
  "丹",
  "乃",
  "匚",
  "刀",
  "モ",
  "下",
  "句",
  "卄",
  "工",
  "丁",
  "长",
  "乚",
  "爪",
  "れ",
  "回",
  "尸",
  "ゐ",
  "尺",
  "丂",
  "亡",
  "凵",
  "リ",
  "山",
  "メ",
  "ㄚ",
  "乙",
].join("");

const FONT_STYLES = [
  { name: "Bold", transform: boldMap(normal, BOLD) },
  { name: "Bold Italic", transform: boldMap(normal, BOLD_ITALIC) },
  { name: "Double-Struck Bold", transform: boldMap(normal, DOUBLE) },
  { name: "Sans Bold", transform: boldMap(normal, SANS_BOLD) },
  { name: "Sans Bold Italic", transform: boldMap(normal, SANS_BOLD_ITALIC) },
  { name: "Monospace Bold", transform: boldMap(normal, MONO_BOLD) },
  { name: "Fullwidth Bold", transform: boldMap(normal, FULLWIDTH) },

  { name: "Bubble Bold", transform: boldMap(normal, BUBBLE) },
  { name: "Square Bold", transform: boldMap(normal, SQUARE) },
  { name: "Outline Bold", transform: boldMap(normal, OUTLINE) },

  { name: "Curved Bold", transform: boldMap(normal, CURVED) },
  { name: "Greek Bold", transform: boldMap(normal, GREEK) },

  { name: "Kawaii Bold", transform: boldMap(normal, KAWAII) },
  { name: "Asian Bold", transform: boldMap(normal, ASIAN) },

  {
    name: "Emoji Bold",
    transform: (t = "") =>
      t
        .split("")
        .map((c) => `🅱${c}🅱`)
        .join(""),
  },
  {
    name: "Big Brackets Bold",
    transform: (t = "") =>
      t
        .split("")
        .map((c) => `【${c}】`)
        .join(""),
  },
  {
    name: "Slashed Bold",
    transform: (t = "") =>
      t
        .split("")
        .map((c) => `${c}/`)
        .join(""),
  },
  {
    name: "Dotted Bold",
    transform: (t = "") =>
      t
        .split("")
        .map((c) => `●${c}●`)
        .join(""),
  },
  {
    name: "Reverse Bold",
    transform: (t = "") => (t || "").split("").reverse().join(""),
  },
];

export default function BoldFontGenerator() {
  const [text, setText] = useState("");

  const copy = (value) => {
    if (!value) return;
    navigator.clipboard
      .writeText(value)
      .catch((err) => console.error("Copy failed", err));
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
        Bold Text Generator
      </Typography>

      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
        𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our bold text generator to design stylish fonts for your social
        media accounts. Copy and paste bold, gothic, and blackboard text to
        style your profile!
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
        {FONT_STYLES.map((item) => {
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
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    variant="h6"
                    sx={{ mb: 2, wordBreak: "break-word", fontSize: "1.2rem" }}
                  >
                    {out || "Type Something"}
                  </Typography>

                  <Typography variant="subtitle2" color="text.secondary">
                    {item.name}
                  </Typography>
                </Box>

                <IconButton
                  aria-label={`copy ${item.name}`}
                  onClick={() => copy(out)}
                  size="small"
                >
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
