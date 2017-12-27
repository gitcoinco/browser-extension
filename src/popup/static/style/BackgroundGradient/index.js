const MagicBlue = `
background: linear-gradient(270deg, #0a62ad, #484ec5, #217eb0);
background-size: 400% 400%;

-webkit-animation: MagicBlue 16s ease infinite;
-moz-animation: MagicBlue 16s ease infinite;
animation: MagicBlue 16s ease infinite;

@-webkit-keyframes MagicBlue {
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
@-moz-keyframes MagicBlue {
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
@keyframes MagicBlue { 
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}`

const Shimmer = `
background: linear-gradient(270deg, #FFF, #f9f9f9 60%, #FFF 70% , #f9f9f9 80%);
background-size: 600% 600%;

-webkit-animation: Shimmer 16s ease infinite;
-moz-animation: Shimmer 16s ease infinite;
animation: Shimmer 16s ease infinite;

@-webkit-keyframes Shimmer {
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
@-moz-keyframes Shimmer {
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
@keyframes Shimmer { 
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}`


const gLight = `
background: linear-gradient(270deg, #246655, #3e6f89, #3b96ca);
background-size: 400% 400%;

-webkit-animation: DeepSea 7s ease infinite;
-moz-animation: DeepSea 7s ease infinite;
animation: DeepSea 7s ease infinite;

@-webkit-keyframes DeepSea {
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
@-moz-keyframes DeepSea {
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
@keyframes DeepSea { 
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
`

const gDark = `
background: linear-gradient(270deg, #1d3f52, #3e6f89, #406274);
background-size: 400% 400%;

-webkit-animation: DeepSea 17s ease infinite;
-moz-animation: DeepSea 17s ease infinite;
animation: DeepSea 17s ease infinite;

@-webkit-keyframes DeepSea {
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
@-moz-keyframes DeepSea {
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
@keyframes DeepSea { 
    0%{background-position:9% 0%}
    50%{background-position:92% 100%}
    100%{background-position:9% 0%}
}
`

export default { gLight, gDark, MagicBlue, Shimmer }