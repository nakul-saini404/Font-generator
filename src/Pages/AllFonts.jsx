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

  BoldFraktur: {
    a: "𝖆",
    b: "𝖇",
    c: "𝖈",
    d: "𝖉",
    e: "𝖊",
    f: "𝖋",
    g: "𝖌",
    h: "𝖍",
    i: "𝖎",
    j: "𝖏",
    k: "𝖐",
    l: "𝖑",
    m: "𝖒",
    n: "𝖓",
    o: "𝖔",
    p: "𝖕",
    q: "𝖖",
    r: "𝖗",
    s: "𝖘",
    t: "𝖙",
    u: "𝖚",
    v: "𝖛",
    w: "𝖜",
    x: "𝖝",
    y: "𝖞",
    z: "𝖟",
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

  Sans: {
    a: "𝖺",
    b: "𝖻",
    c: "𝖼",
    d: "𝖽",
    e: "𝖾",
    f: "𝖿",
    g: "𝗀",
    h: "𝗁",
    i: "𝗂",
    j: "𝗃",
    k: "𝗄",
    l: "𝗅",
    m: "𝗆",
    n: "𝗇",
    o: "𝗈",
    p: "𝗉",
    q: "𝗊",
    r: "𝗋",
    s: "𝗌",
    t: "𝗍",
    u: "𝗎",
    v: "𝗏",
    w: "𝗐",
    x: "𝗑",
    y: "𝗒",
    z: "𝗓",
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

  SansItalic: {
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

  COOL_1: {
    a: "卂",
    b: "乃",
    c: "匚",
    d: "刀",
    e: "乇",
    f: "下",
    g: "厶",
    h: "卄",
    i: "丨",
    j: "ﾌ",
    k: "长",
    l: "乚",
    m: "爪",
    n: "几",
    o: "回",
    p: "卩",
    q: "Ɋ",
    r: "尺",
    s: "丂",
    t: "丅",
    u: "凵",
    v: "ᐯ",
    w: "山",
    x: "乂",
    y: "ㄚ",
    z: "乙",
  },

  Circle: {
    a: "ⓐ",
    b: "ⓑ",
    c: "ⓒ",
    d: "ⓓ",
    e: "ⓔ",
    f: "ⓕ",
    g: "ⓖ",
    h: "ⓗ",
    i: "ⓘ",
    j: "ⓙ",
    k: "ⓚ",
    l: "ⓛ",
    m: "ⓜ",
    n: "ⓝ",
    o: "ⓞ",
    p: "ⓟ",
    q: "ⓠ",
    r: "ⓡ",
    s: "ⓢ",
    t: "ⓣ",
    u: "ⓤ",
    v: "ⓥ",
    w: "ⓦ",
    x: "ⓧ",
    y: "ⓨ",
    z: "ⓩ",
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
},
ShortStrike:{
a:"a̵",b:"b̵",c:"c̵",d:"d̵",e:"e̵",f:"f̵",g:"g̵",h:"h̵",i:"i̵",j:"j̵",
k:"k̵",l:"l̵",m:"m̵",n:"n̵",o:"o̵",p:"p̵",q:"q̵",r:"r̵",s:"s̵",t:"t̵",
u:"u̵",v:"v̵",w:"w̵",x:"x̵",y:"y̵",z:"z̵"
},

 SlashStrike:{
a:"a̷",b:"b̷",c:"c̷",d:"d̷",e:"e̷",f:"f̷",g:"g̷",h:"h̷",i:"i̷",j:"j̷",
k:"k̷",l:"l̷",m:"m̷",n:"n̷",o:"o̷",p:"p̷",q:"q̷",r:"r̷",s:"s̷",t:"t̷",
u:"u̷",v:"v̷",w:"w̷",x:"x̷",y:"y̷",z:"z̷"
},

DoubleStrike:{
a:"a̶̶",b:"b̶̶",c:"c̶̶",d:"d̶̶",e:"e̶̶",f:"f̶̶",g:"g̶̶",h:"h̶̶",i:"i̶̶",j:"j̶̶",
k:"k̶̶",l:"l̶̶",m:"m̶̶",n:"n̶̶",o:"o̶̶",p:"p̶̶",q:"q̶̶",r:"r̶̶",s:"s̶̶",t:"t̶̶",
u:"u̶̶",v:"v̶̶",w:"w̶̶",x:"x̶̶",y:"y̶̶",z:"z̶̶"
},

HeavyStrike:{
a:"a̸",b:"b̸",c:"c̸",d:"d̸",e:"e̸",f:"f̸",g:"g̸",h:"h̸",i:"i̸",j:"j̸",
k:"k̸",l:"l̸",m:"m̸",n:"n̸",o:"o̸",p:"p̸",q:"q̸",r:"r̸",s:"s̸",t:"t̸",
u:"u̸",v:"v̸",w:"w̸",x:"x̸",y:"y̸",z:"z̸"
},

DotStrike:{
a:"a̴",b:"b̴",c:"c̴",d:"d̴",e:"e̴",f:"f̴",g:"g̴",h:"h̴",i:"i̴",j:"j̴",
k:"k̴",l:"l̴",m:"m̴",n:"n̴",o:"o̴",p:"p̴",q:"q̴",r:"r̴",s:"s̴",t:"t̴",
u:"u̴",v:"v̴",w:"w̴",x:"x̴",y:"y̴",z:"z̴"
},

DoubleUnderlineStrike:{
a:"a̳",b:"b̳",c:"c̳",d:"d̳",e:"e̳",f:"f̳",g:"g̳",h:"h̳",i:"i̳",j:"j̳",
k:"k̳",l:"l̳",m:"m̳",n:"n̳",o:"o̳",p:"p̳",q:"q̳",r:"r̳",s:"s̳",t:"t̳",
u:"u̳",v:"v̳",w:"w̳",x:"x̳",y:"y̳",z:"z̳"
},

UnderlineStrike:{
a:"a̲",b:"b̲",c:"c̲",d:"d̲",e:"e̲",f:"f̲",g:"g̲",h:"h̲",i:"i̲",j:"j̲",
k:"k̲",l:"l̲",m:"m̲",n:"n̲",o:"o̲",p:"p̲",q:"q̲",r:"r̲",s:"s̲",t:"t̲",
u:"u̲",v:"v̲",w:"w̲",x:"x̲",y:"y̲",z:"z̲"
},


Overline:{
a:"a̅",b:"b̅",c:"c̅",d:"d̅",e:"e̅",f:"f̅",g:"g̅",h:"h̅",i:"i̅",j:"j̅",
k:"k̅",l:"l̅",m:"m̅",n:"n̅",o:"o̅",p:"p̅",q:"q̅",r:"r̅",s:"s̅",t:"t̅",
u:"u̅",v:"v̅",w:"w̅",x:"x̅",y:"y̅",z:"z̅"
},
ZigZagUnderline:{
a:"a̺",b:"b̺",c:"c̺",d:"d̺",e:"e̺",f:"f̺",g:"g̺",h:"h̺",i:"i̺",j:"j̺",
k:"k̺",l:"l̺",m:"m̺",n:"n̺",o:"o̺",p:"p̺",q:"q̺",r:"r̺",s:"s̺",t:"t̺",
u:"u̺",v:"v̺",w:"w̺",x:"x̺",y:"y̺",z:"z̺"
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

NegativeSquared:{
a:"🅰",b:"🅱",c:"🅲",d:"🅳",e:"🅴",f:"🅵",g:"🅶",h:"🅷",i:"🅸",j:"🅹",
k:"🅺",l:"🅻",m:"🅼",n:"🅽",o:"🅾",p:"🅿",q:"🆀",r:"🆁",s:"🆂",t:"🆃",
u:"🆄",v:"🆅",w:"🆆",x:"🆇",y:"🆈",z:"🆉"
},

NegativeCircled:{
a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",
k:"ⓚ",l:"ⓛ",m:"ⓜ",n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",
u:"ⓨ",v:"ⓥ",w:"ⓦ",x:"ⓨ",y:"ⓨ",z:"ⓩ" },

Runic:{
a:"ᚨ",b:"ᛒ",c:"ᚲ",d:"ᛞ",e:"ᛖ",f:"ᚠ",g:"ᚷ",h:"ᚺ",i:"ᛁ",j:"ᛃ",
k:"ᚲ",l:"ᛚ",m:"ᛗ",n:"ᚾ",o:"ᛟ",p:"ᛈ",q:"ᛩ",r:"ᚱ",s:"ᛊ",t:"ᛏ",
u:"ᚢ",v:"ᚡ",w:"ᚹ",x:"ᛪ",y:"ᚤ",z:"ᛉ"
},

HackerText:{
a:"4",b:"8",c:"(",d:"|)",e:"3",f:"|=",g:"6",h:"#",i:"1",j:"_|",
k:"|<",l:"1",m:"/\\/\\",n:"|\\|",o:"0",p:"|>",q:"0_",r:"|2",
s:"5",t:"7",u:"|_|",v:"\\/",w:"\\/\\/",x:"><",y:"`/",z:"2"
},

HackerText:{
a:"4",b:"8",c:"(",d:"|)",e:"3",f:"|=",g:"6",h:"#",i:"1",j:"_|",
k:"|<",l:"1",m:"/\\/\\",n:"|\\|",o:"0",p:"|>",q:"0_",r:"|2",
s:"5",t:"7",u:"|_|",v:"\\/",w:"\\/\\/",x:"><",y:"`/",z:"2"
},

SquareText:{
a:"▢",b:"▣",c:"▤",d:"▥",e:"▦",f:"▧",g:"▨",h:"▩",i:"■",
j:"□",k:"▢",l:"▣",m:"▤",n:"▥",o:"▦",p:"▧",q:"▨",r:"▩",
s:"■",t:"□",u:"▢",v:"▣",w:"▤",x:"▥",y:"▦",z:"▧"
},

ArrowText:{
a:"➜",b:"➝",c:"➞",d:"➟",e:"➠",f:"➡",g:"➢",h:"➣",i:"➤",
j:"➥",k:"➦",l:"➧",m:"➨",n:"➩",o:"➪",p:"➫",q:"➬",r:"➭",
s:"➮",t:"➯",u:"➱",v:"➲",w:"➳",x:"➵",y:"➸",z:"➺"
},

DotMatrix:{
a:"░a░",b:"░b░",c:"░c░",d:"░d░",e:"░e░",f:"░f░",g:"░g░",h:"░h░",
i:"░i░",j:"░j░",k:"░k░",l:"░l░",m:"░m░",n:"░n░",o:"░o░",
p:"░p░",q:"░q░",r:"░r░",s:"░s░",t:"░t░",u:"░u░",v:"░v░",
w:"░w░",x:"░x░",y:"░y░",z:"░z░"
},

NoiseDecor:{
a:"a҉",b:"b҉",c:"c҉",d:"d҉",e:"e҉",f:"f҉",g:"g҉",h:"h҉",
i:"i҉",j:"j҉",k:"k҉",l:"l҉",m:"m҉",n:"n҉",o:"o҉",
p:"p҉",q:"q҉",r:"r҉",s:"s҉",t:"t҉",u:"u҉",v:"v҉",
w:"w҉",x:"x҉",y:"y҉",z:"z҉"
},

OutlineText:{
a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",h:"𝕙",
i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",o:"𝕠",
p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",v:"𝕧",
w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
},

CrystalText:{
a:"✧a✧",b:"✧b✧",c:"✧c✧",d:"✧d✧",e:"✧e✧",f:"✧f✧",g:"✧g✧",
h:"✧h✧",i:"✧i✧",j:"✧j✧",k:"✧k✧",l:"✧l✧",m:"✧m✧",n:"✧n✧",
o:"✧o✧",p:"✧p✧",q:"✧q✧",r:"✧r✧",s:"✧s✧",t:"✧t✧",u:"✧u✧",
v:"✧v✧",w:"✧w✧",x:"✧x✧",y:"✧y✧",z:"✧z✧"
},

DecorativeText:{
a:"aꂽ",b:"bꂽ",c:"cꂽ",d:"dꂽ",e:"eꂽ",f:"fꂽ",g:"gꂽ",h:"hꂽ",
i:"iꂽ",j:"jꂽ",k:"kꂽ",l:"lꂽ",m:"mꂽ",n:"nꂽ",o:"oꂽ",
p:"pꂽ",q:"qꂽ",r:"rꂽ",s:"sꂽ",t:"tꂽ",u:"uꂽ",v:"vꂽ",
w:"wꂽ",x:"xꂽ",y:"yꂽ",z:"zꂽ"
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

export default function AllFonts() {
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
        color="#0F172A"
        textTransform={"uppercase"}
        pb={1}
      >
        Font Generator
      </Typography>

      <Typography
        variant="h3"
        fontWeight={800}
        textAlign="left"
        color="#0F172A"
        pb={1}
      >
        Ϝ⊙ℵ† Ꮆ€ℵ€☈ꍏ†⊙☈
      </Typography>

      <Typography
        variant="subtitle1"
        textAlign="left"
        color="#0F172A"
        pb={1}
      >
        Copy and paste text from cool and fancy text generators to enhance your
        Instagram, Twitter, or Discord profile! Style your statuses and chats
        with 387+ fonts!
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
