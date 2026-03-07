// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   TextField,
//   Grid,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";

// // ✨ Unicode Styles (You can add unlimited)
// const FONT_STYLES = [
//   { name: "Bold", map: { a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦", n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳" } },
//   { name: "Italic", map: { a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮", n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻" } },
//   { name: "Bold Italic", map: { a: "𝙖", b: "𝙗", c: "𝙘", d: "𝙙", e: "𝙚", f: "𝙛", g: "𝙜", h: "𝙝", i: "𝙞", j: "𝙟", k: "𝙠", l: "𝙡", m: "𝙢", n: "𝙣", o: "𝙤", p: "𝙥", q: "𝙦", r: "𝙧", s: "𝙨", t: "𝙩", u: "𝙪", v: "𝙫", w: "𝙬", x: "𝙭", y: "𝙮", z: "𝙯" } },
//   { name: "Double Struck", map: { a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫" } },
//   { name: "Script", map: { a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃" } },
// ];

// // 🔥 Convert normal text → Unicode styled text
// const convertText = (text, styleMap) => {
//   return text
//     .split("")
//     .map((ch) => {
//       const lower = ch.toLowerCase();
//       if (styleMap[lower]) {
//         // same case maintain
//         return ch === lower ? styleMap[lower] : styleMap[lower].toUpperCase();
//       }
//       return ch;
//     })
//     .join("");
// };

// export default function FancyFonts() {
//   const [text, setText] = useState("");

//   const handleCopy = (txt) => {
//     navigator.clipboard.writeText(txt);
//     alert("Copied!");
//   };

//   return (
//     <Box sx={{ p: 4, backgroundColor: "#fffaf0", minHeight: "100vh" }}>
//       <Typography variant="h4" fontWeight={700} pb={2}>
//         Fancy Unicode Font Generator
//       </Typography>

//       <TextField
//         fullWidth
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//         sx={{ mb: 3 }}
//       />

//       <Grid container spacing={2}>
//         {FONT_STYLES.map((style, i) => {
//           const converted = convertText(text, style.map);

//           return (
//             <Grid size={{ xs: 12 }} key={i}>
//               <Paper
//                 sx={{
//                   p: 2,
//                   backgroundColor: "#fff8f0",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   borderRadius: 3,
//                 }}
//               >
//                 <Box>
//                   <Typography fontSize="1.3rem" pb={1}>
//                     {converted || "Type something cool!"}
//                   </Typography>
//                   <Typography color="gray">{style.name}</Typography>
//                 </Box>

//                 <IconButton onClick={() => handleCopy(converted)}>
//                   <ContentCopyIcon />
//                 </IconButton>
//               </Paper>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// }


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
const BASE_STYLES = {
  bold: { upper: 0x1D400, lower: 0x1D41A },
  italic: { upper: 0x1D434, lower: 0x1D44E },
  boldItalic: { upper: 0x1D468, lower: 0x1D482 },
  script: { upper: 0x1D49C, lower: 0x1D4B6 },
  boldScript: { upper: 0x1D4D0, lower: 0x1D4EA },
  fraktur: { upper: 0x1D504, lower: 0x1D51E },
  boldFraktur: { upper: 0x1D56C, lower: 0x1D586 },
  monospace: { upper: 0x1D670, lower: 0x1D68A },
  sans: { upper: 0x1D5A0, lower: 0x1D5BA },
  boldSans: { upper: 0x1D5D4, lower: 0x1D5EE },
  italicSans: { upper: 0x1D608, lower: 0x1D622 },
  boldItalicSans: { upper: 0x1D63C, lower: 0x1D656 },
  doubleStruck: { upper: 0x1D538, lower: 0x1D552 },
};

// convert function
function unicodeConvert(text, style) {
  let result = "";

  for (let ch of text) {
    let code = ch.charCodeAt(0);
    let mapped = ch;

    if (code >= 65 && code <= 90)
      mapped = String.fromCodePoint(style.upper + (code - 65));

    else if (code >= 97 && code <= 122)
      mapped = String.fromCodePoint(style.lower + (code - 97));

    result += mapped;
  }

  return result;
}

// =============================
// 🔥 MODIFIER STYLES (adds 20 variations)
// =============================
const modifiers = [
  (txt) => txt.toUpperCase(),
  (txt) => txt.toLowerCase(),
  (txt) => [...txt].map((c) => c + "̵").join(""),
  (txt) => [...txt].map((c) => "•" + c + "•").join(""),
  (txt) => [...txt].map((c) => c + "̴").join(""),
  (txt) => [...txt].map((c) => c + "҉").join(""),
  (txt) => [...txt].map((c) => c + "͜͡").join(""),
  (txt) => [...txt].map((c) => c + "🔥").join(""),
  (txt) => "★ " + txt + " ★",
  (txt) => txt.split("").reverse().join(""),
];

// =============================
// 🔥 Generate 300+ Styles
// =============================
function generateAllStyles(text) {
  let result = [];

  Object.entries(BASE_STYLES).forEach(([name, style]) => {
    const base = unicodeConvert(text, style);
    result.push({ label: name, value: base });

    modifiers.forEach((mod, mIndex) => {
      result.push({
        label: `${name} + mod${mIndex + 1}`,
        value: mod(base),
      });
    });
  });

  return result.slice(0, 50); // limit to 300
}

// =============================
// 🔥 MAIN COMPONENT
// =============================
export default function FancyFonts() {
  const [text, setText] = useState("");

  const styles = generateAllStyles(text);

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    alert("Copied!");
  };

  return (
    <Box sx={{
        backgroundColor: "#fffaf0",
        minHeight: "auto",
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: 1,
      }}>
<Typography
        variant="h2"
        fontWeight={800}
        textAlign="left"
        color="text.primary"
        textTransform={"uppercase"}
        pb={1}
      >
        Fancy Text Generator
      </Typography>


       <Typography
              variant="h3"
              fontWeight={800}
              textAlign="left"
              color="text.primary"
              pb={1}
            >
              𝐹𝛼𝜂𝜍𝜓 𝛵𝜀𝜒𝜏
            </Typography>
      
            <Typography
              variant="subtitle1"
              color="text.secondary"
              textAlign="left"
              pb={1}
            >
              Use our fancy text generator to design cool text for your social media accounts. Copy and paste 279+ stylish fonts to upgrade your Instagram bio or Discord status!
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
                      marginBottom: 3,
                      backgroundColor: "#fff",
                      //   borderRadius: 4,
                      //   border: "1px solid black",
                      input: { p: 2 },
                    }}
                  />
      

      <Grid container spacing={2}>
        {styles.map((item, i) => (
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
                <Typography fontSize="1.3rem">{item.value || "Type something"}</Typography>
                <Typography color="gray" fontSize="0.9rem">{item.label}</Typography>
              </Box>

              <IconButton onClick={() => handleCopy(item.value)}>
                <ContentCopyIcon />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
