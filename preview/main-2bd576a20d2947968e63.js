webpackJsonp([0],[,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(0),l=a(r),u=n(0),i=n(9),o=n(14),c=a(o);!function(e){(0,u.render)(l.default.createElement(i.AppContainer,null,l.default.createElement(e,null)),document.querySelector('[data-js="app"]'))}(c.default)},,,,,,,,,,,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=a(o),f=n(15),s=a(f);n(19);var d=function(e){function t(){r(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={activePage:1,total:20},e.handleClick=e.handleClick.bind(e),e}return u(t,e),i(t,[{key:"handleClick",value:function(e){this.setState({activePage:e})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("h1",null,"Total: ",this.state.total),c.default.createElement("h2",null,"Active Page: ",this.state.activePage),c.default.createElement(s.default,{activePage:this.state.activePage,total:this.state.total,pageLink:"/page/%page%/",onClick:this.handleClick}))}}]),t}(o.PureComponent);t.default=d},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),l=a(r),u=n(16),i=a(u);n(17);var o=function(e){return e?"span":"a"},c=function(e){var t=e.total,n=e.activePage,a=e.onClick,r=e.pageLink,u=e.children,i=e.type,c="first"===i?n-1:n+1;u="first"===i?n>1?u:"":n<t?u:"";var f=o(""===u);return l.default.createElement("li",{key:i,className:"navitem -"+i},l.default.createElement(f,{className:"link",href:r.replace("%page%",c),onClick:"a"===f?a:""},l.default.createElement("span",{className:"spacer -"+i},u)))},f=function(e){var t=e.total,n=e.activePage,a=e.pageLink,r=e.onClick;if(t<=1)return null;var u=function(e,t){e.preventDefault(),r(t)};return l.default.createElement("ul",{className:"nav-content"},l.default.createElement(c,{activePage:n,onClick:function(e){return u(e,n-1)},pageLink:a,total:t,type:"first"},"Anterior"),(0,i.default)({total:t,activePage:n}).map(function(e,t){var r=o(e===n);return l.default.createElement("li",{className:"navitem "+(e===n?"-selected":""),key:t},l.default.createElement(r,{className:"link",href:a.replace("%page%",e),onClick:function(t){return u(t,e)}},e))}),l.default.createElement(c,{activePage:n,onClick:function(e){return u(e,n+1)},pageLink:a,total:t,type:"last"},"Mais"))};t.default=f},function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.total,n=void 0===t?1:t,r=e.activePage,l=void 0===r?1:r;if(n<=1)return[];var u=n>10?10:n,i=Array.from({length:u},function(e,t){return t+1});if(n<=10)return i;var o=l-i[5];o+u>n&&(o=n-u);var c=Array.from({length:o},function(e,t){return t+1+i.length});return o>0&&(i=[].concat(a(i.slice(o)),a(c))),i};t.default=r},function(e,t){},,function(e,t){}],[1]);