/*! For license information please see src_content_pages_Components_Tabs_index_tsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkirh_dashboard=self.webpackChunkirh_dashboard||[]).push([["src_content_pages_Components_Tabs_index_tsx"],{"./node_modules/@mui/icons-material/AddTwoTone.js":function(e,t,n){var r=n("./node_modules/@mui/icons-material/node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("./node_modules/@mui/icons-material/utils/createSvgIcon.js")),o=n("./node_modules/react/jsx-runtime.js"),i=(0,a.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.default=i},"./src/components/Footer/index.tsx":function(e,t,n){n.r(t);var r=n("./node_modules/react/jsx-runtime.js"),a=n("./node_modules/@mui/material/Box/Box.js"),o=n("./node_modules/@mui/material/Container/Container.js"),i=n("./node_modules/@mui/material/Typography/Typography.js"),s=n("./node_modules/@mui/material/Link/Link.js"),l=n("./node_modules/@mui/material/styles/styled.js"),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)},u=(0,l.default)(a.default)((function(e){var t=e.theme;return"\n        border-radius: 0;\n        margin: ".concat(t.spacing(3)," 0;\n")}));t.default=function(){return(0,r.jsx)(u,{children:(0,r.jsx)(o.default,d({maxWidth:"lg"},{children:(0,r.jsxs)(a.default,d({py:3,display:{xs:"block",md:"flex"},alignItems:"center",textAlign:{xs:"center",md:"left"},justifyContent:"space-between"},{children:[(0,r.jsx)(a.default,{children:(0,r.jsx)(i.default,d({variant:"subtitle1"},{children:"© 2021 - Tokyo Free White React Admin Dashboard"}))}),(0,r.jsxs)(i.default,d({sx:{pt:{xs:2,md:0}},variant:"subtitle1"},{children:["Crafted by ",(0,r.jsx)(s.default,d({href:"https://bloomui.com",target:"_blank",rel:"noopener noreferrer"},{children:"BloomUI.com"}))]}))]}))}))})}},"./src/components/PageTitle/index.tsx":function(e,t,n){n.r(t);var r=n("./node_modules/react/jsx-runtime.js"),a=n("./node_modules/prop-types/index.js"),o=n.n(a),i=n("./node_modules/@mui/icons-material/AddTwoTone.js"),s=n("./node_modules/@mui/material/Grid/Grid.js"),l=n("./node_modules/@mui/material/Typography/Typography.js"),d=n("./node_modules/@mui/material/Button/Button.js"),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)},c=function(e){var t=e.heading,n=void 0===t?"":t,a=e.subHeading,o=void 0===a?"":a,c=e.docs,m=void 0===c?"":c,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["heading","subHeading","docs"]);return(0,r.jsxs)(s.default,u({container:!0,justifyContent:"space-between",alignItems:"center"},p,{children:[(0,r.jsxs)(s.default,u({item:!0},{children:[(0,r.jsx)(l.default,u({variant:"h3",component:"h3",gutterBottom:!0},{children:n})),(0,r.jsx)(l.default,u({variant:"subtitle2"},{children:o}))]})),(0,r.jsx)(s.default,u({item:!0},{children:(0,r.jsxs)(d.default,u({href:m,target:"_blank",rel:"noopener noreferrer",sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:(0,r.jsx)(i.default,{fontSize:"small"})},{children:[n," Documentation"]}))}))]}))};c.propTypes={heading:o().string,subHeading:o().string,docs:o().string},t.default=c},"./src/components/PageTitleWrapper/index.tsx":function(e,t,n){n.r(t);var r=n("./node_modules/react/jsx-runtime.js"),a=n("./node_modules/@mui/material/Container/Container.js"),o=n("./node_modules/prop-types/index.js"),i=n.n(o),s=n("./node_modules/@mui/material/styles/styled.js"),l=n("./node_modules/@mui/material/Box/Box.js"),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)},u=(0,s.default)(l.default)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4,0),";\n")})),c=function(e){var t=e.children;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(u,{children:(0,r.jsx)(a.default,d({maxWidth:"lg"},{children:t}))})})};c.propTypes={children:i().node.isRequired},t.default=c},"./src/content/pages/Components/Tabs/index.tsx":function(e,t,n){n.r(t);var r=n("./node_modules/react/jsx-runtime.js"),a=n("./node_modules/react-helmet-async/lib/index.module.js"),o=n("./src/components/PageTitle/index.tsx"),i=n("./src/components/PageTitleWrapper/index.tsx"),s=n("./node_modules/@mui/material/Container/Container.js"),l=n("./node_modules/@mui/material/Grid/Grid.js"),d=n("./node_modules/@mui/material/Card/Card.js"),u=n("./node_modules/@mui/material/CardHeader/CardHeader.js"),c=n("./node_modules/@mui/material/Divider/Divider.js"),m=n("./node_modules/@mui/material/CardContent/CardContent.js"),p=n("./node_modules/react/index.js"),f=n("./node_modules/@mui/material/Tabs/Tabs.js"),j=n("./node_modules/@mui/material/Tab/Tab.js"),x=n("./node_modules/@mui/material/Typography/Typography.js"),h=n("./node_modules/@mui/material/Box/Box.js"),b=n("./src/components/Footer/index.tsx"),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y.apply(this,arguments)};function g(e){var t=e.children,n=e.value,a=e.index,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["children","value","index"]);return(0,r.jsx)("div",y({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},o,{children:n===a&&(0,r.jsx)(h.default,y({sx:{p:3}},{children:(0,r.jsx)(x.default,{children:t})}))}))}function v(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}t.default=function(){var e=(0,p.useState)(0),t=e[0],n=e[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Helmet,{children:(0,r.jsx)("title",{children:"Tabs - Components"})}),(0,r.jsx)(i.default,{children:(0,r.jsx)(o.default,{heading:"Tabs",subHeading:"Tabs make it easy to explore and switch between different views.",docs:"https://material-ui.com/components/tabs/"})}),(0,r.jsx)(s.default,y({maxWidth:"lg"},{children:(0,r.jsx)(l.default,y({container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3},{children:(0,r.jsx)(l.default,y({item:!0,xs:12},{children:(0,r.jsxs)(d.default,{children:[(0,r.jsx)(u.default,{title:"Basic Example"}),(0,r.jsx)(c.default,{}),(0,r.jsx)(m.default,{children:(0,r.jsxs)(h.default,y({sx:{width:"100%"}},{children:[(0,r.jsxs)(f.default,y({variant:"scrollable",scrollButtons:"auto",textColor:"primary",indicatorColor:"primary",value:t,onChange:function(e,t){n(t)},"aria-label":"basic tabs example"},{children:[(0,r.jsx)(j.default,y({label:"Item One"},v(0))),(0,r.jsx)(j.default,y({label:"Item Two"},v(1))),(0,r.jsx)(j.default,y({label:"Item Three"},v(2)))]})),(0,r.jsx)(g,y({value:t,index:0},{children:"Item One"})),(0,r.jsx)(g,y({value:t,index:1},{children:"Item Two"})),(0,r.jsx)(g,y({value:t,index:2},{children:"Item Three"}))]}))})]})}))}))})),(0,r.jsx)(b.default,{})]})}}}]);
//# sourceMappingURL=src_content_pages_Components_Tabs_index_tsx.js.map