/*! For license information please see src_content_pages_Components_Forms_index_tsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkirh_dashboard=self.webpackChunkirh_dashboard||[]).push([["src_content_pages_Components_Forms_index_tsx"],{"./src/components/Footer/index.tsx":function(e,l,a){a.r(l);var t=a("./node_modules/react/jsx-runtime.js"),d=a("./node_modules/@mui/material/Box/Box.js"),r=a("./node_modules/@mui/material/Container/Container.js"),n=a("./node_modules/@mui/material/Typography/Typography.js"),s=a("./node_modules/@mui/material/Link/Link.js"),i=a("./node_modules/@mui/material/styles/styled.js"),u=function(){return u=Object.assign||function(e){for(var l,a=1,t=arguments.length;a<t;a++)for(var d in l=arguments[a])Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d]);return e},u.apply(this,arguments)},o=(0,i.default)(d.default)((function(e){var l=e.theme;return"\n        border-radius: 0;\n        margin: ".concat(l.spacing(3)," 0;\n")}));l.default=function(){return(0,t.jsx)(o,{children:(0,t.jsx)(r.default,u({maxWidth:"lg"},{children:(0,t.jsxs)(d.default,u({py:3,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between"},{children:[(0,t.jsx)(d.default,{children:(0,t.jsx)(n.default,u({variant:"subtitle1"},{children:"© 2021 - Tokyo Free White React Admin Dashboard"}))}),(0,t.jsxs)(n.default,u({sx:{pt:{xs:2,md:0}},variant:"subtitle1"},{children:["Crafted by ",(0,t.jsx)(s.default,u({href:"https://bloomui.com",target:"_blank",rel:"noopener noreferrer"},{children:"BloomUI.com"}))]}))]}))}))})}},"./src/components/PageTitle/index.tsx":function(e,l,a){a.r(l);var t=a("./node_modules/react/jsx-runtime.js"),d=a("./node_modules/prop-types/index.js"),r=a.n(d),n=a("./node_modules/@mui/icons-material/AddTwoTone.js"),s=a("./node_modules/@mui/material/Grid/Grid.js"),i=a("./node_modules/@mui/material/Typography/Typography.js"),u=a("./node_modules/@mui/material/Button/Button.js"),o=function(){return o=Object.assign||function(e){for(var l,a=1,t=arguments.length;a<t;a++)for(var d in l=arguments[a])Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d]);return e},o.apply(this,arguments)},c=function(e){var l=e.heading,a=void 0===l?"":l,d=e.subHeading,r=void 0===d?"":d,c=e.docs,f=void 0===c?"":c,m=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var d=0;for(t=Object.getOwnPropertySymbols(e);d<t.length;d++)l.indexOf(t[d])<0&&Object.prototype.propertyIsEnumerable.call(e,t[d])&&(a[t[d]]=e[t[d]])}return a}(e,["heading","subHeading","docs"]);return(0,t.jsxs)(s.default,o({container:!0,justifyContent:"space-between",alignItems:"center"},m,{children:[(0,t.jsxs)(s.default,o({item:!0},{children:[(0,t.jsx)(i.default,o({variant:"h3",component:"h3",gutterBottom:!0},{children:a})),(0,t.jsx)(i.default,o({variant:"subtitle2"},{children:r}))]})),(0,t.jsx)(s.default,o({item:!0},{children:(0,t.jsxs)(u.default,o({href:f,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,t.jsx)(n.default,{fontSize:"small"})},{children:[a," Documentation"]}))}))]}))};c.propTypes={heading:r().string,subHeading:r().string,docs:r().string},l.default=c},"./src/components/PageTitleWrapper/index.tsx":function(e,l,a){a.r(l);var t=a("./node_modules/react/jsx-runtime.js"),d=a("./node_modules/@mui/material/Container/Container.js"),r=a("./node_modules/prop-types/index.js"),n=a.n(r),s=a("./node_modules/@mui/material/styles/styled.js"),i=a("./node_modules/@mui/material/Box/Box.js"),u=function(){return u=Object.assign||function(e){for(var l,a=1,t=arguments.length;a<t;a++)for(var d in l=arguments[a])Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d]);return e},u.apply(this,arguments)},o=(0,s.default)(i.default)((function(e){var l=e.theme;return"\n        padding: ".concat(l.spacing(4,0),";\n")})),c=function(e){var l=e.children;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(o,{children:(0,t.jsx)(d.default,u({maxWidth:"lg"},{children:l}))})})};c.propTypes={children:n().node.isRequired},l.default=c},"./src/content/pages/Components/Forms/index.tsx":function(e,l,a){a.r(l);var t=a("./node_modules/react/jsx-runtime.js"),d=a("./node_modules/react-helmet-async/lib/index.module.js"),r=a("./src/components/PageTitle/index.tsx"),n=a("./node_modules/react/index.js"),s=a("./src/components/PageTitleWrapper/index.tsx"),i=a("./node_modules/@mui/material/Container/Container.js"),u=a("./node_modules/@mui/material/Grid/Grid.js"),o=a("./node_modules/@mui/material/Card/Card.js"),c=a("./node_modules/@mui/material/CardHeader/CardHeader.js"),f=a("./node_modules/@mui/material/Divider/Divider.js"),m=a("./node_modules/@mui/material/CardContent/CardContent.js"),x=a("./src/components/Footer/index.tsx"),j=a("./node_modules/@mui/material/Box/Box.js"),p=a("./node_modules/@mui/material/TextField/TextField.js"),h=a("./node_modules/@mui/material/MenuItem/MenuItem.js"),b=a("./node_modules/@mui/material/colors/pink.js"),v=a("./node_modules/@mui/material/Checkbox/Checkbox.js"),y=a("./node_modules/@mui/material/Radio/Radio.js"),g=a("./node_modules/@mui/material/RadioGroup/RadioGroup.js"),C=a("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),_=a("./node_modules/@mui/material/FormControl/FormControl.js"),w=a("./node_modules/@mui/material/FormLabel/FormLabel.js"),P=a("./node_modules/@mui/material/Stack/Stack.js"),T=a("./node_modules/@mui/material/Slider/Slider.js"),O=a("./node_modules/@mui/icons-material/VolumeDown.js"),S=a("./node_modules/@mui/icons-material/VolumeUp.js"),k=a("./node_modules/@mui/material/Switch/Switch.js"),F=function(){return F=Object.assign||function(e){for(var l,a=1,t=arguments.length;a<t;a++)for(var d in l=arguments[a])Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d]);return e},F.apply(this,arguments)},V={inputProps:{"aria-label":"Switch demo"}},H=[{value:"USD",label:"$"},{value:"EUR",label:"€"},{value:"BTC",label:"฿"},{value:"JPY",label:"¥"}];l.default=function(){var e=(0,n.useState)("EUR"),l=e[0],a=e[1],I=function(e){a(e.target.value)},R=(0,n.useState)(30),W=R[0],D=R[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Helmet,{children:(0,t.jsx)("title",{children:"Forms - Components"})}),(0,t.jsx)(s.default,{children:(0,t.jsx)(r.default,{heading:"Forms",subHeading:"Components that are used to build interactive placeholders used for data collection from users.",docs:"https://material-ui.com/components/text-fields/"})}),(0,t.jsx)(i.default,F({maxWidth:"lg"},{children:(0,t.jsxs)(u.default,F({container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3},{children:[(0,t.jsx)(u.default,F({item:!0,xs:12},{children:(0,t.jsxs)(o.default,{children:[(0,t.jsx)(c.default,{title:"Input Fields"}),(0,t.jsx)(f.default,{}),(0,t.jsx)(m.default,{children:(0,t.jsxs)(j.default,F({component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(p.default,{required:!0,id:"outlined-required",label:"Required",defaultValue:"Hello World"}),(0,t.jsx)(p.default,{disabled:!0,id:"outlined-disabled",label:"Disabled",defaultValue:"Hello World"}),(0,t.jsx)(p.default,{id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password"}),(0,t.jsx)(p.default,{id:"outlined-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0}}),(0,t.jsx)(p.default,{id:"outlined-number",label:"Number",type:"number",InputLabelProps:{shrink:!0}}),(0,t.jsx)(p.default,{id:"outlined-search",label:"Search field",type:"search"}),(0,t.jsx)(p.default,{id:"outlined-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(p.default,{required:!0,id:"filled-required",label:"Required",defaultValue:"Hello World",variant:"filled"}),(0,t.jsx)(p.default,{disabled:!0,id:"filled-disabled",label:"Disabled",defaultValue:"Hello World",variant:"filled"}),(0,t.jsx)(p.default,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"filled"}),(0,t.jsx)(p.default,{id:"filled-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"filled"}),(0,t.jsx)(p.default,{id:"filled-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"filled"}),(0,t.jsx)(p.default,{id:"filled-search",label:"Search field",type:"search",variant:"filled"}),(0,t.jsx)(p.default,{id:"filled-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"filled"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(p.default,{required:!0,id:"standard-required",label:"Required",defaultValue:"Hello World",variant:"standard"}),(0,t.jsx)(p.default,{disabled:!0,id:"standard-disabled",label:"Disabled",defaultValue:"Hello World",variant:"standard"}),(0,t.jsx)(p.default,{id:"standard-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"standard"}),(0,t.jsx)(p.default,{id:"standard-read-only-input",label:"Read Only",defaultValue:"Hello World",InputProps:{readOnly:!0},variant:"standard"}),(0,t.jsx)(p.default,{id:"standard-number",label:"Number",type:"number",InputLabelProps:{shrink:!0},variant:"standard"}),(0,t.jsx)(p.default,{id:"standard-search",label:"Search field",type:"search",variant:"standard"}),(0,t.jsx)(p.default,{id:"standard-helperText",label:"Helper text",defaultValue:"Default Value",helperText:"Some important text",variant:"standard"})]})]}))})]})})),(0,t.jsx)(u.default,F({item:!0,xs:12},{children:(0,t.jsxs)(o.default,{children:[(0,t.jsx)(c.default,{title:"Select Inputs"}),(0,t.jsx)(f.default,{}),(0,t.jsx)(m.default,{children:(0,t.jsxs)(j.default,F({component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off"},{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(p.default,F({id:"outlined-select-currency",select:!0,label:"Select",value:l,onChange:I,helperText:"Please select your currency"},{children:H.map((function(e){return(0,t.jsx)(h.default,F({value:e.value},{children:e.label}),e.value)}))})),(0,t.jsx)(p.default,F({id:"outlined-select-currency-native",select:!0,label:"Native select",value:l,onChange:I,SelectProps:{native:!0},helperText:"Please select your currency"},{children:H.map((function(e){return(0,t.jsx)("option",F({value:e.value},{children:e.label}),e.value)}))}))]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(p.default,F({id:"filled-select-currency",select:!0,label:"Select",value:l,onChange:I,helperText:"Please select your currency",variant:"filled"},{children:H.map((function(e){return(0,t.jsx)(h.default,F({value:e.value},{children:e.label}),e.value)}))})),(0,t.jsx)(p.default,F({id:"filled-select-currency-native",select:!0,label:"Native select",value:l,onChange:I,SelectProps:{native:!0},helperText:"Please select your currency",variant:"filled"},{children:H.map((function(e){return(0,t.jsx)("option",F({value:e.value},{children:e.label}),e.value)}))}))]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(p.default,F({id:"standard-select-currency",select:!0,label:"Select",value:l,onChange:I,helperText:"Please select your currency",variant:"standard"},{children:H.map((function(e){return(0,t.jsx)(h.default,F({value:e.value},{children:e.label}),e.value)}))})),(0,t.jsx)(p.default,F({id:"standard-select-currency-native",select:!0,label:"Native select",value:l,onChange:I,SelectProps:{native:!0},helperText:"Please select your currency",variant:"standard"},{children:H.map((function(e){return(0,t.jsx)("option",F({value:e.value},{children:e.label}),e.value)}))}))]})]}))})]})})),(0,t.jsx)(u.default,F({item:!0,xs:12},{children:(0,t.jsxs)(o.default,{children:[(0,t.jsx)(c.default,{title:"Switches"}),(0,t.jsx)(f.default,{}),(0,t.jsxs)(m.default,{children:[(0,t.jsx)(k.default,F({},V,{defaultChecked:!0})),(0,t.jsx)(k.default,F({},V)),(0,t.jsx)(k.default,F({},V,{disabled:!0,defaultChecked:!0})),(0,t.jsx)(k.default,F({},V,{disabled:!0}))]})]})})),(0,t.jsx)(u.default,F({item:!0,xs:12},{children:(0,t.jsxs)(o.default,{children:[(0,t.jsx)(c.default,{title:"Checkboxes & Radios"}),(0,t.jsx)(f.default,{}),(0,t.jsxs)(m.default,{children:[(0,t.jsx)(v.default,F({},V,{defaultChecked:!0})),(0,t.jsx)(v.default,F({},V,{defaultChecked:!0,color:"secondary"})),(0,t.jsx)(v.default,F({},V,{defaultChecked:!0,color:"success"})),(0,t.jsx)(v.default,F({},V,{defaultChecked:!0,color:"default"})),(0,t.jsx)(v.default,F({},V,{defaultChecked:!0,sx:{color:b.default[800],"&.Mui-checked":{color:b.default[600]}}})),(0,t.jsx)(f.default,{sx:{my:5}}),(0,t.jsxs)(_.default,F({component:"fieldset"},{children:[(0,t.jsx)(w.default,F({component:"legend"},{children:"Gender"})),(0,t.jsxs)(g.default,F({row:!0,"aria-label":"gender",name:"row-radio-buttons-group"},{children:[(0,t.jsx)(C.default,{value:"female",control:(0,t.jsx)(y.default,{}),label:"Female"}),(0,t.jsx)(C.default,{value:"male",control:(0,t.jsx)(y.default,{}),label:"Male"}),(0,t.jsx)(C.default,{value:"other",control:(0,t.jsx)(y.default,{}),label:"Other"}),(0,t.jsx)(C.default,{value:"disabled",disabled:!0,control:(0,t.jsx)(y.default,{}),label:"other"})]}))]}))]})]})})),(0,t.jsx)(u.default,F({item:!0,xs:12},{children:(0,t.jsxs)(o.default,{children:[(0,t.jsx)(c.default,{title:"Sliders"}),(0,t.jsx)(f.default,{}),(0,t.jsx)(m.default,{children:(0,t.jsxs)(j.default,F({sx:{width:200}},{children:[(0,t.jsxs)(P.default,F({spacing:2,direction:"row",sx:{mb:1},alignItems:"center"},{children:[(0,t.jsx)(O.default,{}),(0,t.jsx)(T.default,{"aria-label":"Volume",value:W,onChange:function(e,l){D(l)}}),(0,t.jsx)(S.default,{})]})),(0,t.jsx)(T.default,{disabled:!0,defaultValue:30,"aria-label":"Disabled slider"})]}))})]})}))]}))})),(0,t.jsx)(x.default,{})]})}}}]);
//# sourceMappingURL=src_content_pages_Components_Forms_index_tsx.js.map