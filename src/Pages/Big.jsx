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



const FONT_STYLES = [
  {
  name: "Block",
  transform: (text) => {
   const map = {
    a: "█▄█",
    b: "█▀█",
    c: "█▄ ",
    d: "█▀ ",
    e: "☰",
    f: "▄█",
    g: "█▄█▀▌",
    h: "█▬█",
    i: "▌",
    j: "▄▌",
    k: "▐▀▄",
    l: "█▄ ",
    m: "█▀█▀█",
    n: "▀█▀█ ",
    o: "███",
    p: "█▀ ",
    q: "██▀",
    r: "█▀",
    s: "▀▄▀",
    t: "▀█▀",
    u: "█▄█",
    v: "▀▄▀",
    w: "█▄█▄█",
    x: "▀▄▀",
    y: "▀▄▀",
    z: "▀█▄",
    " ": " ", // space
  };

  return text
    .toLowerCase()
    .split("")
    .map((c) => map[c] || c)
    .join(" ");
}
},
  {
    name: "Kawaii",
    transform: (text) =>
      text
        .toLowerCase()
        .replace(/h/g, "ん")
        .replace(/e/g, "乇")
        .replace(/l/g, "ﾚ")
        .replace(/o/g, "の"),
  },
  {
    name: "Asian",
    transform: (text) =>
      text
        .toLowerCase()
        .replace(/h/g, "廾")
        .replace(/e/g, "ヨ")
        .replace(/l/g, "し")
        .replace(/o/g, "回"),
  },
  {
    name: "Bracketed",
    transform: (text) => text.split("").map(c => `⟦${c}⟧`).join(""),
  },
  {
    name: "Bubble",
    transform: (text) => {
      const normal = "abcdefghijklmnopqrstuvwxyz";
      const fancy = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
      return text
        .toLowerCase()
        .split("")
        .map((c) => (normal.includes(c) ? fancy[normal.indexOf(c)] : c))
        .join("");
    },
  },
  {
    name: "Square",
    transform: (text) => {
      const normal = "abcdefghijklmnopqrstuvwxyz";
      const fancy = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉";
      return text
        .toLowerCase()
        .split("")
        .map((c) => (normal.includes(c) ? fancy[normal.indexOf(c)] : c))
        .join("");
    },
  },
  {
    name: "Small Caps",
    transform: (text) => {
      const normal = "abcdefghijklmnopqrstuvwxyz";
      const fancy = "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ";
      return text
        .toLowerCase()
        .split("")
        .map((c) => (normal.includes(c) ? fancy[normal.indexOf(c)] : c))
        .join("");
    },
  },
  {
    name: "Fullwidth",
    transform: (text) => {
      const normal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const fancy = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ";
      return text
        .split("")
        .map((c) => (normal.includes(c) ? fancy[normal.indexOf(c)] : c))
        .join("");
    },
  },
  {
    name: "Underline",
    transform: (text) => text.split("").map(c => `${c}̲`).join(""),
  },
  {
    name: "Strikethrough",
    transform: (text) => text.split("").map(c => `${c}̶`).join(""),
  },
  {
    name: "Circle",
    transform: (text) => {
      const normal = "abcdefghijklmnopqrstuvwxyz";
      const fancy = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
      return text
        .toLowerCase()
        .split("")
        .map(c => normal.includes(c) ? fancy[normal.indexOf(c)] : c)
        .join("");
    }
  },
  {
    name: "Fancy Script",
    transform: (text) => {
      const normal = "abcdefghijklmnopqrstuvwxyz";
      const fancy = "𝒶𝒷𝒸𝒹ℯ𝒻𝑔ℎ𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏";
      return text
        .toLowerCase()
        .split("")
        .map(c => normal.includes(c) ? fancy[normal.indexOf(c)] : c)
        .join("");
    }
  },
  {
    name: "Bold Script",
    transform: (text) => {
      const normal = "abcdefghijklmnopqrstuvwxyz";
      const fancy = "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇";
      return text
        .toLowerCase()
        .split("")
        .map(c => normal.includes(c) ? fancy[normal.indexOf(c)] : c)
        .join("");
    }
  },
  {
    name: "Double Circle",
    transform: (text) => {
      const normal = "abcdefghijklmnopqrstuvwxyz";
      const fancy = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
      return text
        .toLowerCase()
        .split("")
        .map(c => normal.includes(c) ? fancy[normal.indexOf(c)] : c)
        .join("");
    }
  },
  {
    name: "Glitch",
    transform: (text) => {
      const glitchChars = ['̴','̵','̶','͟','̷','̸','̹','̺','̻','̼','̽','̾'];
      return text.split("").map(c => c + glitchChars[Math.floor(Math.random()*glitchChars.length)]).join("");
    }
  },
  {
    name: "Reverse",
    transform: (text) => text.split("").reverse().join(""),
  },
  {
    name: "Square Brackets",
    transform: (text) => text.split("").map(c => `[${c}]`).join(""),
  },
  {
    name: "Curly Braces",
    transform: (text) => text.split("").map(c => `{${c}}`).join(""),
  },
  {
    name: "Parentheses",
    transform: (text) => text.split("").map(c => `(${c})`).join(""),
  },
  {
    name: "Slashed",
    transform: (text) => text.split("").map(c => `/${c}/`).join(""),
  },
  {
    name: "Dotted",
    transform: (text) => text.split("").map(c => `.${c}.`).join(""),
  }
];



// Transform Text Function
// const applyStyle = (text, styleFunc) => {
//   if (text.trim() === "") return "";
//   return styleFunc.replace(/H|E|L|O/gi, (char) => {
//     const map = {
//       h: text[0] || "",
//       e: text[1] || "",
//       l: text[2] || "",
//       o: text[3] || "",
//     };
//     return map[char.toLowerCase()] || char;
//   });
// };

export default function BigFontGenerator() {
  const [input, setInput] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
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
        Big Text Generator
      </Typography>

      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
        ᗷᏆǤ 丅ᗴ᙭丅
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our big text generator to design cool text for your social media
        accounts. Copy and paste wide letters, aesthetic, and hit fonts to style
        your profile!
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
        {/* {Object.entries(fontStyles).map(([title, styleText], index) => {
          // Replace HELLO with typed text (preserves final style)
          const styledText = convertFont(input, font);
        //   const styledText = styleText.replace(/H|E|L|O/gi, (c, i) => {
        //     return input[i] || "";
        //   }); */}

        {/* {Object.entries(fonts).map(([key, font], index) => {
  const styledText = convertFont(input, font); */}
{FONT_STYLES.map((font, idx) => (
        //   return (
            <Grid size={{ xs: 12 }}  key={idx}>
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
                    sx={{ mt: 1, wordBreak: "break-word",fontSize: "3rem", }}
                  >
                    {/* {styledText} */}
                    {font.transform(input || "Type Something")}
                  </Typography>

                  <Typography variant="subtitle2" color="text.secondary">
                    {font.name}
                  </Typography>
                </Box>
                <IconButton  onClick={() => copyText(font.transform(input))}
                // onClick={() => handleCopy(styledText)} 
                size="small">
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Paper>
            </Grid>
        //   );
        // }
        ))}
      </Grid>
    </Box>
  );
}
