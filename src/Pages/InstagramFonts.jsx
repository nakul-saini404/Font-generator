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

export default function InstagramFonts() {
  const [text, setText] = useState("");

  const handleCopy = (fontText) => {
    navigator.clipboard.writeText(fontText);
    alert("Copied to clipboard!");
  };

  const items = Array(4).fill(null);

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
      <Grid container 
        spacing={3}
        flexDirection={"column"}
        width={"100%"}
        // justifyContent="center"
        // alignItems={"center"}
        >
        
        {items.map((_, i) => (
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
      </Grid>
    </Box>
  );
}
