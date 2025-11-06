import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Paper,
  IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import WebFont from "webfontloader";

 const emojiSet = [
  "✨", "🔥", "💖", "⭐", "🎉", "💫", "🌈", "🦋", "🌟", "🌸", "💎",
  "💥", "💞", "🖤", "🌻", "💐", "🎶", "🎀", "⚡", "🌹", "🌙", "💧"
];

const symbolSet = [
  "★", "☆", "✿", "❀", "✦", "❣", "☯", "☮", "♕", "♛", "♡", "♥", "♠", "♣", "♟",
  "(•‿•)", "(¬‿¬)", "(＾▽＾)", "ʕ•ᴥ•ʔ", "ツ", "(✿◠‿◠)", "ಠ‿ಠ", "ʘ‿ʘ", "(☞ﾟヮﾟ)☞", 
  "☾", "☀", "❆", "⚝", "~", "♩", "♪", "♫", "✧", "∞", "✩"
];
const decorativeSet = [...emojiSet, ...symbolSet];


export default function InstagramFonts() {
  const [text, setText] = useState("");

  const handleCopy = (fontText) => {
    navigator.clipboard.writeText(fontText);
    alert("Copied to clipboard!");
  };


  const [fonts] = useState([
      "Roboto",
      "Stack Sans Notched",
      "Momo Signature",
      "Great Vibes",
      "Indie Flower",
      "Open Sans",
      "Lato",
      "Sixtyfour",
      "Cabin Sketch",
      "Amatic SC",
      "Caveat",
      "Shadows Into Light",
      "Gloria Hallelujah",
      "Patrick Hand",
      "Rock Salt",
      "Delius Swash Caps",
      "Satisfy",
      "Yellowtail",
      "Courgette",
      "Sacramento",
      "Poppins",
      "Montserrat",
      "Raleway",
      "Oswald",
      "Playfair Display",
      "Merriweather",
      "Noto Sans",
      "Nunito",
      "Quicksand",
      "Rubik",
      "Josefin Sans",
      "Inconsolata",
      "Bebas Neue",
      "Dancing Script",
      "Pacifico",
      "Ubuntu",
      "Fira Sans",
    ]);

     useEffect(() => {
    WebFont.load({
      google: {
        families: fonts,
      },
    });
  }, [fonts]);

const stylizeText = (font) => {
  if (!text) return "Type something...";

  // Convert text to array for easy insertion
  const chars = text.split("");
  const insertCount = Math.floor(Math.random() * 4) + 1; // 1–4 insertions

  for (let i = 0; i < insertCount; i++) {
    const symbol = decorativeSet[Math.floor(Math.random() * decorativeSet.length)];
    const pos = Math.floor(Math.random() * (chars.length + 1)); // Random position
    chars.splice(pos, 0, symbol);
  }

  return chars.join("");
};

  // const items = Array(4).fill(null);

  return (
    <Box
      sx={{
        backgroundColor: "#fffaf0",
        minHeight: "auto",
        p: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: 1,
      }}
    >
      <Typography
        variant="h2"
        fontWeight={800}
        textAlign="left"
        color="text.primary"
        textTransform={"uppercase"}
        pb={1}
      >
        Instagram Font Generator
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
        Ιηѕтαgяαм Ƒσηтѕ
      </Typography>

      <Typography variant="subtitle1" color="text.secondary" textAlign="left" pb={1}>
Use our Instagram font generator to level up your social media profiles. Copy and paste 299+ cool fonts to upgrade your Instagram, Discord, and Twitter bios!
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
        borderRadius:"25px" // Default border
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
          mb: 3,
        }}
      />

      <Grid container spacing={2} flexDirection={"column"} width={"100%"}>
        {fonts.map((font, i) => {
          const styledText = stylizeText(font);
          return (
            <Grid key={i} item xs={12} width={"100%"}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "#fff8f0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "translateY(-4px)" },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontFamily: font,
                      fontSize: "1.3rem",
                      paddingBottom: 1,
                      wordWrap: "break-word",
                    }}
                  >
                    {styledText}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: "monospace" }}
                  >
                    {font}
                  </Typography>
                </Box>

                <IconButton
                  onClick={() => handleCopy(styledText)}
                  size="small"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    borderRadius: "16px",
                    padding: "4px 6px",
                    backgroundColor: "#000",
                    color: "#fff8e6",
                    fontWeight: "700",
                  }}
                >
                  Copy
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      {/* <Grid container 
        spacing={3}
        flexDirection={"column"}
        width={"100%"}
        // justifyContent="center"
        // alignItems={"center"}
        >
        
        {fonts.map((font, i) => (
        //   <Grid item xs={12} sm={6} md={6} key={i}>
          <Grid size={{ xs: 12 }} key={i}  width={"100%"}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: "#fff8f0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                cursor: "pointer",
              }}
            >
                <Box>
                     <Typography
                sx={{
                    paddingBottom: 2,
                  wordWrap: "break-word",
                  fontSize: "1.2rem",
                  flex: 1,
                }}
              >
                {text || "generating_fancy_fonts..."}
              </Typography>
               <Typography
                sx={{
                  wordWrap: "break-word",
                  fontSize: "1rem",
                  flex: 1,
                }}
              >
                {text || "generating_fancy_fonts..."}
              </Typography>
                </Box>
             
              <IconButton onClick={() => handleCopy(text)} size="small" sx={{display: "flex", alignItems: "center", gap: 0.5 , borderRadius: "16px",  padding: "4px 6px", backgroundColor: "#000000ff", color: "#fef9e6", fontWeight:"700"}} >
                Copy
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}


// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   TextField,
//   Typography,
//   Box,
//   Paper,
//   CircularProgress,
// } from "@mui/material";

// const emojiSet = ["✨", "🔥", "💖", "⭐", "🎉", "💫", "🌈", "🦋", "🌟", "🌸", "💎"];

// // A few Unicode fancy style transformations
// const fancyTransforms = [
//   (txt) => txt.toUpperCase(),
//   (txt) => txt.toLowerCase(),
//   (txt) => txt.split("").map((c) => "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉"["ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(c.toUpperCase())] || c).join(""),
//   (txt) => "★ " + txt.split("").join(" ★ ") + " ★",
//   (txt) => txt.split("").map((c) => c + "💫").join(""),
//   (txt) => "💖" + txt + "💖",
//   (txt) => txt.split("").reverse().join("") + " 🔁",
// ];

// export default function AllFonts() {
//   const [text, setText] = useState("");
//   const [fonts, setFonts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch 50 random Google fonts
//   useEffect(() => {
//     const fetchFonts = async () => {
//       try {
//         const res = await fetch(
//           "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB0N0_example"
//         );
//         const data = await res.json();
//         const randomFonts = data.items
//           .sort(() => 0.5 - Math.random())
//           .slice(0, 50)
//           .map((f) => f.family);
//         setFonts(randomFonts);
//       } catch {
//         setFonts([
//           "Roboto",
//           "Open Sans",
//           "Lobster",
//           "Merriweather",
//           "Poppins",
//           "Raleway",
//           "Dancing Script",
//           "Bebas Neue",
//         ]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchFonts();
//   }, []);

//   const resultText = text || "Type something cool ✨";

//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 5 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         🎨 Fancy Text & Emoji Style Generator
//       </Typography>

//       <TextField
//         fullWidth
//         variant="outlined"
//         label="Type here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         sx={{ mb: 4 }}
//       />

//       {loading ? (
//         <Box display="flex" justifyContent="center" mt={4}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         <Box>
//           {fonts.map((font, i) => (
//             <Paper
//               key={i}
//               elevation={2}
//               sx={{
//                 mb: 2,
//                 p: 2,
//                 borderRadius: 2,
//                 textAlign: "center",
//                 fontSize: "1.5rem",
//                 fontFamily: font,
//               }}
//             >
//               {emojiSet[Math.floor(Math.random() * emojiSet.length)]}{" "}
//               {resultText}{" "}
//               {emojiSet[Math.floor(Math.random() * emojiSet.length)]}
//             </Paper>
//           ))}

//           {fancyTransforms.map((fn, i) => (
//             <Paper
//               key={"custom-" + i}
//               elevation={3}
//               sx={{
//                 mb: 2,
//                 p: 2,
//                 borderRadius: 2,
//                 textAlign: "center",
//                 fontSize: "1.5rem",
//               }}
//             >
//               {fn(resultText)}
//             </Paper>
//           ))}
//         </Box>
//       )}
//     </Container>
//   );
// }
