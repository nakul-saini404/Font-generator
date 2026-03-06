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

const styles = {
SmallCaps:{
a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ғ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",
k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",s:"s",t:"ᴛ",
u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ"
},

  Circled:{
a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",
k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",
u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"
},

 BlackCircle:{
a:"🅐",b:"🅑",c:"🅒",d:"🅓",e:"🅔",f:"🅕",g:"🅖",h:"🅗",i:"🅘",j:"🅙",
k:"🅚",l:"🅛",m:"🅜",n:"🅝",o:"🅞",p:"🅟",q:"🅠",r:"🅡",s:"🅢",t:"🅣",
u:"🅤",v:"🅥",w:"🅦",x:"🅧",y:"🅨",z:"🅩"
},

  DoubleStruck:{
a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",
k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",
u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
},

Boxed:{
a:"🄰",b:"🄱",c:"🄲",d:"🄳",e:"🄴",f:"🄵",g:"🄶",h:"🄷",i:"🄸",j:"🄹",
k:"🄺",l:"🄻",m:"🄼",n:"🄽",o:"🄾",p:"🄿",q:"🅀",r:"🅁",s:"🅂",t:"🅃",
u:"🅄",v:"🅅",w:"🅆",x:"🅇",y:"🅈",z:"🅉"
},

 Wide:{
a:"ａ",b:"ｂ",c:"ｃ",d:"ｄ",e:"ｅ",f:"ｆ",g:"ｇ",h:"ｈ",i:"ｉ",j:"ｊ",
k:"ｋ",l:"ｌ",m:"ｍ",n:"ｎ",o:"ｏ",p:"ｐ",q:"ｑ",r:"ｒ",s:"ｓ",t:"ｔ",
u:"ｕ",v:"ｖ",w:"ｗ",x:"ｘ",y:"ｙ",z:"ｚ"
},

 DoubleStruck:{
a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",
k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",
u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
},


 Bubble:{
a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",
k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",
u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"
},

UpsideDown:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"l",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z"
},

  SansBold: {
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

Vintage:{
a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",j:"𝖏",
k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",
u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"
},


 Swanky:{
a:"α",b:"Ⴆ",c:"ƈ",d:"ԃ",e:"ҽ",f:"ϝ",g:"ɠ",h:"ԋ",i:"ι",j:"ʝ",
k:"ƙ",l:"ʅ",m:"ɱ",n:"ɳ",o:"σ",p:"ρ",q:"զ",r:"ɾ",s:"ʂ",t:"ƚ",
u:"υ",v:"ʋ",w:"ɯ",x:"x",y:"ყ",z:"ȥ"
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

export default function facebook() {
  const [text, setText] = useState("");

  const styledFonts = useMemo(() => {
  return Object.entries(styles).map(([name, map]) => {
    const unicode = convert(text || "Type something...", map);

    return {
      name,
      text: unicode,
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
        Facebook Font Generator
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
        𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔 𝙵𝚘𝚗𝚝𝚜
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our Facebook font generator to level up your social media profiles. Copy and paste 276+ cool fonts to upgrade your Facebook, TikTok, and WhatsApp bios!
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

              <IconButton
                onClick={() => handleCopy(item.text)}
                
              >
                <ContentCopyIcon />
              </IconButton>
              
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
