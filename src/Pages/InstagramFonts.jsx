import React, { useEffect, useState,useMemo } from "react";
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
  "✨","🔥","💖","⭐","🎉","💫","🌈","🦋","🌟","🌸","💎",
  "💥","💞","🖤","🌻","💐","🎶","🎀","⚡","🌹","🌙","💧"
];

const symbolSet = [
  "★","☆","✿","❀","✦","❣","☯","☮","♕","♛","♡","♥",
  "♠","♣","♟","ツ","☾","☀","❆","⚝","∞","✩"
];

const decorativeSet = [...emojiSet, ...symbolSet];

const styles = {
  Bold: {
    a:"𝗮",b:"𝗯",c:"𝗰",d:"𝗱",e:"𝗲",f:"𝗳",g:"𝗴",h:"𝗵",i:"𝗶",j:"𝗷",
    k:"𝗸",l:"𝗹",m:"𝗺",n:"𝗻",o:"𝗼",p:"𝗽",q:"𝗾",r:"𝗿",s:"𝘀",t:"𝘁",
    u:"𝘂",v:"𝘃",w:"𝘄",x:"𝘅",y:"𝘆",z:"𝘇"
  },

  Italic: {
    a:"𝘢",b:"𝘣",c:"𝘤",d:"𝘥",e:"𝘦",f:"𝘧",g:"𝘨",h:"𝘩",i:"𝘪",j:"𝘫",
    k:"𝘬",l:"𝘭",m:"𝘮",n:"𝘯",o:"𝘰",p:"𝘱",q:"𝘲",r:"𝘳",s:"𝘴",t:"𝘵",
    u:"𝘶",v:"𝘷",w:"𝘸",x:"𝘹",y:"𝘺",z:"𝘻"
  },

  Script: {
    a:"𝒶",b:"𝒷",c:"𝒸",d:"𝒹",e:"𝑒",f:"𝒻",g:"𝑔",h:"𝒽",i:"𝒾",j:"𝒿",
    k:"𝓀",l:"𝓁",m:"𝓂",n:"𝓃",o:"𝑜",p:"𝓅",q:"𝓆",r:"𝓇",s:"𝓈",t:"𝓉",
    u:"𝓊",v:"𝓋",w:"𝓌",x:"𝓍",y:"𝓎",z:"𝓏"
  },

  Monospace: {
    a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",h:"𝚑",i:"𝚒",j:"𝚓",
    k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",o:"𝚘",p:"𝚙",q:"𝚚",r:"𝚛",s:"𝚜",t:"𝚝",
    u:"𝚞",v:"𝚟",w:"𝚠",x:"𝚡",y:"𝚢",z:"𝚣"
  },

  Double: {
    a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",
    k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",
    u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
  }
};

const convert = (text, map) => {
  return text
    .split("")
    .map((c) => {
      const lower = c.toLowerCase();
      return map[lower] || c;
    })
    .join("");
};

const addDecorations = (text) => {

  const chars = text.split("");
  const insertCount = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < insertCount; i++) {

    const symbol =
      decorativeSet[Math.floor(Math.random() * decorativeSet.length)];

    const pos = Math.floor(Math.random() * (chars.length + 1));

    chars.splice(pos, 0, symbol);
  }

  return chars.join("");
};



export default function InstagramFonts() {
  const [text, setText] = useState("");

 const styledFonts = useMemo(() => {

    return Object.entries(styles).map(([name, map]) => {

      const unicode = convert(text || "Type something...", map);

      return {
        name,
        text: addDecorations(unicode),
      };

    });

  }, [text]);

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    alert("Copied!");
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

      <Grid container spacing={2}>

        {styledFonts.map((item, i) => (

          <Grid size={{ xs: 12 }} key={i}>

            <Paper
              elevation={2}
              sx={{
                p: 2,
                  backgroundColor: "#fff8f0",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
              }}
            >

              <Box>
                <Typography
                  sx={{
                    fontSize:"1.4rem",
                    wordBreak:"break-word"
                  }}
                >
                  {item.text}
                </Typography>

                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {item.name}
                </Typography>
              </Box>

              <IconButton
                onClick={()=>handleCopy(item.text)}
                sx={{
                  background:"#000",
                  color:"#fff",
                  "&:hover":{background:"#333"}
                }}
              >
                <ContentCopyIcon/>
              </IconButton>

            </Paper>

          </Grid>

        ))}

      </Grid>

      {/* <Grid container spacing={2} flexDirection={"column"} width={"100%"}>
        {styledFonts.map((font, i) => {
          ;
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
      </Grid> */}
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
