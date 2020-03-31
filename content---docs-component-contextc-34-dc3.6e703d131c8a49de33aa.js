(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",function(){return l}),n.d(t,"rightToc",function(){return r}),n.d(t,"default",function(){return b});n(0);var o=n(133);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={title:"Component Context"},r=[{value:"CKComponentContext",id:"ckcomponentcontext",children:[]},{value:"CKComponentMutableContext",id:"ckcomponentmutablecontext",children:[]}],p={rightToc:r},i="wrapper";function b(e){var t=e.components,n=c(e,["components"]);return Object(o.b)(i,a({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,Object(o.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"ckcomponentcontext"})),Object(o.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#ckcomponentcontext"}),"#"),Object(o.b)("inlineCode",{parentName:"h2"},"CKComponentContext")),Object(o.b)("p",null,"Provides a way to pass data through the component tree without having to pass props down manually at every level. Items are keyed by class."),Object(o.b)("p",null,"In ComponentKit, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Component context provides a way to implicitly share values like these between components without having to explicitly pass a prop through every level of the tree."),Object(o.b)("div",{class:"note-important"},Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CKComponentContext")," values are ",Object(o.b)("strong",{parentName:"p"},"NOT")," expected to change between component generations. This is an optimization to allow better component reuse in ",Object(o.b)("inlineCode",{parentName:"p"},"CKRenderComponent"),".\nIf your context values need to be changed between component generations, take a look at ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponentMutableContext"),".")),Object(o.b)("div",{class:"note"},Object(o.b)("p",null,"Context should be used sparingly. Prefer explicitly passing parameters instead.")),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-objectivec"})," {\n  // Declaring a context:\n  CKComponentContext<CKFoo> c(foo);\n\n  // Reading a context: (any components created while c is in scope will be able to read its value by calling).\n  auto const foo = CKComponentContext<CKFoo>::get();\n }\n")),Object(o.b)("p",null," You may nest contexts with the same class, in which case the innermost context defines the value when fetched:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-objectivec"})," {\n   CKComponentContext<CKFoo> c1(foo1);\n   {\n     CKComponentContext<CKFoo> c2(foo2);\n     // CKComponentContext<CKFoo>::get() will return foo2 here\n   }\n   // CKComponentContext<CKFoo>::get() will return foo1 here\n }\n")),Object(o.b)("h2",null,Object(o.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"anchor",id:"ckcomponentmutablecontext"})),Object(o.b)("a",a({parentName:"h2"},{"aria-hidden":!0,className:"hash-link",href:"#ckcomponentmutablecontext"}),"#"),Object(o.b)("inlineCode",{parentName:"h2"},"CKComponentMutableContext")),Object(o.b)("p",null,"Similar to ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponentContext"),", but allows context values ",Object(o.b)("strong",{parentName:"p"},"changes")," between generations."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-objectivec"})," {\n   // Declaring a context:\n   CKComponentMutableContext<CKFoo> c(foo);\n\n   // Reading a context: (any components created while c is in scope will be able to read its value by calling).\n   auto const foo = CKComponentMutableContext<CKFoo>::get();\n }\n")),Object(o.b)("p",null," You may nest contexts with the same class, in which case the innermost context defines the value when fetched:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-objectivec"})," {\n   CKComponentMutableContext<CKFoo> c1(foo1);\n   {\n     CKComponentMutableContext<CKFoo> c2(foo2);\n     // CKComponentMutableContext<CKFoo>::get() will return foo2 here\n   }\n   // CKComponentMutableContext<CKFoo>::get() will return foo1 here\n }\n")),Object(o.b)("div",{class:"note"},Object(o.b)("p",null," If you have to use context, consider using ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponentContext")," instead. ",Object(o.b)("inlineCode",{parentName:"p"},"CKComponentMutableContext")," makes component reuse more difficult.")))}b.isMDXComponent=!0}}]);