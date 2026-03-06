import React, { useEffect, useState, useMemo } from "react";
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
  "✨",
  "🔥",
  "💖",
  "⭐",
  "🎉",
  "💫",
  "🌈",
  "🦋",
  "🌟",
  "🌸",
  "💎",
  "💥",
  "💞",
  "🖤",
  "🌻",
  "💐",
  "🎶",
  "🎀",
  "⚡",
  "🌹",
  "🌙",
  "💧",
];

const symbolSet = [
  "★",
  "☆",
  "✿",
  "❀",
  "✦",
  "❣",
  "☯",
  "☮",
  "♕",
  "♛",
  "♡",
  "♥",
  "♠",
  "♣",
  "♟",
  "ツ",
  "☾",
  "☀",
  "❆",
  "⚝",
  "∞",
  "✩",
];

const decorativeSet = [...emojiSet, ...symbolSet];

const styles = {
  Bold: {
    a: "𝗮",
    b: "𝗯",
    c: "𝗰",
    d: "𝗱",
    e: "𝗲",
    f: "𝗳",
    g: "𝗴",
    h: "𝗵",
    i: "𝗶",
    j: "𝗷",
    k: "𝗸",
    l: "𝗹",
    m: "𝗺",
    n: "𝗻",
    o: "𝗼",
    p: "𝗽",
    q: "𝗾",
    r: "𝗿",
    s: "𝘀",
    t: "𝘁",
    u: "𝘂",
    v: "𝘃",
    w: "𝘄",
    x: "𝘅",
    y: "𝘆",
    z: "𝘇",
  },

  Italic: {
    a: "𝘢",
    b: "𝘣",
    c: "𝘤",
    d: "𝘥",
    e: "𝘦",
    f: "𝘧",
    g: "𝘨",
    h: "𝘩",
    i: "𝘪",
    j: "𝘫",
    k: "𝘬",
    l: "𝘭",
    m: "𝘮",
    n: "𝘯",
    o: "𝘰",
    p: "𝘱",
    q: "𝘲",
    r: "𝘳",
    s: "𝘴",
    t: "𝘵",
    u: "𝘶",
    v: "𝘷",
    w: "𝘸",
    x: "𝘹",
    y: "𝘺",
    z: "𝘻",
  },

  Script: {
    a: "𝒶",
    b: "𝒷",
    c: "𝒸",
    d: "𝒹",
    e: "𝑒",
    f: "𝒻",
    g: "𝑔",
    h: "𝒽",
    i: "𝒾",
    j: "𝒿",
    k: "𝓀",
    l: "𝓁",
    m: "𝓂",
    n: "𝓃",
    o: "𝑜",
    p: "𝓅",
    q: "𝓆",
    r: "𝓇",
    s: "𝓈",
    t: "𝓉",
    u: "𝓊",
    v: "𝓋",
    w: "𝓌",
    x: "𝓍",
    y: "𝓎",
    z: "𝓏",
  },

  Monospace: {
    a: "𝚊",
    b: "𝚋",
    c: "𝚌",
    d: "𝚍",
    e: "𝚎",
    f: "𝚏",
    g: "𝚐",
    h: "𝚑",
    i: "𝚒",
    j: "𝚓",
    k: "𝚔",
    l: "𝚕",
    m: "𝚖",
    n: "𝚗",
    o: "𝚘",
    p: "𝚙",
    q: "𝚚",
    r: "𝚛",
    s: "𝚜",
    t: "𝚝",
    u: "𝚞",
    v: "𝚟",
    w: "𝚠",
    x: "𝚡",
    y: "𝚢",
    z: "𝚣",
  },
  SmallCaps: {
    a: "ᴀ",
    b: "ʙ",
    c: "ᴄ",
    d: "ᴅ",
    e: "ᴇ",
    f: "ғ",
    g: "ɢ",
    h: "ʜ",
    i: "ɪ",
    j: "ᴊ",
    k: "ᴋ",
    l: "ʟ",
    m: "ᴍ",
    n: "ɴ",
    o: "ᴏ",
    p: "ᴘ",
    q: "ǫ",
    r: "ʀ",
    s: "s",
    t: "ᴛ",
    u: "ᴜ",
    v: "ᴠ",
    w: "ᴡ",
    x: "x",
    y: "ʏ",
    z: "ᴢ",
  },

  Mirror: {
    a: "ɐ",
    b: "q",
    c: "ɔ",
    d: "p",
    e: "ǝ",
    f: "ɟ",
    g: "ɓ",
    h: "ɥ",
    i: "ᴉ",
    j: "ɾ",
    k: "ʞ",
    l: "l",
    m: "ɯ",
    n: "u",
    o: "o",
    p: "d",
    q: "b",
    r: "ɹ",
    s: "s",
    t: "ʇ",
    u: "n",
    v: "ʌ",
    w: "ʍ",
    x: "x",
    y: "ʎ",
    z: "z",
  },

  Fraktur: {
    a: "𝔞",
    b: "𝔟",
    c: "𝔠",
    d: "𝔡",
    e: "𝔢",
    f: "𝔣",
    g: "𝔤",
    h: "𝔥",
    i: "𝔦",
    j: "𝔧",
    k: "𝔨",
    l: "𝔩",
    m: "𝔪",
    n: "𝔫",
    o: "𝔬",
    p: "𝔭",
    q: "𝔮",
    r: "𝔯",
    s: "𝔰",
    t: "𝔱",
    u: "𝔲",
    v: "𝔳",
    w: "𝔴",
    x: "𝔵",
    y: "𝔶",
    z: "𝔷",
  },

  Double: {
    a: "𝕒𝕒",
    b: "𝕓𝕓",
    c: "𝕔𝕔",
    d: "𝕕𝕕",
    e: "𝕖𝕖",
    f: "𝕗𝕗",
    g: "𝕘𝕘",
    h: "𝕙𝕙",
    i: "𝕚𝕚",
    j: "𝕛𝕛",
    k: "𝕜𝕜",
    l: "𝕝𝕝",
    m: "𝕞𝕞",
    n: "𝕟𝕟",
    o: "𝕠𝕠",
    p: "𝕡𝕡",
    q: "𝕢𝕢",
    r: "𝕣𝕣",
    s: "𝕤𝕤",
    t: "𝕥𝕥",
    u: "𝕦𝕦",
    v: "𝕧𝕧",
    w: "𝕨𝕨",
    x: "𝕩𝕩",
    y: "𝕪𝕪",
    z: "𝕫𝕫",
  },
    Parenthesized:{
a:"⒜",b:"⒝",c:"⒞",d:"⒟",e:"⒠",f:"⒡",g:"⒢",h:"⒣",i:"⒤",j:"⒥",
k:"⒦",l:"⒧",m:"⒨",n:"⒩",o:"⒪",p:"⒫",q:"⒬",r:"⒭",s:"⒮",t:"⒯",
u:"⒰",v:"⒱",w:"⒲",x:"⒳",y:"⒴",z:"⒵"
},

Dotted:{
a:"ȧ",b:"ḃ",c:"ċ",d:"ḋ",e:"ė",f:"ḟ",g:"ġ",h:"ḣ",i:"i̇",j:"j̇",
k:"k̇",l:"l̇",m:"ṁ",n:"ṅ",o:"ȯ",p:"ṗ",q:"q̇",r:"ṙ",s:"ṡ",t:"ṫ",
u:"u̇",v:"v̇",w:"ẇ",x:"ẋ",y:"ẏ",z:"ż"
},

Wave:{
a:"a̴",b:"b̴",c:"c̴",d:"d̴",e:"e̴",f:"f̴",g:"g̴",h:"h̴",i:"i̴",j:"j̴",
k:"k̴",l:"l̴",m:"m̴",n:"n̴",o:"o̴",p:"p̴",q:"q̴",r:"r̴",s:"s̴",t:"t̴",
u:"u̴",v:"v̴",w:"w̴",x:"x̴",y:"y̴",z:"z̴"
},
Underline:{
a:"a̲",b:"b̲",c:"c̲",d:"d̲",e:"e̲",f:"f̲",g:"g̲",h:"h̲",i:"i̲",j:"j̲",
k:"k̲",l:"l̲",m:"m̲",n:"n̲",o:"o̲",p:"p̲",q:"q̲",r:"r̲",s:"s̲",t:"t̲",
u:"u̲",v:"v̲",w:"w̲",x:"x̲",y:"y̲",z:"z̲"
},
Superscript:{
a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"ʲ",
k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"ᑫ",r:"ʳ",s:"ˢ",t:"ᵗ",
u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ"
},
Greek:{
a:"α",b:"β",c:"ϲ",d:"δ",e:"ε",f:"ƒ",g:"ɣ",h:"η",i:"ι",j:"ϳ",
k:"κ",l:"λ",m:"μ",n:"ν",o:"ο",p:"ρ",q:"φ",r:"γ",s:"σ",t:"τ",
u:"υ",v:"ν",w:"ω",x:"χ",y:"γ",z:"ζ"
},
Leet:{
a:"4",b:"8",c:"(",d:"|)",e:"3",f:"ƒ",g:"6",h:"#",i:"1",j:"_|",
k:"|<",l:"1",m:"|\\/|",n:"|\\|",o:"0",p:"|*",q:"0_",r:"|2",s:"5",t:"7",
u:"|_|",v:"\\/",w:"\\/\\/",x:"><",y:"`/",z:"2"
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

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our Instagram font generator to level up your social media profiles.
        Copy and paste 299+ cool fonts to upgrade your Instagram, Discord, and
        Twitter bios!
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
                    fontSize: "1.4rem",
                    wordBreak: "break-word",
                  }}
                >
                  {item.text}
                </Typography>

                <Typography variant="caption" color="text.secondary">
                  {item.name}
                </Typography>
              </Box>

              <IconButton onClick={() => handleCopy(item.text)}>
                  <ContentCopyIcon />
                </IconButton>
            </Paper>
          </Grid>
        ))}
      </Grid>

    
    </Box>
  );
}

