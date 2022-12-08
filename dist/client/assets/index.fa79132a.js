const r=a=>typeof a=="string"?a:{100:a[500],200:a[400],300:a[300],400:a[200],500:a[100]},e={white:{100:"#FFFFFF",200:"#F5F5F5",300:"#E7EAEE",400:"#DCE0E5",500:"#DBDBDB"},gray:{100:"#B7BEC9",200:"#B2B2B2",300:"#71747C",400:"#4C4C4C",500:"#333333"},green:{100:"#F1F8F7",200:"#94DDC0",300:"#11856E",400:"#1C6C5C",500:"#004628"},orange:{100:"#FEF0E6",200:"#FFAA70",300:"#FF6800",400:"#B7540F",500:"#894618"},red:{100:"#F8E9E6",200:"#F19D8F",300:"#C72712",400:"#A03523",500:"#782214"},yellow:{100:"#FFF7E6",200:"#FEDC93",300:"#FDBE36",400:"#E4A41C",500:"#D88D00"},blue:{100:"#EAF1FA",200:"#A2C6E5",300:"#0064B4",400:"#005090",500:"#034072"}},o={ink:"#121212",canvas:e.white,neutral:e.gray,primary:e.green,secondary:e.yellow,highlight:e.red,success:e.green,warning:e.orange,error:e.red,info:e.blue,focus:e.green[300],placeholder:e.gray[300]},c={ink:"#fff",canvas:{100:"#000000",200:"#0a0a0a",300:"#181511",400:"#231f1a",500:"#242424"},neutral:r(o.neutral),primary:r(o.primary),highlight:r(o.highlight),success:r(o.success),warning:r(o.warning),error:r(o.error),info:r(o.info),focus:r(o.focus),placeholder:e.gray[200]},n={elevation:{color:"rgb(237 237 237 / 15%)","color-2":"rgb(225 225 225 / 15%)"},chip:{color:"#efeeee",background:{color:"#71747c"},success:{color:"#f1f8f7",background:{color:"#138671"}},inactive:{color:"#f8f8f8",background:{color:"#71747c"}},offline:{color:"#efeeee",background:{color:"#71747c"}},low:{color:"#fffbe6",background:{color:"#cd8814"}},warning:{color:"#fef0e6",background:{color:"#b7540f"}},info:{color:"#eaf1fa",background:{color:"#2261af"}},error:{color:"#f9f2f1",background:{color:"#c72712"}}}},i={container:{width:"1340px"},layout:{gap:"10px"},box:{shadow:{focus:"0 0 3px var(--oryx-color-focus)"}},elevation:{color:"rgb(23 11 11 / 15%)","color-2":"rgb(18 18 18 / 15%)",0:"0 1px 3px",1:"0 4px 12px",2:"1px 3px 18px",3:"-2px 2px 20px"},"transition-time":"0.3s",transition:{time:{medium:"0.6s",long:"0.9s"}},"border-radius":"10px",border:{thin:"1px",thick:"2px",radius:{small:"4px",medium:"5px",large:"24px"}},space:"5px","space-2":"calc(var(--oryx-space) * 2)","space-3":"calc(var(--oryx-space) * 3)","space-4":"calc(var(--oryx-space) * 4)",icon:{size:{default:"var(--oryx-icon-size-large)",large:"24px",medium:"18px",small:"12px"}},modal:{min:{width:"min(100vw, 400px)"},background:{color:"rgb(0 0 0 / 50%)"}},cart:{"quantity-input":{button:{disabled:{color:"#b2b2b2"},hover:{background:{color:"#e7eaee"}},color:"#121212",background:{color:"#f5f5f5"},border:{color:"#dce0e5"}},input:{hover:{border:{color:"#b7bec9"}}}}}},s={typography:{font:{face:'"Montserrat", sans-serif',size:"14px",weight:"500"}},"font-size":{base:"14px",medium:"16px",large:"22px"},"font-weight":{medium:"500",semibold:"600"}},l={typography:{}},t={typography:{h1:{size:"2.857em",line:"1.2em",weight:"600"},h2:{size:"2.143em",line:"1.2em",weight:"600"},h3:{size:"1.571em",line:"1.364em",weight:"500"},h4:{size:"1.286em",line:"1.444em",weight:"500"},h5:{size:"1.143em",line:"1.5em",weight:"600"},h6:{size:"1.143em",line:"1.5em",weight:"500"},subtitle:{size:"0.857em",line:"1.333em",weight:"600"}}},g=[{color:o,...i,...s},{media:{mode:"dark"},color:c,...n},{media:{screen:"sm"},...l},{media:{screen:"md"},...t}];export{g as storefrontTokens};
