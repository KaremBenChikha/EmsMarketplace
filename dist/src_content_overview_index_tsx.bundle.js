/*! For license information please see src_content_overview_index_tsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkirh_dashboard=self.webpackChunkirh_dashboard||[]).push([["src_content_overview_index_tsx"],{"./node_modules/@mui/material/Card/Card.js":function(e,n,t){t.r(n);var s=t("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),a=t("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),r=t("./node_modules/react/index.js"),i=t("./node_modules/prop-types/index.js"),o=t.n(i),d=t("./node_modules/clsx/dist/clsx.m.js"),l=t("./node_modules/@mui/utils/esm/chainPropTypes.js"),u=t("./node_modules/@mui/base/composeClasses/composeClasses.js"),c=t("./node_modules/@mui/material/styles/styled.js"),m=t("./node_modules/@mui/material/styles/useThemeProps.js"),f=t("./node_modules/@mui/material/Paper/Paper.js"),h=t("./node_modules/@mui/material/Card/cardClasses.js"),p=t("./node_modules/react/jsx-runtime.js");const x=["className","raised"],j=(0,c.default)(f.default,{name:"MuiCard",slot:"Root",overridesResolver:(e,n)=>n.root})((()=>({overflow:"hidden"}))),g=r.forwardRef((function(e,n){const t=(0,m.default)({props:e,name:"MuiCard"}),{className:r,raised:i=!1}=t,o=(0,a.default)(t,x),l=(0,s.default)({},t,{raised:i}),c=(e=>{const{classes:n}=e;return(0,u.default)({root:["root"]},h.getCardUtilityClass,n)})(l);return(0,p.jsx)(j,(0,s.default)({className:(0,d.default)(c.root,r),elevation:i?8:void 0,ref:n,ownerState:l},o))}));g.propTypes={children:o().node,classes:o().object,className:o().string,raised:(0,l.default)(o().bool,(e=>e.raised&&"outlined"===e.variant?new Error('MUI: Combining `raised={true}` with `variant="outlined"` has no effect.'):null)),sx:o().oneOfType([o().arrayOf(o().oneOfType([o().func,o().object,o().bool])),o().func,o().object])},n.default=g},"./node_modules/@mui/material/Card/cardClasses.js":function(e,n,t){t.r(n),t.d(n,{getCardUtilityClass:function(){return a}});var s=t("./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");function a(e){return(0,s.default)("MuiCard",e)}const r=(0,t("./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js").default)("MuiCard",["root"]);n.default=r},"./src/content/overview/Hero/index.tsx":function(e,n,t){t.r(n);var s=t("./node_modules/react/jsx-runtime.js"),a=t("./node_modules/@mui/material/Typography/Typography.js"),r=t("./node_modules/@mui/material/Box/Box.js"),i=t("./node_modules/@mui/material/Container/Container.js"),o=t("./node_modules/@mui/material/Grid/Grid.js"),d=t("./node_modules/@mui/material/Button/Button.js"),l=t("./node_modules/react-router-dom/index.js"),u=t("./node_modules/@mui/material/styles/styled.js"),c=function(){return c=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},c.apply(this,arguments)},m=(0,u.default)(a.default)((function(e){var n=e.theme;return"\n    font-size: ".concat(n.typography.pxToRem(50),";\n")})),f=(0,u.default)(a.default)((function(e){var n=e.theme;return"\n    font-size: ".concat(n.typography.pxToRem(17),";\n")})),h=(0,u.default)(r.default)((function(e){var n=e.theme;return"\n    background-color: ".concat(n.colors.success.main,";\n    color: ").concat(n.palette.success.contrastText,";\n    font-weight: bold;\n    border-radius: 30px;\n    text-transform: uppercase;\n    display: inline-block;\n    font-size: ").concat(n.typography.pxToRem(11),";\n    padding: ").concat(n.spacing(.5)," ").concat(n.spacing(1.5),";\n    margin-bottom: ").concat(n.spacing(2),";\n")})),p=(0,u.default)(r.default)((function(e){var n=e.theme;return"\n    width: ".concat(n.spacing(8),";\n    height: ").concat(n.spacing(8),";\n    border-radius: ").concat(n.general.borderRadius,";\n    background-color: #e5f7ff;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto ").concat(n.spacing(2),";\n\n    img {\n      width: 60%;\n      height: 60%;\n      display: block;\n    }\n")})),x=(0,u.default)(r.default)((function(e){var n=e.theme;return"\n    width: ".concat(n.spacing(8),";\n    height: ").concat(n.spacing(8),";\n    border-radius: ").concat(n.general.borderRadius,";\n    background-color: #dfebf6;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: 0 auto ").concat(n.spacing(2),";\n\n    img {\n      width: 60%;\n      height: 60%;\n      display: block;\n    }\n")}));n.default=function(){return(0,s.jsx)(i.default,c({maxWidth:"lg",sx:{textAlign:"center"}},{children:(0,s.jsx)(o.default,c({spacing:{xs:6,md:10},justifyContent:"center",alignItems:"center",container:!0},{children:(0,s.jsxs)(o.default,c({item:!0,md:10,lg:8,mx:"auto"},{children:[(0,s.jsx)(h,c({color:"success"},{children:"Version 1.1.0"})),(0,s.jsx)(m,c({sx:{mb:2},variant:"h1"},{children:"Hydrogen Research Institute Dashboard"})),(0,s.jsx)(f,c({sx:{lineHeight:1.5,pb:4},variant:"h3",color:"text.secondary",fontWeight:"normal"},{children:"Web interface for operational management of a fleet of AGVs"})),(0,s.jsx)(d.default,c({component:l.Link,to:"/dashboards/Agv",size:"large",variant:"contained"},{children:"Start the experience"})),(0,s.jsxs)(o.default,c({container:!0,spacing:3,mt:5},{children:[(0,s.jsxs)(o.default,c({item:!0,md:6},{children:[(0,s.jsx)(p,{children:(0,s.jsx)("img",{src:"/static/images/logo/IRH.png"})}),(0,s.jsxs)(a.default,c({variant:"h4"},{children:[(0,s.jsx)(r.default,c({sx:{pb:2}},{children:(0,s.jsx)("b",{children:"Hydrogen Research Institute"})})),(0,s.jsx)(a.default,c({component:"span",variant:"subtitle2"},{children:" - The Hydrogen Research Institute (HRI) of the Université du Québec à Trois-Rivières (UQTR) was established in 1994 and is one of Canada’s leading institutes dedication to hydrogen."}))]}))]})),(0,s.jsxs)(o.default,c({item:!0,md:6},{children:[(0,s.jsx)(x,{children:(0,s.jsx)("img",{src:"/static/images/logo/UQTR.png"})}),(0,s.jsxs)(a.default,c({variant:"h4"},{children:[(0,s.jsx)(r.default,c({sx:{pb:2}},{children:(0,s.jsx)("b",{children:" The Université du Québec à Trois-Rivières "})})),(0,s.jsx)(a.default,c({component:"span",variant:"subtitle2"},{children:' -  also known as "l\'université du peuple", established in 1969 and mainly located in Trois-Rivières, Quebec, Canada, is a public university within the Université du Québec network.'}))]}))]}))]}))]}))}))}))}},"./src/content/overview/index.tsx":function(e,n,t){t.r(n);var s=t("./node_modules/react/jsx-runtime.js"),a=t("./node_modules/@mui/material/Box/Box.js"),r=t("./node_modules/@mui/material/Container/Container.js"),i=t("./node_modules/@mui/material/Card/Card.js"),o=t("./node_modules/react-helmet-async/lib/index.module.js"),d=t("./node_modules/@mui/material/styles/styled.js"),l=t("./src/content/overview/Hero/index.tsx"),u=function(){return u=Object.assign||function(e){for(var n,t=1,s=arguments.length;t<s;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},u.apply(this,arguments)},c=(0,d.default)(a.default)((function(){return"\n    overflow: auto;\n    flex: 1;\n    overflow-x: hidden;\n    align-items: center;\n\n"}));n.default=function(){return(0,s.jsxs)(c,{children:[(0,s.jsx)(o.Helmet,{children:(0,s.jsx)("title",{children:"IRH Dashboard"})}),(0,s.jsxs)(r.default,u({maxWidth:"lg"},{children:[(0,s.jsx)(a.default,{display:"flex",justifyContent:"center",py:5,alignItems:"center"}),(0,s.jsx)(i.default,u({sx:{p:10,mb:10,borderRadius:12}},{children:(0,s.jsx)(l.default,{})}))]}))]})}}}]);
//# sourceMappingURL=src_content_overview_index_tsx.js.map