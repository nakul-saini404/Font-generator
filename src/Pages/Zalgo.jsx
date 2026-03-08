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

// Zalgo characters (diacritics)
const zalgoUp = [
  "\u030d",
  "\u030e",
  "\u0304",
  "\u0305",
  "\u033f",
  "\u0311",
  "\u0306",
  "\u0310",
  "\u0352",
  "\u0357",
  "\u0351",
  "\u0307",
  "\u0308",
  "\u030a",
];

const zalgoMid = [
  "\u0315",
  "\u031b",
  "\u0340",
  "\u0341",
  "\u0358",
  "\u0321",
  "\u0322",
  "\u0327",
  "\u0328",
  "\u0334",
  "\u0335",
  "\u0336",
];

const zalgoDown = [
  "\u0316",
  "\u0317",
  "\u0318",
  "\u0319",
  "\u031c",
  "\u031d",
  "\u031e",
  "\u031f",
  "\u0320",
  "\u0324",
  "\u0325",
  "\u0326",
  "\u0330",
  "\u0331",
  "\u0332",
];

// Generate Zalgo text
const generateZalgo = (text, level = "medium") => {
  const levels = {
    level_1: 2,
    level_2: 4,
    level_3: 6,
    level_4: 8,
    level_5: 10,
    level_6: 14,
    level_7: 16,
    level_8: 18,
    level_9: 22,
    level_10: 25,
    level_11: 27,
    level_12: 30,
  };

  const count = levels[level] || 12;

  return text
    .split("")
    .map((ch) => {
      if (ch === " ") return ch;

      let newChar = ch;

      for (let i = 0; i < count; i++) {
        newChar += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
        newChar += zalgoMid[Math.floor(Math.random() * zalgoMid.length)];
        newChar += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
      }

      return newChar;
    })
    .join("");
};

export default function Zalgo() {
  const [text, setText] = useState("");
  const levels = ["Zalgo Level One", "Zalgo Level Two", "Zalgo Level Three", "Zalgo Level Four", "Zalgo Level Five", "Zalgo Level Six", "Zalgo Level Seven", "Zalgo Level Eight", "Zalgo Level Nime", "Zalgo Level Ten", "Zalgo Level Eleven", "Zalgo Level Tweleve"];

  const handleCopy = (txt) => {
    navigator.clipboard.writeText(txt);
    alert("Cursed text copied!");
  };

  return (
    <Box sx={{ p: 4, minHeight: "100vh", backgroundColor: "#F1F5F9" }}>
       <Typography
              variant="h3"
              fontWeight={700}
              textAlign="left"
              color="text.primary"
              textTransform={"uppercase"}
              pb={1}
            >
              Zalgo Text Generator
            </Typography>
      
            <Typography
              variant="h5"
              fontWeight={700}
              textAlign="left"
              color="text.primary"
              pb={1}
            >
             Z̺͐̐a̵͉̅͋̇l̝̙̎́g̬͖̣͉͛ͫͧͅoͣͦͮ͢͠ T̯̳̻̹͈̼͛̒͘͜͜e̴͎͟xͫͪ̓t̷̵̡̰͈̗͂ͣ͒
            </Typography>
      
            <Typography
              variant="subtitle1"
              color="text.secondary"
              textAlign="left"
              pb={1}
            >
              Use our Zalgo text generator to create glitch text for your social profile. Copy and paste the destroyed text to add a creepy and cursed flair to your accounts!
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
        {levels.map((level, i) => {
          const output = generateZalgo(text, level);

          return (
            <Grid size={{ xs: 12 }} key={i}>
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "1.3rem", pb: 3 }}>
                    {output || "Type something..."}
                  </Typography>
                  <Typography color="gray">
                    {level.charAt(0).toUpperCase() + level.slice(1)} 
                  </Typography>
                </Box>

                <IconButton onClick={() => handleCopy(output)}>
                  <ContentCopyIcon />
                </IconButton>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
