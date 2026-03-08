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
UpsideDown:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z"
},

UpsideDownAlt:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ɓ",h:"ɥ",i:"ı",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z"
},

 UpsideDownCaps:{
a:"∀",b:"𐐒",c:"Ɔ",d:"◖",e:"Ǝ",f:"Ⅎ",g:"פ",h:"H",i:"I",j:"ſ",
k:"⋊",l:"˥",m:"W",n:"N",o:"O",p:"Ԁ",q:"Ό",r:"ᴚ",s:"S",t:"⊥",
u:"∩",v:"Λ",w:"M",x:"X",y:"⅄",z:"Z"
},

UpsideDownClassic:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z"
},

UpsideDownRounded:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ı",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"ʂ",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"z"
},

UpsideDownIPA:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ɓ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"ʂ",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"ʐ"
},

UpsideDownWide:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"s",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"×",y:"ʎ",z:"z"
},

UpsideDownStylized:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"ֆ",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"ʐ"
},

UpsideDownGreekMix:{
a:"∀",b:"𐐒",c:"Ɔ",d:"◖",e:"Ǝ",f:"Ⅎ",g:"פ",h:"H",i:"I",j:"ſ",
k:"⋊",l:"˥",m:"W",n:"N",o:"O",p:"Ԁ",q:"Ό",r:"ᴚ",s:"S",t:"⊥",
u:"∩",v:"Λ",w:"M",x:"X",y:"⅄",z:"Z"
},

UpsideDownMirror:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"פ",h:"ɥ",i:"ᴉ",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"ѕ",t:"ʇ",
u:"n",v:"ʌ",w:"ʍ",x:"x",y:"ʎ",z:"ᴢ"
},

UpsideDownWideCaps:{
a:"∀",b:"𐐒",c:"Ɔ",d:"◖",e:"Ǝ",f:"Ⅎ",g:"⅁",h:"H",i:"I",j:"ſ",
k:"⋊",l:"˥",m:"W",n:"N",o:"O",p:"Ԁ",q:"Ό",r:"ᴚ",s:"S",t:"⊥",
u:"∩",v:"Λ",w:"M",x:"X",y:"⅄",z:"Z"
},

UpsideDownBlock:{
a:"ɐ",b:"q",c:"ɔ",d:"p",e:"ǝ",f:"ɟ",g:"ƃ",h:"ɥ",i:"ı",j:"ɾ",
k:"ʞ",l:"ן",m:"ɯ",n:"u",o:"o",p:"d",q:"b",r:"ɹ",s:"ꙅ",t:"ʇ",
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

export default function UpsideDown() {
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
        Upside Down Text Generator
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
     
     ꓵdsᴉpǝ ꓷoʍu ꓕǝxʇ
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our upside down text generator to design flipped text for your Instagram bio. Copy and paste 18+ upside down and backwards fonts to style your profile!

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
