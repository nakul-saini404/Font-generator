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

const styles = {
AllCapsLock:{
a:"A",b:"B",c:"C",d:"D",e:"E",f:"F",g:"G",h:"H",i:"I",j:"J",
k:"K",l:"L",m:"M",n:"N",o:"O",p:"P",q:"Q",r:"R",s:"S",t:"T",
u:"U",v:"V",w:"W",x:"X",y:"Y",z:"Z"
},

UpText:{
a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"ʲ",
k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"ᵠ",r:"ʳ",s:"ˢ",t:"ᵗ",
u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ"
},

 WrWText:{
a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",
k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",s:"ꜱ",t:"ᴛ",
u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ"
},

Circled:{
a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",
k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",
u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ"
},

Parenthesized:{
a:"⒜",b:"⒝",c:"⒞",d:"⒟",e:"⒠",f:"⒡",g:"⒢",h:"⒣",i:"⒤",j:"⒥",
k:"⒦",l:"⒧",m:"⒨",n:"⒩",o:"⒪",p:"⒫",q:"⒬",r:"⒭",s:"⒮",t:"⒯",
u:"⒰",v:"⒱",w:"⒲",x:"⒳",y:"⒴",z:"⒵"
},

Squared:{
a:"🄰",b:"🄱",c:"🄲",d:"🄳",e:"🄴",f:"🄵",g:"🄶",h:"🄷",i:"🄸",j:"🄹",
k:"🄺",l:"🄻",m:"🄼",n:"🄽",o:"🄾",p:"🄿",q:"🅀",r:"🅁",s:"🅂",t:"🅃",
u:"🅄",v:"🅅",w:"🅆",x:"🅇",y:"🅈",z:"🅉"
},

StraightJacket:{
a:"a ",b:"b ",c:"c ",d:"d ",e:"e ",f:"f ",g:"g ",h:"h ",i:"i ",j:"j ",
k:"k ",l:"l ",m:"m ",n:"n ",o:"o ",p:"p ",q:"q ",r:"r ",s:"s ",t:"t ",
u:"u ",v:"v ",w:"w ",x:"x ",y:"y ",z:"z "
},

MiniMe:{
a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"ʲ",
k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"ᵠ",r:"ʳ",s:"ˢ",t:"ᵗ",
u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ"
},


Feather:{
a:"a·",b:"b·",c:"c·",d:"d·",e:"e·",f:"f·",g:"g·",h:"h·",i:"i·",j:"j·",
k:"k·",l:"l·",m:"m·",n:"n·",o:"o·",p:"p·",q:"q·",r:"r·",s:"s·",t:"t·",
u:"u·",v:"v·",w:"w·",x:"x·",y:"y·",z:"z·"
},

UpsideDown:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"l",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z"
},

StrikeThrough:{
a:"a̶",b:"b̶",c:"c̶",d:"d̶",e:"e̶",f:"f̶",g:"g̶",h:"h̶",i:"i̶",j:"j̶",
k:"k̶",l:"l̶",m:"m̶",n:"n̶",o:"o̶",p:"p̶",q:"q̶",r:"r̶",s:"s̶",t:"t̶",
u:"u̶",v:"v̶",w:"w̶",x:"x̶",y:"y̶",z:"z̶"
},

Vintage:{
a:"𝖆",b:"𝖇",c:"𝖈",d:"𝖉",e:"𝖊",f:"𝖋",g:"𝖌",h:"𝖍",i:"𝖎",j:"𝖏",
k:"𝖐",l:"𝖑",m:"𝖒",n:"𝖓",o:"𝖔",p:"𝖕",q:"𝖖",r:"𝖗",s:"𝖘",t:"𝖙",
u:"𝖚",v:"𝖛",w:"𝖜",x:"𝖝",y:"𝖞",z:"𝖟"
},

CarriageReturn:{
a:"a\n",b:"b\n",c:"c\n",d:"d\n",e:"e\n",f:"f\n",g:"g\n",h:"h\n",i:"i\n",j:"j\n",
k:"k\n",l:"l\n",m:"m\n",n:"n\n",o:"o\n",p:"p\n",q:"q\n",r:"r\n",s:"s\n",t:"t\n",
u:"u\n",v:"v\n",w:"w\n",x:"x\n",y:"y\n",z:"z\n"
},


FancyItalic:{
a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",h:"𝒉",i:"𝒊",j:"𝒋",
k:"𝒌",l:"𝒍",m:"𝒎",n:"𝒏",o:"𝒐",p:"𝒑",q:"𝒒",r:"𝒓",s:"𝒔",t:"𝒕",
u:"𝒖",v:"𝒗",w:"𝒘",x:"𝒙",y:"𝒚",z:"𝒛"
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
},

FlipText:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z"
},

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

export default function Small() {
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
        backgroundColor: "#F1F5F9",
        minHeight: "auto",
        p: 2,
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
        Small Text Generator
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
       ꜱᴍᴀʟʟ ᴛᴇxᴛ
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our small text generator to design tiny text for your social media accounts. Copy and paste small caps, subscript, and superscript fonts to style your profile!
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
        {styledFonts.map((item, i) => (
          <Grid size={{ xs: 12 }} key={i}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                backgroundColor: "#FFFFFF",
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
