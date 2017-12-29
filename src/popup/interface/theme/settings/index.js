const theme = {
  breakpoints: [40, 52, 64],
  fonts: {
    body: "Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    heading: "Akrobat,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
    button: "Roboto,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif"
  },
  fontSizes: [
    11, 13, 16, 22, 32, 36, 48, 72, 92, 118
  ],
  colors: {
    amber:'#FFC107',
    brown:'#795548',
    blueGray:'#394a5a',
    blueDark:'#2c4176',
    blue:'#24335a',
    blueLight:'#84cfcd',
    blueLighter:'#108fd0',
    charcoal: '#4a4a4a',
    cyan:'#00BCD4',
    grayLight: '#f6f6f6',
    gray: '#9E9E9E',
    green:'#68bc50',
    greenLight:'#8BC34A',
    indigo:'#3F51B5',
    lime:'#CDDC39',
    grayBlue: '#607D8B',
    orange:'#f47e58',
    orangeDeep:'#e66734',
    pink:'#e3318d',
    purple:'#9C27B0',
    purpleMuted:'#9391ef',
    purpleDeep:'#673AB7',
    red: '#FA5050',
    sand: '#fffbdc',
    teal:'#009688',
    turquoise: '#05b090',
    yellow:'#FFD200',
    
    white: '#ffffff',
  },
  borderImage: {
    blue: 'linear-gradient(to right, #24335a, #31477e)',
    cherry: 'linear-gradient(to right, #EB3349, #F45C43)',
    red: 'linear-gradient(to right, #d96868, #d96868)',
    green: 'linear-gradient(to right, #56ab2f,#a8e063)',
    colorBase: 'linear-gradient(to right, #F4D03F,  #16A085, #e35d5b)',
    rainbowSimple: 'linear-gradient(to right, #e53935,#56ab2f, #7F00FF)',
  },
  gradient: {
    black: ['#232526', '#414345'],
    blue: ['#183682', '#0d023b'],
    blueAqua: ['#13547a', '#80d0c7'],
    blueSky: ['#36D1DC', '#5B86E5'],
    charcoal: ['#283048', '#859398'],
    gray: ['#e7dfdf', '#f3f8fa'],
    crimson: ['#642B73', '#C6426E'],
    kashmir: ['#614385', '#516395'],
    orange: ['#E44D26', '#F16529'],
    red: ['#cb2d3e', '#ef473a'],
    pink: ['#e3318d', '#d02d81'],
    purple: ['#6a3093', '#a044ff'],
    purpleBlue: ['#5C258D', '#4389A2'],
    purplePink: ['#7F00FF', '#E100FF'],
    purpleTurqoise: ['#136a8a','#6a3093'],
    purpleDeep: ['#673AB7', '#512DA8'],
    purpleFade: ['#a18cd1', '#fbc2eb'],
    purpleHaze: ['rgba(109,93,157, 1)', 'rgba(96,101,157,1)'],
    purple1: ['#7367F0', '#CE9FFC'],
    purple2: ['#6018DC', '#EEAD92'],
    purple3: ['#3813C2', '#FF6FD8'],
    purple4: ['#5961F9', '#EE9AE5'],
    purple5: ['#1904E5', '#FAB2FF'],
    purple6: ['#3B2667', '#BC78EC'],
    turqoise: ['#136a8a', '#267871'],
    turqoiseMoss: ['#71B280','#134E5E'],
    turqoiseLight: ['#4CB8C4', '#3CD3AD'],
    violet: ['#4776E6', '#8E54E9'],
    yellow: ['#F7971E', '#FFD200'],

    wonderland: ['#00b8da', '#da9c0b', '#cf4adb'],

    rainbow: ['#F4D03F 0%', '#16A085 20%', '#e53935 30%','#232526'],
    purpleStage: ['#0f0c29', '#302b63', '#302b63'],
    ibize: ['#ee0979', '#ff6a00'], // pink and orange
    ibizeLight: ['#fccb90', '#d57eeb'], // pink and orange
    politics: ['#2196f3', '#f44336'],
    ocean: '0093E9 0%, #80D0C7 100%',
    candy: '#00DBDE 0%, #FC00FF 100%',
    dusk: '#FAD961 0%, #F76B1C 99%',
    cherry: '#EB3349, #F45C43',
    nighthawk: '#0470ba, #14486b',
    blueLagoon: '#43C6AC, #191654',
    easyMed: '#DCE35B, #45B649',
    sherbert: '#56ab2f, #a8e063',
    frost: '#000428, #004e92',
    mauve: '#42275a, #734b6d',
    royal: '#141E30, #243B55',
    whiteTransparent: 'transparent, transparent 20%, #FFF 92.50%, #FFF 100%',
    purpleTransparent: 'transparent, transparent 20%, rgba(109,93,157, 1) 50% , rgba(96,101,157,1) 100%',
    blackTransparent: 'rgba(2, 2, 2, 0.3), rgba(56, 56, 56, 0.87) 20%, #000000 80%, #1d1d1d 100%',
  },

  palette: {
    white: ['#ffffff', '#ffffff'],
    charcoal: ['#4a4a4a', '#636363'],
    grayscale: ['#616161', '#9e9e9e', '#dbdbdb', '#bdbdbd', '#3e3e3e', '#ffffff'],
    primary: ['#1565C0', '#1976D2', '#1E88E5', '#c61a1a'],
    secondary: ['#2389d0', '#247fbe', '#1A96FE', '#1A96FE'],
    danger: ['#D32F2F', '#F44336', '#F8877F', '#FFCDD2'],
    alert: ['#D32F2F', '#F44336', '#F8877F', '#FFCDD2'],
    success: ['#D32F2F', '#F44336', '#F8877F', '#FFCDD2'],
    red: ['#c61a1a', '#c61a1a', '#c61a1a', '#c61a1a'],
    blue: ['#1d5a7a', '#104a68', '#2d3f45', '#005caa'],
    orange: ['#d46134', '#d8531e', '#f8a800', '#f8a800'],
    purple: ['#a837b9', '#a837b9', '#a837b9', '#a837b9'],
    haze: ['#c1c1c1', '#d2d2d2', '#d2d2d2', '#d2d2d2'],
  },
  textShadows: {
    0: [
      '1px 2px 1px rgba(93, 93, 93, 0.35)',
      '2px 1px 9px rgba(0,0,0, 0.0125)',
      '1px 2px 5px rgba(0,0,0, 0.05)', 
      '2px 2px 1px rgba(93,93,93, 0.15)'
    ],
    light:[
      '0 4px 6px rgba(50,50,93, .08)', 
      '0 1px 3px rgba(0,0,0, .20)',
      '0 1px 5px rgba(93,93,93, .1)'
    ],
    lightHazy: [
      '0px 2px 7px rgba(50,50 , 93, 0.08)',
      '0px 1px 9px rgba(0,0,0, 0.05)',
      '1px 2px 5px rgba(0,0,0, 0.15)', 
      '0px 2px 0px rgba(93,93,93, 0.15)'
    ],
    1:[
      '1px 2px 1px rgba(93', '93', '93', '0.35)', '2px 1px 4px rgba(0,0,0', '0.05)',
      '1px 2px 4px rgba(0,0,0', '0.05)', '2px 2px 1px rgba(20,20,20', '0.15)',
      '1px 1px 0px rgba(0', '0', '0', '0.05)', '1px 1px 2px rgba(93,93,93', '0.25)'
    ],
    dark:[
      '0 4px 6px rgba(50,50,93, .14)', 
      '0 1px 3px rgba(0,0,0, .275)',
      '1px 1px 2px rgba(0,0,0, .275)',
      '0 1px 5px rgba(93,93,93, .15)'
    ],
    darkHazy: [
      '0px 2px 7px rgba(50,50 , 93, 0.15)',
      '2px 1px 12px rgba(0,0,0, 0.15)',
      '1px 2px 7px rgba(0,0,0, 0.175)', 
      '0px 2px 0px rgba(93,93,93, 0.15)'
    ],
    darkPurple:[
      '0 4px 6px rgba(13, 13, 150, 0.068)',
      '0 1px 3px rgba(87, 28, 173, 0.25)', 
      '0 1px 5px rgba(72, 20, 222, 0.45)'
    ],
    
  },
  shadows: {
    0:[
      '0 1px 3px rgba(0,0,0,0.12)', 
      '0 1px 2px rgba(0,0,0,0.24)'
    ],
    1:[
      '0 15px 35px rgba(50,50,93,.1)', 
      '0 5px 15px rgba(0,0,0,.07)'
    ],
    2: [
      '0 3px 6px rgba(0,0,0,0.16)',
      '0 3px 6px rgba(0,0,0,0.23)'
      ],
    3: [
      '0 10px 20px rgba(0,0,0,0.19)',
      ' 0 6px 6px rgba(0,0,0,0.23)'
      ],
    4: [
      '0 14px 28px rgba(0,0,0,0.25)',
      '0 10px 10px rgba(0,0,0,0.22)'
    ],
    // Material 3
    insetBottomLight: [
      'inset 0 -10px 10px -10px rgba(0,0,0,0.19)',
      'inset 0 -10px 10px -10px rgba(0,0,0,0.23)'
    ],
    insetBottom: [
      'inset 0 -15px 15px -15px rgba(0,0,0,0.45)',
      'inset 0 -15px 15px -15px rgba(0,0,0,0.375)'
    ],
    insetBottomHeavy: [
      'inset 0 -15px 15px -15px rgba(0,0,0,0.79)',
      'inset 0 -15px 15px -15px rgba(0,0,0,0.73)'
    ],
    insetTopLight: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.19)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.23)'
    ],
    insetTop: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.45)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.375)'
    ],
    insetTopHeavy: [
      'inset 0 15px 15px -15px rgba(0,0,0,0.79)',
      'inset 0 15px 15px -15px rgba(0,0,0,0.73)'
    ],
    // Material 3
    5: [
      '0 10px 20px rgba(0,0,0,0.19)',
      '0 6px 6px rgba(0,0,0,0.23)'
    ],
    // Material 4
    6: [
      '0 14px 28px rgba(0,0,0,0.25)',
      '0 10px 10px rgba(0,0,0,0.22)'
    ],
    7: // Material 5
    [
      '0 19px 38px rgba(0,0,0,0.30)',
      '0 15px 12px rgba(0,0,0,0.22)'
    ]
  }
}

export default theme
