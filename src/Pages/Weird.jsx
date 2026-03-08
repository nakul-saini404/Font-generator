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
WeirdSmallCaps:{
a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ꜰ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",
k:"ᴋ",l:"ʟ",m:"ᴍ",n:"ɴ",o:"ᴏ",p:"ᴘ",q:"ǫ",r:"ʀ",s:"ꜱ",t:"ᴛ",
u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ"
},

WeirdSuperscript:{
a:"ᵃ",b:"ᵇ",c:"ᶜ",d:"ᵈ",e:"ᵉ",f:"ᶠ",g:"ᵍ",h:"ʰ",i:"ⁱ",j:"ʲ",
k:"ᵏ",l:"ˡ",m:"ᵐ",n:"ⁿ",o:"ᵒ",p:"ᵖ",q:"ᵠ",r:"ʳ",s:"ˢ",t:"ᵗ",
u:"ᵘ",v:"ᵛ",w:"ʷ",x:"ˣ",y:"ʸ",z:"ᶻ"
},

WeirdSquared:{
a:"🄰",b:"🄱",c:"🄲",d:"🄳",e:"🄴",f:"🄵",g:"🄶",h:"🄷",i:"🄸",j:"🄹",
k:"🄺",l:"🄻",m:"🄼",n:"🄽",o:"🄾",p:"🄿",q:"🅀",r:"🅁",s:"🅂",t:"🅃",
u:"🅄",v:"🅅",w:"🅆",x:"🅇",y:"🅈",z:"🅉"
},

WeirdBold:{
a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",
k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",
u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳"
},

WeirdItalic:{
a:"𝑎",b:"𝑏",c:"𝑐",d:"𝑑",e:"𝑒",f:"𝑓",g:"𝑔",h:"ℎ",i:"𝑖",j:"𝑗",
k:"𝑘",l:"𝑙",m:"𝑚",n:"𝑛",o:"𝑜",p:"𝑝",q:"𝑞",r:"𝑟",s:"𝑠",t:"𝑡",
u:"𝑢",v:"𝑣",w:"𝑤",x:"𝑥",y:"𝑦",z:"𝑧"
},

WeirdBubble:{
a:"Ⓐ",b:"Ⓑ",c:"Ⓒ",d:"Ⓓ",e:"Ⓔ",f:"Ⓕ",g:"Ⓖ",h:"Ⓗ",i:"Ⓘ",j:"Ⓙ",
k:"Ⓚ",l:"Ⓛ",m:"Ⓜ",n:"Ⓝ",o:"Ⓞ",p:"Ⓟ",q:"Ⓠ",r:"Ⓡ",s:"Ⓢ",t:"Ⓣ",
u:"Ⓤ",v:"Ⓥ",w:"Ⓦ",x:"Ⓧ",y:"Ⓨ",z:"Ⓩ"
},

WeirdDoubleStruck:{
a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",i:"𝕚",j:"𝕛",
k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",
u:"𝕦",v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
},

WeirdWide:{
a:"ａ",b:"ｂ",c:"ｃ",d:"ｄ",e:"ｅ",f:"ｆ",g:"ｇ",h:"ｈ",i:"ｉ",j:"ｊ",
k:"ｋ",l:"ｌ",m:"ｍ",n:"ｎ",o:"ｏ",p:"ｐ",q:"ｑ",r:"ｒ",s:"ｓ",t:"ｔ",
u:"ｕ",v:"ｖ",w:"ｗ",x:"ｘ",y:"ｙ",z:"ｚ"
},

WeirdMathSymbols:{
a:"∆",b:"ß",c:"¢",d:"∂",e:"∑",f:"ƒ",g:"ɢ",h:"ħ",i:"ɨ",j:"ʝ",
k:"ҡ",l:"ℓ",m:"ɱ",n:"ɳ",o:"ø",p:"ρ",q:"զ",r:"ʀ",s:"ֆ",t:"ƭ",
u:"ʊ",v:"ʋ",w:"ω",x:"χ",y:"γ",z:"ʐ"
},

WeirdAlien:{
a:"λ",b:"ß",c:"₡",d:"Đ",e:"€",f:"₣",g:"₲",h:"Ħ",i:"ł",j:"J",
k:"Ҡ",l:"Ł",m:"₥",n:"₦",o:"Ø",p:"₱",q:"Q",r:"₹",s:"§",t:"₮",
u:"Ʉ",v:"V",w:"₩",x:"Ж",y:"¥",z:"Ƶ"
},

WeirdGreekMix:{
a:"α",b:"β",c:"¢",d:"∂",e:"ε",f:"ƒ",g:"ɠ",h:"η",i:"ι",j:"ʝ",
k:"κ",l:"ℓ",m:"м",n:"η",o:"σ",p:"ρ",q:"φ",r:"я",s:"ѕ",t:"т",
u:"υ",v:"ν",w:"ω",x:"χ",y:"γ",z:"ζ"
},

QuickMaths:{
a:"⍲",b:"⍧",c:"☾",d:"⌗",e:"⍟",f:"⎎",g:"⌬",h:"ℍ",i:"⟟",j:"⌿",
k:"⎍",l:"⌰",m:"⍓",n:"⋏",o:"⍜",p:"⍴",q:"ℚ",r:"⍑",s:"⌇",t:"⏧",
u:"⎍",v:"⩔",w:"⍵",x:"⨯",y:"⍲",z:"⋔"
},

Slither:{
a:"ɒ",b:"d",c:"ɔ",d:"p",e:"ɘ",f:"ʇ",g:"ɓ",h:"ʜ",i:"i",j:"ɾ",
k:"ʞ",l:"|",m:"ɯ",n:"ᴎ",o:"o",p:"q",q:"p",r:"ɿ",s:"ꙅ",t:"ƚ",
u:"n",v:"ʌ",w:"w",x:"x",y:"ʏ",z:"z"
},

OddFellows:{
a:"𝖆⃤",b:"𝖇⃤",c:"𝖈⃤",d:"𝖉⃤",e:"𝖊⃤",f:"𝖋⃤",g:"𝖌⃤",h:"𝖍⃤",i:"𝖎⃤",
j:"𝖏⃤",k:"𝖐⃤",l:"𝖑⃤",m:"𝖒⃤",n:"𝖓⃤",o:"𝖔⃤",p:"𝖕⃤",q:"𝖖⃤",
r:"𝖗⃤",s:"𝖘⃤",t:"𝖙⃤",u:"𝖚⃤",v:"𝖛⃤",w:"𝖜⃤",x:"𝖝⃤",y:"𝖞⃤",z:"𝖟⃤"
},

RosettaStone:{
a:"𐌀",b:"𐌁",c:"𐌂",d:"𐌃",e:"𐌄",f:"𐌅",g:"𐌆",h:"𐌇",
i:"𐌉",j:"𐌊",k:"𐌋",l:"𐌋",m:"𐌌",n:"𐌍",o:"𐌏",p:"𐌐",
q:"𐌒",r:"𐌓",s:"𐌔",t:"𐌕",u:"𐌖",v:"𐌗",w:"𐌘",x:"𐌙",
y:"𐌚",z:"𐌛"
},

FlipFlop:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ı",
j:"ɾ",k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",
s:"s",t:"ʇ",u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z"
},

AllWays:{
a:"ꜛᴀ͎ꜜ",b:"ꜛʙ͎ꜜ",c:"ꜛᴄ͎ꜜ",d:"ꜛᴅ͎ꜜ",e:"ꜛᴇ͎ꜜ",f:"ꜛғ͎ꜜ",
g:"ꜛɢ͎ꜜ",h:"ꜛʜ͎ꜜ",i:"ꜛɪ͎ꜜ",j:"ꜛᴊ͎ꜜ",k:"ꜛᴋ͎ꜜ",l:"ꜛʟ͎ꜜ",
m:"ꜛᴍ͎ꜜ",n:"ꜛɴ͎ꜜ",o:"ꜛᴏ͎ꜜ",p:"ꜛᴘ͎ꜜ",q:"ꜛǫ͎ꜜ",r:"ꜛʀ͎ꜜ",
s:"ꜛs͎ꜜ",t:"ꜛᴛ͎ꜜ",u:"ꜛᴜ͎ꜜ",v:"ꜛᴠ͎ꜜ",w:"ꜛᴡ͎ꜜ",x:"ꜛx͎ꜜ",
y:"ꜛʏ͎ꜜ",z:"ꜛᴢ͎ꜜ"
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

export default function Weird() {
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
       Weird Text Generator
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
     
     ⏙ℇ⟟☈⟄ ⍑ℇ🝍⍑

      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our weird text generator to design fancy text for your social media accounts. Copy and paste 299+ cool fonts to upgrade your WhatsApp or Facebook status!
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
