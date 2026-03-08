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
Underline:{
a:"a̲",b:"b̲",c:"c̲",d:"d̲",e:"e̲",f:"f̲",g:"g̲",h:"h̲",i:"i̲",j:"j̲",
k:"k̲",l:"l̲",m:"m̲",n:"n̲",o:"o̲",p:"p̲",q:"q̲",r:"r̲",s:"s̲",t:"t̲",
u:"u̲",v:"v̲",w:"w̲",x:"x̲",y:"y̲",z:"z̲"
},

DoubleUnderline:{
a:"a̳",b:"b̳",c:"c̳",d:"d̳",e:"e̳",f:"f̳",g:"g̳",h:"h̳",i:"i̳",j:"j̳",
k:"k̳",l:"l̳",m:"m̳",n:"n̳",o:"o̳",p:"p̳",q:"q̳",r:"r̳",s:"s̳",t:"t̳",
u:"u̳",v:"v̳",w:"w̳",x:"x̳",y:"y̳",z:"z̳"
},

DashedUnderline:{
a:"a﹍",b:"b﹍",c:"c﹍",d:"d﹍",e:"e﹍",f:"f﹍",g:"g﹍",h:"h﹍",i:"i﹍",j:"j﹍",
k:"k﹍",l:"l﹍",m:"m﹍",n:"n﹍",o:"o﹍",p:"p﹍",q:"q﹍",r:"r﹍",s:"s﹍",t:"t﹍",
u:"u﹍",v:"v﹍",w:"w﹍",x:"x﹍",y:"y﹍",z:"z﹍"
},

HeavyUnderline:{
a:"a﹏",b:"b﹏",c:"c﹏",d:"d﹏",e:"e﹏",f:"f﹏",g:"g﹏",h:"h﹏",i:"i﹏",j:"j﹏",
k:"k﹏",l:"l﹏",m:"m﹏",n:"n﹏",o:"o﹏",p:"p﹏",q:"q﹏",r:"r﹏",s:"s﹏",t:"t﹏",
u:"u﹏",v:"v﹏",w:"w﹏",x:"x﹏",y:"y﹏",z:"z﹏"
},

Overline:{
a:"a̅",b:"b̅",c:"c̅",d:"d̅",e:"e̅",f:"f̅",g:"g̅",h:"h̅",i:"i̅",j:"j̅",
k:"k̅",l:"l̅",m:"m̅",n:"n̅",o:"o̅",p:"p̅",q:"q̅",r:"r̅",s:"s̅",t:"t̅",
u:"u̅",v:"v̅",w:"w̅",x:"x̅",y:"y̅",z:"z̅"
},

TripleUnderline:{
a:"a̲̲̲",b:"b̲̲̲",c:"c̲̲̲",d:"d̲̲̲",e:"e̲̲̲",f:"f̲̲̲",g:"g̲̲̲",h:"h̲̲̲",i:"i̲̲̲",j:"j̲̲̲",
k:"k̲̲̲",l:"l̲̲̲",m:"m̲̲̲",n:"n̲̲̲",o:"o̲̲̲",p:"p̲̲̲",q:"q̲̲̲",r:"r̲̲̲",s:"s̲̲̲",t:"t̲̲̲",
u:"u̲̲̲",v:"v̲̲̲",w:"w̲̲̲",x:"x̲̲̲",y:"y̲̲̲",z:"z̲̲̲"
},

WavyUnderline:{
a:"a̰",b:"b̰",c:"c̰",d:"d̰",e:"ḛ",f:"f̰",g:"g̰",h:"h̰",i:"ḭ",j:"j̰",
k:"k̰",l:"l̰",m:"m̰",n:"n̰",o:"o̰",p:"p̰",q:"q̰",r:"r̰",s:"s̰",t:"t̰",
u:"ṵ",v:"v̰",w:"w̰",x:"x̰",y:"y̰",z:"z̰"
},

DotUnderline:{
a:"ạ",b:"ḅ",c:"c̣",d:"ḍ",e:"ẹ",f:"f̣",g:"g̣",h:"ḥ",i:"ị",j:"j̣",
k:"ḳ",l:"ḷ",m:"ṃ",n:"ṇ",o:"ọ",p:"p̣",q:"q̣",r:"ṛ",s:"ṣ",t:"ṭ",
u:"ụ",v:"ṿ",w:"ẉ",x:"x̣",y:"ỵ",z:"ẓ"
},


RingUnderline:{
a:"ḁ",b:"b̥",c:"c̥",d:"d̥",e:"e̥",f:"f̥",g:"g̥",h:"h̥",i:"i̥",j:"j̥",
k:"k̥",l:"l̥",m:"m̥",n:"n̥",o:"o̥",p:"p̥",q:"q̥",r:"r̥",s:"s̥",t:"t̥",
u:"u̥",v:"v̥",w:"w̥",x:"x̥",y:"y̥",z:"z̥"
},

LineDotUnderline:{
a:"a̲̣",b:"b̲̣",c:"c̲̣",d:"d̲̣",e:"e̲̣",f:"f̲̣",g:"g̲̣",h:"h̲̣",i:"i̲̣",j:"j̲̣",
k:"k̲̣",l:"l̲̣",m:"m̲̣",n:"n̲̣",o:"o̲̣",p:"p̲̣",q:"q̲̣",r:"r̲̣",s:"s̲̣",t:"t̲̣",
u:"u̲̣",v:"v̲̣",w:"w̲̣",x:"x̲̣",y:"y̲̣",z:"z̲̣"
},

BoxUnderline:{
a:"a̻",b:"b̻",c:"c̻",d:"d̻",e:"e̻",f:"f̻",g:"g̻",h:"h̻",i:"i̻",j:"j̻",
k:"k̻",l:"l̻",m:"m̻",n:"n̻",o:"o̻",p:"p̻",q:"q̻",r:"r̻",s:"s̻",t:"t̻",
u:"u̻",v:"v̻",w:"w̻",x:"x̻",y:"y̻",z:"z̻"
},

ZigZagUnderline:{
a:"a̺",b:"b̺",c:"c̺",d:"d̺",e:"e̺",f:"f̺",g:"g̺",h:"h̺",i:"i̺",j:"j̺",
k:"k̺",l:"l̺",m:"m̺",n:"n̺",o:"o̺",p:"p̺",q:"q̺",r:"r̺",s:"s̺",t:"t̺",
u:"u̺",v:"v̺",w:"w̺",x:"x̺",y:"y̺",z:"z̺"
},

MacronUnderline:{
a:"a̱",b:"ḇ",c:"c̱",d:"ḏ",e:"e̱",f:"f̱",g:"g̱",h:"ẖ",i:"i̱",j:"j̱",
k:"ḵ",l:"ḻ",m:"m̱",n:"ṉ",o:"o̱",p:"p̱",q:"q̱",r:"ṟ",s:"s̱",t:"ṯ",
u:"u̱",v:"v̱",w:"w̱",x:"x̱",y:"y̱",z:"ẕ"
},

VerticalLineUnderline:{
a:"a̩",b:"b̩",c:"c̩",d:"d̩",e:"e̩",f:"f̩",g:"g̩",h:"h̩",i:"i̩",j:"j̩",
k:"k̩",l:"l̩",m:"m̩",n:"n̩",o:"o̩",p:"p̩",q:"q̩",r:"r̩",s:"s̩",t:"t̩",
u:"u̩",v:"v̩",w:"w̩",x:"x̩",y:"y̩",z:"z̩"
},

BridgeUnderline:{
a:"a̪",b:"b̪",c:"c̪",d:"d̪",e:"e̪",f:"f̪",g:"g̪",h:"h̪",i:"i̪",j:"j̪",
k:"k̪",l:"l̪",m:"m̪",n:"n̪",o:"o̪",p:"p̪",q:"q̪",r:"r̪",s:"s̪",t:"t̪",
u:"u̪",v:"v̪",w:"w̪",x:"x̪",y:"y̪",z:"z̪"
},

InvertedBridgeUnderline:{
a:"a̺",b:"b̺",c:"c̺",d:"d̺",e:"e̺",f:"f̺",g:"g̺",h:"h̺",i:"i̺",j:"j̺",
k:"k̺",l:"l̺",m:"m̺",n:"n̺",o:"o̺",p:"p̺",q:"q̺",r:"r̺",s:"s̺",t:"t̺",
u:"u̺",v:"v̺",w:"w̺",x:"x̺",y:"y̺",z:"z̺"
}, 

SquareUnderline:{
a:"a̻",b:"b̻",c:"c̻",d:"d̻",e:"e̻",f:"f̻",g:"g̻",h:"h̻",i:"i̻",j:"j̻",
k:"k̻",l:"l̻",m:"m̻",n:"n̻",o:"o̻",p:"p̻",q:"q̻",r:"r̻",s:"s̻",t:"t̻",
u:"u̻",v:"v̻",w:"w̻",x:"x̻",y:"y̻",z:"z̻"
},

SeagullUnderline:{
a:"a̼",b:"b̼",c:"c̼",d:"d̼",e:"e̼",f:"f̼",g:"g̼",h:"h̼",i:"i̼",j:"j̼",
k:"k̼",l:"l̼",m:"m̼",n:"n̼",o:"o̼",p:"p̼",q:"q̼",r:"r̼",s:"s̼",t:"t̼",
u:"u̼",v:"v̼",w:"w̼",x:"x̼",y:"y̼",z:"z̼"
},

SeagullUnderline:{
a:"a̼",b:"b̼",c:"c̼",d:"d̼",e:"e̼",f:"f̼",g:"g̼",h:"h̼",i:"i̼",j:"j̼",
k:"k̼",l:"l̼",m:"m̼",n:"n̼",o:"o̼",p:"p̼",q:"q̼",r:"r̼",s:"s̼",t:"t̼",
u:"u̼",v:"v̼",w:"w̼",x:"x̼",y:"y̼",z:"z̼"
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

export default function Underline() {
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
        Underline Text Generator
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        textAlign="left"
        color="text.primary"
        pb={1}
      >
       Underline Text
      </Typography>

      <Typography
        variant="subtitle1"
        color="text.secondary"
        textAlign="left"
        pb={1}
      >
        Use our underline text generator to design stylish fonts for your social media accounts. Copy and paste 29+ underline text fonts to style your profile!
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
