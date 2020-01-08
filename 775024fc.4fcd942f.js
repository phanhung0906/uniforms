(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));n(66),n(226),n(33),n(27),n(26),n(67),n(0);var r=n(237);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var o={id:"what-are-uniforms",title:"What are uniforms?"},i=[{value:"Core features",id:"core-features",children:[]}],c={rightToc:i},s="wrapper";function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(s,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Generally speaking, uniforms are a set of React libraries for building forms from every schema."),Object(r.b)("h3",{id:"core-features"},"Core features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Automatic forms generation"),Object(r.b)("li",{parentName:"ul"},"Fields capable of rendering every schema"),Object(r.b)("li",{parentName:"ul"},"Helper for creating custom fields with one line"),Object(r.b)("li",{parentName:"ul"},"Inline and asynchronous form validation"),Object(r.b)("li",{parentName:"ul"},"Various schemas integration"),Object(r.b)("li",{parentName:"ul"},"Wide range of themes support")),Object(r.b)("p",null,"Similarly to other form packages, uniforms can help you with rendering a form, by taking care of its state management, validation, and submission.\nWhat makes it unique though, is the ability to ",Object(r.b)("strong",{parentName:"p"},"completely generate the form")," for you, without having to manually provide its fields."),Object(r.b)("p",null,"In order to do so, uniforms require you to do two things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Provide ",Object(r.b)("strong",{parentName:"li"},"the schema")," of your data. You can approach the schema as a formal description of the data, where you define its types, allowed values, default values, required ones and so on."),Object(r.b)("li",{parentName:"ol"},"Select desired ",Object(r.b)("strong",{parentName:"li"},"theme"),". The theme is basically a package containing pre-styled form components in one of the popular styles (AntD, Bootstrap 3, Bootstrap 4, Material, Semantic) or raw, unstyled HTML.")),Object(r.b)("p",null,"To operate on the schema, uniforms will need to receive a ",Object(r.b)("em",{parentName:"p"},"bridge")," of it.\nA bridge is a unified schema mapper that is used by uniforms internals in order to be able to operate on the schema data, validate it and generate errors.\nTo create one, you have to use one of the predefined schema-to-bridge mappers or create one by yourself.\nTo learn more about the bridge concept, please visit the ",Object(r.b)("a",a({parentName:"p"},{href:"/docs/uth-bridge-concept"}),"Under The Hood > Bridge concept")," section."))}l.isMDXComponent=!0},226:function(e,t,n){"use strict";var r=n(3),a=n(69)(!1),o=[].indexOf,i=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(i||!n(34)(o)),"Array",{indexOf:function(e){return i?o.apply(this,arguments)||0:a(this,e,arguments[1])}})},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),p=r,f=u[c+"."+p]||u[p]||l[p]||o;return n?a.a.createElement(f,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);