"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4510],{5971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=t(7896),r=(t(2784),t(876));const a={},i="App Entry",p={unversionedId:"boot/app",id:"boot/app",title:"App Entry",description:"The framework creates and renders the entire application through runApp, and global configurations of the application can be passed in during the creation of the application.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/boot/app.mdx",sourceDirName:"boot",slug:"/boot/app",permalink:"/tango/en/docs/boot/app",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/boot/app.mdx",tags:[],version:"current",frontMatter:{},sidebar:"boot",previous:{title:"tango.config.json",permalink:"/tango/en/docs/boot/tango-config"},next:{title:"Async Services",permalink:"/tango/en/docs/boot/service"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"App Boot",id:"app-boot",level:2},{value:"Route Config",id:"route-config",level:2},{value:"Container Components",id:"container-components",level:2},{value:"Environment Variables",id:"env",level:2}],u={toc:c},l="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(l,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-entry"},"App Entry"),(0,r.kt)("p",null,"The framework creates and renders the entire application through ",(0,r.kt)("inlineCode",{parentName:"p"},"runApp"),", and global configurations of the application can be passed in during the creation of the application."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Configure the application globally through ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.js"),", set up routes, runtime environment, service functions, state models, and more."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { runApp, tangoBootConfig } from '@music163/tango-boot';\nimport { message } from '@music163/antd';\n\n// Configure the default display method for error messages that occur during requests, using the message component to display the message overlay.\ntangoBootConfig.toast = message;\n\nrunApp({\n  // boot config\n  boot: {},\n\n  // container components\n  providers: [],\n\n  // store instances\n  stores: {},\n\n  // service functions\n  services: {},\n\n  // route config\n  router: {},\n});\n")),(0,r.kt)("h2",{id:"app-boot"},"App Boot"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"boot")," configuration item is used for the startup configuration of the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"runApp({\n  boot: {\n    // react-dom mount element\n    mountElement: document.querySelector('#root'),\n\n    // enable qiankun micro-app support, `qiankun: { appName: string }`\n    qiankun: false,\n  },\n});\n")),(0,r.kt)("h2",{id:"route-config"},"Route Config"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"router")," configuration item is used to configure the front-end routing of the application, which is implemented based on ",(0,r.kt)("inlineCode",{parentName:"p"},"react-router"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import routes from './routes';\n\nrunApp({\n  router: {\n    // \u8def\u7531\u7c7b\u578b: hash | browser\n    type: 'hash',\n\n    // \u8def\u7531\u914d\u7f6e\u4fe1\u606f\n    config: routes,\n\n    // basename,\n  },\n});\n")),(0,r.kt)("p",null,"TangoBoot uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/remix-run/react-router/tree/v5/packages/react-router-config"},"Static Routing Configuration Scheme")," of ReactRouter. The specific routing configuration file is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// routes.js\nimport Index from './pages/index';\nimport About from './pages/about';\n\nconst routes = [\n  {\n    path: '/',\n    exact: true,\n    component: Index,\n  },\n  {\n    path: '/about',\n    component: About,\n  },\n  {\n    path: '/user/:id',\n    component: About,\n  },\n];\n\nexport default routes;\n")),(0,r.kt)("h2",{id:"container-components"},"Container Components"),(0,r.kt)("p",null,"Sometimes, you may want to wrap the root component with specific container components such as multi-language configuration, state container, etc. Since ",(0,r.kt)("inlineCode",{parentName:"p"},"runApp")," encapsulates the rendering logic of the root component, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"providers")," configuration option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"runApp({\n  // Wrap the instance of the providers component in the order in which it is passed in.\n  providers: [<ConfigProvider />, <LocaleProvider />],\n});\n")),(0,r.kt)("h2",{id:"env"},"Environment Variables"),(0,r.kt)("p",null,"Sometimes you may need to customize some environment variables to quickly determine when the application is running in different environments. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"tango.env")," to quickly obtain the application's environment information. It should be noted that by default there will be no environment information, and you can set the desired environment variables by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"getEnv")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"runApp")," when needed."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"runApp({\n  // You can return an object with the environment information of the custom application.\n  getEnv() {\n    if (location.origin.includes('tango')) {\n      // tango designer\n      return 'development';\n    }\n    if (location.origin.includes('localhost')) {\n      // local environment\n      return 'local';\n    }\n    return 'production';\n  },\n});\n")),(0,r.kt)("p",null,"Consume environment variables anywhere, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Box isRender={tango.env === 'development'}>A box only render in development environment</Box>\n")))}m.isMDXComponent=!0},876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(t),d=r,f=l["".concat(s,".").concat(d)]||l[d]||m[d]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[l]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);