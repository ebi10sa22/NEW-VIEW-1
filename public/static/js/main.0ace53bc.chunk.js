(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{21:function(e,t,a){e.exports={Container:"Movie_Container__2iO6Y",Bottom:"Movie_Bottom__2NRuR",Title:"Movie_Title__fBAa6"}},27:function(e,t,a){e.exports={ContainerInner:"Movies_ContainerInner__2mdfV"}},38:function(e,t,a){},44:function(e,t,a){e.exports=a(86)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/tmdb.032aacbe.svg"},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(39),c=a.n(s),l=(a(49),a(7)),i=a(8),r=a(10),u=a(9),m=a(2);a(50),a(51);var p=function(){return o.a.createElement("div",{className:"nav__bar"},o.a.createElement(m.b,{className:"nav__link",to:"/"},o.a.createElement("img",{className:"nav__logo",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg",alt:"logo"})),o.a.createElement(m.b,{className:"nav__link",to:"/login"},o.a.createElement("button",{className:"nav__login"},"Sign In")))};var d=function(e){return e.Image,o.a.createElement("div",{className:"landing"},o.a.createElement(p,null),o.a.createElement("div",{className:"landing__background"},o.a.createElement("div",{className:"landing__intro"},o.a.createElement("h1",null,"Get Started"),o.a.createElement("p",null,"To watch and get info about your favourite movies"),o.a.createElement(m.b,{to:"/register"},o.a.createElement("button",{className:"landing__button"},"Register")),o.a.createElement("p",{style:{color:"#111",textShadow:"none",fontSize:"16px",marginTop:"10px"}},"To register, Click above"))))},g=a(14);a(57);var h=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),l=Object(g.a)(c,2),i=l[0],r=l[1];return o.a.createElement("div",{className:"login"},o.a.createElement("div",{className:"login__space"},o.a.createElement("p",{className:"login__header"},"Login"),o.a.createElement("div",{className:"login__components"},o.a.createElement("form",null,o.a.createElement("p",{className:"login__line1"},"Username or Email"),o.a.createElement("input",{type:"email",className:"login__input",placeholder:"Email or Username",onChange:function(e){var t=e.target.value;s(t)},label:"email",value:a}),o.a.createElement("p",{className:"login__line2"},"Password"),o.a.createElement("input",{value:i,label:"password",type:"password",className:"login__input",placeholder:"Password",onChange:function(e){var t=e.target.value;r(t)},onClick:function(){}}),o.a.createElement("div",{className:"login__button"},o.a.createElement(m.b,{to:"/login"},o.a.createElement("button",{className:"login__submit"},"Login")),o.a.createElement("p",null,"(or)")),o.a.createElement("div",{className:"login__socialMediaButton"},o.a.createElement("button",{className:"loginBtn loginBtn--facebook",onClick:function(){}},"Facebook"),o.a.createElement("button",{className:"loginBtn loginBtn--google",onClick:function(){}},"Google"),o.a.createElement("button",{className:"loginBtn loginBtn--twitter",onClick:function(){}},"Twitter"),o.a.createElement("button",{className:"loginBtn loginBtn--github",onClick:function(){}},"Github"),o.a.createElement(m.b,{to:"/register"},o.a.createElement("div",{className:"login__registerlink"},o.a.createElement("p",null,"Don't you have an account Register now !!"))))))))};a(58);var v=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=(t[0],t[1]),s=Object(n.useState)([""]),c=Object(g.a)(s,2),l=(c[0],c[1]),i=Object(n.useState)(""),r=Object(g.a)(i,2),u=(r[0],r[1]),p=Object(n.useState)(""),d=Object(g.a)(p,2),h=(d[0],d[1]);return o.a.createElement("div",{className:"register"},o.a.createElement("div",{className:"register__space"},o.a.createElement("p",{className:"register__header"},"Register"),o.a.createElement("div",{className:"register__content"},o.a.createElement("form",null,o.a.createElement("p",{className:"register__line"},"Name"),o.a.createElement("input",{type:"text",className:"register__input",placeholder:"Name",onChange:function(e){var t=e.target.value;a(t)}}),o.a.createElement("p",{className:"register__line"},"Email"),o.a.createElement("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",className:"register__input",placeholder:"Email"}),o.a.createElement("p",{className:"register__line"},"Password"),o.a.createElement("input",{onChange:function(e){var t=e.target.value;u(t)},type:"text",className:"register__input",placeholder:"Password"}),o.a.createElement("p",{className:"register__line"},"Conform Password"),o.a.createElement("input",{onChange:function(e){var t=e.target.value;h(t)},type:"text",className:"register__input",placeholder:"Conform password"}),o.a.createElement("div",{className:"register__button"},o.a.createElement("button",{className:"register__submit"},"Register")),o.a.createElement("div",{className:"register__loginLink"},o.a.createElement(m.b,{to:"/login"},o.a.createElement("p",null,"To login, click here")))))))},_=a(3),f=a(18),E=a.n(f),b=E.a.create({baseURL:"https://api.themoviedb.org/3"}),N={top_rated:"/movie/top_rated?",now_playing:"/movie/now_playing?",popular:"/movie/popular?",upComing:"/movie/upcoming?"},k=a(17),y=a.n(k),w=(a(76),a(38),a(25)),x=a.n(w);function C(e){var t=e.selected,n=e.closePopup,s=t;navigator.onLine||alert("Network not available");var c,l,i="https://image.tmdb.org/t/p/w500"+s.poster_path,r=s.overview,u=s.original_title,m=s.imdb_id,p=s.release_date,d=s.runtime,g=s.tagline,h=s.production_companies,v=s.genres,_=s.budget,f=s.revenue,E=s.vote_average,b=S(h),N=S(v),k="https://image.tmdb.org/t/p/original"+s.backdrop_path;return"undefined"===E||0===E||"undefined"===m||"null"===m||"undefined"===d||"null"===d||d<0||"-"===d?(E="-",m="-",d="-"):E=s.vote_average+" / 10","undefined"!==h&&"null"!==h&&""!==h||(b=""),"undefined"===f||0===f||"undefined"===_||0===_?(f="-",_="-"):(f=x()(s.revenue).format("($0,0)"),_=x()(s.budget).format("($0,0)")),null!==s.poster_path&&null!==k||(i="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g",k="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSols5HZxlQWyS9JY5d3_L9imbk0LiziHiyDtMZLHt_UNzoYUXs2g"),o.a.createElement("div",{className:"popup",style:{position:"fixed",width:"100%",background:"".concat(k),height:"99.5vh"}},o.a.createElement("div",{className:"Inner"},o.a.createElement("div",{className:"poster"},o.a.createElement("img",{id:"poster",className:"poster",src:a(77),alt:"LOGO"}),o.a.createElement("button",{onClick:n,className:"button"},"close")),o.a.createElement("img",{src:i,alt:"posterImg"}),o.a.createElement("div",{className:"data-container"},o.a.createElement("h1",{style:{marginTop:"5px",color:"white"}},"".concat(u," ")),o.a.createElement("span",{className:"tagline"},g),o.a.createElement("p",null,(l=150,(c=r).length>l?c.trim().substring(0,l-3).trim()+"...":c)),o.a.createElement("div",{className:"additional-details",style:{margin:"0"}},o.a.createElement("p",{style:{color:"white",fontSize:"32px"}},"Genre:"),o.a.createElement("span",{className:"genre-list",style:{color:"#01d277",fontSize:"24px"}},N),o.a.createElement("p",{style:{color:"white",fontSize:"20px"}},"Production :"),o.a.createElement("span",{className:"production-list",style:{color:"#01d277",marginLeft:"30px"}},b),o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"head1"}," ","Vote Average : ",o.a.createElement("br",null)," ",o.a.createElement("span",{style:{margin:"0px 12px"},className:"cont"},"".concat(E))),o.a.createElement("div",{className:"head2"}," ","Running Time : ",o.a.createElement("br",null)," ",o.a.createElement("span",{style:{margin:"0px 12px"},className:"cont"},"".concat(d," mins")," ")," "),o.a.createElement("div",{className:"head3"}," ","Original Release :",o.a.createElement("br",null)," ",o.a.createElement("span",{style:{margin:"0px 12px"},className:"cont"},p)),o.a.createElement("div",{className:"head4"}," ","Box Office : ",o.a.createElement("br",null)," ",o.a.createElement("span",{style:{margin:"0px 12px"},className:"cont"},"".concat(f)),o.a.createElement("br",null)))))))}function S(e){var t=[];return void 0!==e&&e.forEach((function(e){t.push(e.name)})),t.join(", ")}var O=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).openPopup=function(t){b.get("/movie/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716")).then((function(t){var a=t.data;e.setState({result_data:a}),console.log(t.data)}))},e.closePopup=function(){e.setState({result_data:[]})},e.clicked=function(){e.setState({show:!0}),e.fetchData()},e.fetchData=function(){b.get(N.popular+"&api_key=dbc0a6d62448554c27b6167ef7dabb1b"+"&page=".concat(e.state.count_pages)).then((function(t){return e.setState({movies:t.data.results,pages:t.data.total_pages})}))},e.previous=function(){e.state.count_pages>1&&1!==e.state.count_pages&&(e.setState({count_pages:e.state.count_pages-1}),e.fetchData())},e.next=function(){e.state.count_pages<=e.state.pages&&e.setState({count_pages:e.state.count_pages+1}),e.fetchData()},e.state={show:!1,pages:1,movies:[],count_pages:1,posterImg:"https://image.tmdb.org/t/p/original/",result_data:{}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"popular"},o.a.createElement("header",null,o.a.createElement(m.b,{to:"/search"},o.a.createElement(y.a,{style:{padding:"5px 10px"}})),this.state.show&&o.a.createElement("p",null,"Total Pages : ",this.state.pages)),o.a.createElement("div",{className:"popular__button"},o.a.createElement("button",{onClick:this.clicked,style:{visibility:"".concat(!!this.state.show&&"hidden")}},"Click here to load movies")),console.log(this.state.movies),o.a.createElement("div",{className:"popular__movies"},this.state.movies.map((function(t){return o.a.createElement("img",{src:"".concat(e.state.posterImg).concat(t.poster_path),key:t.id,alt:t.original_title,onClick:function(){e.openPopup(t.id)}})}))),o.a.createElement("div",{className:"more__button"},this.state.show&&o.a.createElement("footer",null,o.a.createElement("button",{onClick:this.previous},"previous"),o.a.createElement("button",{onClick:this.next},"Next"))),"undefined"!==typeof this.state.result_data.original_title&&o.a.createElement(C,{selected:this.state.result_data,closePopup:this.closePopup}))}}]),a}(o.a.Component),P=(a(79),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).openPopup=function(t){b.get("/movie/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716")).then((function(t){var a=t.data;e.setState({result_data:a}),console.log(t.data)}))},e.closePopup=function(){e.setState({result_data:[]})},e.clicked=function(){e.setState({show:!0}),e.fetchData()},e.fetchData=function(){b.get(N.top_rated+"&api_key=dbc0a6d62448554c27b6167ef7dabb1b"+"&page=".concat(e.state.count_pages)).then((function(t){return e.setState({movies:t.data.results,pages:t.data.total_pages})}))},e.previous=function(){e.state.count_pages>1&&1!==e.state.count_pages&&(e.setState({count_pages:e.state.count_pages-1}),e.fetchData())},e.next=function(){e.setState({count_pages:e.state.count_pages+1}),e.fetchData()},e.state={show:!1,pages:0,movies:[],count_pages:1,posterImg:"https://image.tmdb.org/t/p/original/",result_data:{}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"top"},o.a.createElement("header",null,o.a.createElement(m.b,{to:"/search"},o.a.createElement(y.a,{style:{padding:"5px 10px"}})),this.state.show&&o.a.createElement("p",null,"Total Pages : ",this.state.pages)),o.a.createElement("div",{className:"top__button"},o.a.createElement("button",{onClick:this.clicked,style:{visibility:"".concat(!!this.state.show&&"hidden")}},"Click here to load movies")),console.log(this.state.movies),o.a.createElement("div",{className:"top__movies"},this.state.movies.map((function(t){return o.a.createElement("img",{src:"".concat(e.state.posterImg).concat(t.poster_path),key:t.id,alt:t.original_title,onClick:function(){e.openPopup(t.id)}})}))),o.a.createElement("div",{className:"more__button"},this.state.show&&o.a.createElement("footer",null,o.a.createElement("button",{onClick:this.previous},"previous"),o.a.createElement("button",{onClick:this.next},"Next"))),"undefined"!==typeof this.state.result_data.original_title&&o.a.createElement(C,{selected:this.state.result_data,closePopup:this.closePopup}))}}]),a}(o.a.Component)),j=(a(80),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).openPopup=function(t){b.get("/movie/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716")).then((function(t){var a=t.data;e.setState({result_data:a}),console.log(t.data)}))},e.closePopup=function(){e.setState({result_data:[]})},e.clicked=function(){e.setState({show:!0}),e.fetchData()},e.fetchData=function(){b.get(N.upComing+"&api_key=dbc0a6d62448554c27b6167ef7dabb1b"+"&page=".concat(e.state.count_pages)).then((function(t){return e.setState({movies:t.data.results,pages:t.data.total_pages})}))},e.previous=function(){e.state.count_pages>1&&1!==e.state.count_pages&&(e.setState({count_pages:e.state.count_pages-1}),e.fetchData())},e.next=function(){e.state.count_pages<=e.state.pages&&e.setState({count_pages:e.state.count_pages+1}),e.fetchData()},e.state={show:!1,pages:0,movies:[],count_pages:1,posterImg:"https://image.tmdb.org/t/p/original/",result_data:{}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"upcoming"},o.a.createElement("header",null,console.log(this.state.pages),o.a.createElement(m.b,{to:"/search"},o.a.createElement(y.a,{style:{padding:"5px 10px"}})),this.state.show&&o.a.createElement("p",null,"Total Pages : ",this.state.pages)),o.a.createElement("div",{className:"upcoming__button"},o.a.createElement("button",{onClick:this.clicked,style:{visibility:"".concat(!!this.state.show&&"hidden")}},"Click here to load movies")),o.a.createElement("div",{className:"upcoming__movies"},this.state.movies.map((function(t){return o.a.createElement("img",{src:"".concat(e.state.posterImg).concat(t.poster_path),key:t.id,alt:t.original_title,onClick:function(){e.openPopup(t.id)}})}))),o.a.createElement("div",{className:"more__button"},this.state.show&&o.a.createElement("footer",null,o.a.createElement("button",{onClick:this.previous},"previous"),o.a.createElement("button",{onClick:this.next},"Next"))),"undefined"!==typeof this.state.result_data.original_title&&o.a.createElement(C,{selected:this.state.result_data,closePopup:this.closePopup}))}}]),a}(o.a.Component)),D=(a(81),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).openPopup=function(t){b.get("/movie/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716")).then((function(t){var a=t.data;e.setState({result_data:a}),console.log(t.data)}))},e.closePopup=function(){e.setState({result_data:[]})},e.clicked=function(){e.setState({show:!0}),e.fetchData()},e.fetchData=function(){b.get(N.now_playing+"&api_key=dbc0a6d62448554c27b6167ef7dabb1b"+"&page=".concat(e.state.count_pages)).then((function(t){return e.setState({movies:t.data.results,pages:t.data.total_pages})}))},e.previous=function(){e.state.count_pages>1&&1!==e.state.count_pages&&(e.setState({count_pages:e.state.count_pages-1}),e.fetchData())},e.next=function(){e.setState({count_pages:e.state.count_pages+1}),e.fetchData()},e.state={show:!1,pages:1,movies:[],count_pages:1,posterImg:"https://image.tmdb.org/t/p/original/",result_data:{}},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"trending"},o.a.createElement("header",null,o.a.createElement(m.b,{to:"/search"},o.a.createElement(y.a,{style:{padding:"5px 10px"}})),this.state.show&&o.a.createElement("p",null,"Total Pages : ",this.state.pages)),o.a.createElement("div",{className:"trending__button"},o.a.createElement("button",{onClick:this.clicked,style:{visibility:"".concat(!!this.state.show&&"hidden")}},"Click here to load movies")),console.log(this.state.movies),o.a.createElement("div",{className:"trending__movies"},this.state.movies.map((function(t){return o.a.createElement("img",{src:"".concat(e.state.posterImg).concat(t.poster_path),key:t.id,alt:"poster",onClick:function(){e.openPopup(t.id)}})}))),o.a.createElement("div",{className:"more__button"},this.state.show&&o.a.createElement("footer",null,o.a.createElement("button",{onClick:this.previous},"previous"),o.a.createElement("button",{onClick:this.next},"Next"))),"undefined"!==typeof this.state.result_data.original_title&&o.a.createElement(C,{selected:this.state.result_data,closePopup:this.closePopup}))}}]),a}(o.a.Component));var B=function(){var e=Object(_.f)();return o.a.createElement("div",null,o.a.createElement("h3",null,"No match found for",o.a.createElement("code",null,e.pathname)))},I=a(21),T=a.n(I),R=a(26),L=a.n(R),H=a(40),M={};!function(){var e}();var U=function(e){var t,a,n=e.item,s=e.openPopup,c="http://image.tmdb.org/t/p/w185"+n.poster_path,l=n.vote_average,i=n.original_title;return 0!==l&&"undefined"!==l||(l="-"),o.a.createElement("div",{onClick:function(){var e=n.id;s(e)},className:T.a.Container,style:{backgroundImage:"url(".concat(c,")")}},o.a.createElement("div",{className:T.a.Bottom},o.a.createElement("h3",{className:T.a.Title},(a=19,(t=i).length>a?t.trim().substring(0,a-3).trim()+"...":t))))},z=a(27),A=a.n(z),G=function(e){var t=e.list,a=e.openPopup,n="";return t&&(n=t.map((function(e,t){return o.a.createElement("div",null,o.a.createElement(U,{key:t,item:e,openPopup:a}))}))),o.a.createElement("div",{className:A.a.Container},o.a.createElement("div",{className:A.a.ContainerInner},n))},q=(a(83),a(42)),Y=a.n(q),J=a(41),W=a.n(J);var Z=function(e){var t=e.input_val,a=e.keyHand,s=Object(n.useState)(),c=Object(g.a)(s,2),l=c[0],i=c[1];return o.a.createElement("div",{className:"nav"},o.a.createElement(m.b,{className:"nav__link",to:"/home"},o.a.createElement("img",{className:"nav__logo",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg",alt:"logo"})),o.a.createElement("div",{className:"nav__options"},o.a.createElement("div",{className:"search-bar"},o.a.createElement("input",{type:"text",className:l?"search-bar-true":"search-bar-false",onKeyPress:a,label:"search",onChange:t,placeholder:"Type something to search"})),o.a.createElement(W.a,{onClick:function(){return i(!0)},style:{color:"white",marginRight:"10px"}}),o.a.createElement("ul",{className:"nav__content"},o.a.createElement(m.b,{to:"popular"},o.a.createElement("li",null,"Popular")),o.a.createElement(m.b,{to:"top-rated"},o.a.createElement("li",null,"Top-rated")),o.a.createElement(m.b,{to:"trending"},o.a.createElement("li",null,"Now playing")),o.a.createElement(m.b,{to:"upcoming"},o.a.createElement("li",null,"Upcoming"))),o.a.createElement(m.b,{to:"/home"},o.a.createElement(Y.a,null))))},$=(a(84),function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).openPopup=function(t){b.get("/movie/".concat(t,"?&api_key=cfe422613b250f702980a3bbf9e90716")).then((function(t){var a=t.data;e.setState({selected:a})}))},e.keyHandle=function(t){"Enter"===t.key&&(e.setState({show:!0}),b.get("/search/movie?query=".concat(e.state.value,"&api_key=dbc0a6d62448554c27b6167ef7dabb1b&page=").concat(e.state.pages)).then((function(t){var a=t.data.results;e.setState({movies:a}),e.setState({total_page:t.data.total_pages})})).catch=function(e){console.log("Refresh the page Or else try later")})},e.input_value=function(t){e.setState({value:t.target.value})},e.closePopup=function(){e.setState({selected:{}})},e.previous=function(){e.state.pages>1&&e.setState({pages:e.state.pages-1}),e.keyHandle(e.state.e)},e.next=function(){e.state.pages<=e.state.total_page&&e.setState({pages:e.state.pages+1}),e.keyHandle(e.state.e)},e.state={movies:[],value:[],show:!1,selectedd:{},pages:1,total_page:0,e:{key:"Enter"}},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Z,{input_val:this.input_value,keyHand:this.keyHandle}),o.a.createElement(G,{list:this.state.movies,openPopup:this.openPopup}),"undefined"!==typeof this.state.selected&&o.a.createElement(C,{selected:this.state.selected,closePopup:this.closePopup}),o.a.createElement("div",{className:"more__button"},this.state.show&&o.a.createElement("footer",null,o.a.createElement("button",{onClick:this.next},"Next"),o.a.createElement("button",{onClick:this.previous},"Back"))))}}]),a}(o.a.Component)),F=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={apiResponse:""},e}return Object(i.a)(a,[{key:"callApi",value:function(){var e=this;fetch("http://localhost:9000/home/").then((function(e){console.log(e)})).then((function(t){return e.setState({apiResponse:t})}))}},{key:"UNSAFE_componentDidMount",value:function(){this.callApi()}},{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"app"},o.a.createElement(_.c,null,o.a.createElement(_.a,{exact:!0,path:"/"},o.a.createElement(d,null)),o.a.createElement(_.a,{exact:!0,path:"/login"},o.a.createElement(h,null)),o.a.createElement(_.a,{exact:!0,path:"/register"},o.a.createElement(v,null)),o.a.createElement(_.a,{exact:!0,path:"/search"},o.a.createElement($,null)),o.a.createElement(_.a,{exact:!0,path:"/top-rated"},o.a.createElement(P,null)),o.a.createElement(_.a,{exact:!0,path:"/popular"},o.a.createElement(O,null)),o.a.createElement(_.a,{exact:!0,path:"/trending"},o.a.createElement(D,null)),o.a.createElement(_.a,{exact:!0,path:"/upcoming"},o.a.createElement(j,null)),o.a.createElement(_.a,{exact:!0,path:""},o.a.createElement(B,null))),console.log(this.state.apiResponse)))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.0ace53bc.chunk.js.map