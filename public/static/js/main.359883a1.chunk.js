(this["webpackJsonpreact-auth-client-done-v2"]=this["webpackJsonpreact-auth-client-done-v2"]||[]).push([[0],{39:function(e,t,a){e.exports=a(68)},44:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(36),s=a.n(l),o=a(1),i=a(2),c=a(5),u=a(4),m=a(6),p=a(17),d=(a(44),a(13)),h=a(3),b=a(14),g=a.n(b),f=new(function(){function e(){Object(o.a)(this,e),this.auth=g.a.create({baseURL:"https://solveitapp.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.mail,r=e.picture,l=e.expert,s=e.points;return this.auth.post("/auth/signup",{username:t,password:a,mail:n,picture:r,expert:l,points:s}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),E=r.a.createContext(),v=E.Consumer,y=E.Provider,N=function(e){return function(t){function a(){return Object(o.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(v,null,(function(a){var n=a.login,l=a.signup,s=a.user,o=a.logout,i=a.isLoggedin,c=a.isLoading;return r.a.createElement(e,Object.assign({login:n,signup:l,user:s,logout:o,isLoggedin:i,isLoading:c},t.props))}))}}]),a}(r.a.Component)},O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0},a.signup=function(e){var t=e.username,n=e.password,r=e.mail,l=e.picture,s=e.expert,o=e.points;f.signup({username:t,password:n,mail:r,picture:l,expert:s,points:o}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e){var t=e.username,n=e.password;f.login({username:t,password:n}).then((function(e){return a.setState({isLoggedin:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){f.logout().then((function(){return a.setState({isLoggedin:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.me().then((function(t){return e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,l=this.login,s=this.logout,o=this.signup;return r.a.createElement(y,{value:{isLoading:t,isLoggedin:a,user:n,login:l,logout:s,signup:o}},this.props.children)}}]),t}(r.a.Component),j=new(function(){function e(){Object(o.a)(this,e),this.auth=g.a.create({baseURL:"https://solveitapp.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"imageUpload",value:function(e){return this.auth.post("/cloudinary",e).then((function(e){return e.data}))}}]),e}()),w=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",mail:"",picture:"",points:20,expert:"dogs",imageReady:!1},a.handleFormSubmit=function(e){e.preventDefault(),console.log("before senddin'",a.state),a.props.signup(a.state)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handlePhotoChange=function(e){console.log(e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("photo",t),j.imageUpload(n).then((function(e){console.log("da image ",e),a.setState({picture:e,imageReady:!0}),console.log("da picture in da state",a.state.picture)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,l=t.mail,s=t.expert;return r.a.createElement("div",null,r.a.createElement("form",{className:"signupform",onSubmit:this.handleFormSubmit,encType:"multipart/form-data"},r.a.createElement("h1",null,"Sign Up"),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Username:"),r.a.createElement("input",{className:"input is-info",type:"text",name:"username",value:a,onChange:this.handleChange})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password:"),r.a.createElement("input",{className:"input is-info",type:"password",name:"password",value:n,onChange:this.handleChange})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Mail:"),r.a.createElement("input",{className:"input is-info",type:"mail",name:"mail",placeholder:"usermail@example.com",value:l,onChange:this.handleChange})),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Expert at :"),r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:"select is-fullwidth"},r.a.createElement("select",{name:"expert",value:s,onChange:this.handleChange},r.a.createElement("option",{value:"dogs"},"Dogs"),r.a.createElement("option",{value:"cats"},"Cats"),r.a.createElement("option",{value:"parrots"},"Parrots"))))),r.a.createElement("label",{className:"label"},"Upload Image"),r.a.createElement("input",{className:"input",type:"file",name:"photo",onChange:function(t){return e.handlePhotoChange(t)}}),r.a.createElement("div",{className:"field is-grouped is-grouped-centered"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-link is-outlined",disabled:!this.state.imageReady},"Submit")))),r.a.createElement("p",null,"Already have account?"),r.a.createElement(h.b,{to:"/login"}," Login"))}}]),t}(n.Component)),C=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",null,r.a.createElement("form",{className:"loginform",onSubmit:this.handleFormSubmit},r.a.createElement("h1",{id:"loginformh1"},"Login"),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Username:"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-info",type:"text",name:"username",value:t,onChange:this.handleChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Password:"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{className:"input is-info",type:"password",name:"password",value:a,onChange:this.handleChange}))),r.a.createElement("div",{className:"field is-grouped is-grouped-centered"},r.a.createElement("div",{className:"control"},r.a.createElement("input",{class:"button is-link is-outlined",type:"submit",value:"Login"})))),r.a.createElement("p",null,"Don't have an account?"),r.a.createElement(h.b,{to:"/signup"}," Signup"))}}]),t}(n.Component)),k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Private Route"))}}]),t}(n.Component),S=a(16),x=a(9),P=N(function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.user,e.logout,e.isLoggedin);return r.a.createElement("div",null,t?r.a.createElement("div",{id:"Navbar"},r.a.createElement("nav",{className:"level is-mobile"},r.a.createElement(h.b,{to:"/MyProblems"}," ",r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement(S.a,{icon:x.a,style:{color:"white",fontSize:"40px"}})))),r.a.createElement(h.b,{to:"/AskProblem"}," ",r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement(S.a,{icon:x.c,style:{color:"white",fontSize:"40px"}})))),r.a.createElement(h.b,{to:"/ProblemsToSolve"}," ",r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement(S.a,{icon:x.b,style:{color:"white",fontSize:"40px"}})))),r.a.createElement(h.b,{to:"/UserProfile"}," ",r.a.createElement("div",{className:"level-item has-text-centered"},r.a.createElement("div",null,r.a.createElement(S.a,{icon:x.e,style:{color:"white",fontSize:"35px"}})))))):null)}}]),t}(n.Component)),A=N(function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logout,n=e.isLoggedin;return r.a.createElement("div",null,n?r.a.createElement("div",{className:"Topbar"},r.a.createElement("div",null,r.a.createElement("h3",null,"Hi ! ",t.username)),r.a.createElement("img",{className:"logoImage",src:"https://res.cloudinary.com/ekgaliana/image/upload/v1576627130/solve-it-app/Solveit_logo_200x200_copy_jpmzu9.png",alt:""}),r.a.createElement("button",{onClick:a,className:"button is-small is-info is-outlined"},"Logout")):r.a.createElement("div",null,r.a.createElement("img",{className:"landingimage",src:"https://res.cloudinary.com/ekgaliana/image/upload/v1576627130/solve-it-app/Solveit_logo_200x200_copy_jpmzu9.png",alt:""}),r.a.createElement("br",null),r.a.createElement(h.b,{to:"/login"}," ",r.a.createElement("button",{className:"button is-link is-outlined"},"Login")," "),r.a.createElement(h.b,{to:"/signup"}," ",r.a.createElement("button",{className:"button is-link is-outlined"},"Signup")," ")))}}]),t}(n.Component)),L=new(function(){function e(){Object(o.a)(this,e),this.user=g.a.create({baseURL:"https://solveitapp.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"getOneById",value:function(e){return this.user.get("users/".concat(e)).then((function(e){return e.data}))}},{key:"updateUser",value:function(e,t){return this.user.put("users/".concat(e),{userId:t}).then((function(e){return e.data}))}}]),e}()),_=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),r.a.createElement("div",{className:"problem"},r.a.createElement(h.b,{to:"/MyProblems/details/".concat(this.props.oneProblem._id),className:"text-link"},r.a.createElement(S.a,{icon:x.c,style:{color:"white",fontSize:"25px"}}),r.a.createElement("p",{className:"is-size-5"},this.props.oneProblem.text),r.a.createElement("img",{src:this.props.oneProblem.pic,alt:""}),r.a.createElement("div",null,r.a.createElement("p",{className:"is-size-6"},"Category :  ",this.props.oneProblem.category),r.a.createElement("p",{className:"is-size-6"},r.a.createElement(S.a,{icon:x.b,style:{color:"white",fontSize:"22px"}}),"Answers ",this.props.oneProblem.problemanswers.length))),r.a.createElement("button",{className:"DeleteButton",key:this.props.oneProblem._id,onClick:function(){return e.props.delete(e.props.oneProblem._id,e.props.oneProblem.author,e.props.oneProblem.category)}},r.a.createElement(S.a,{icon:x.d,style:{color:"white",fontSize:"20px"}})))}}]),t}(n.Component),U=new(function(){function e(){Object(o.a)(this,e),this.problem=g.a.create({baseURL:"https://solveitapp.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"askproblem",value:function(e,t,a,n){return this.problem.post("problems",{category:e,text:t,pic:a,authorID:n}).then((function(e){return e.data}))}},{key:"updateproblem",value:function(e,t,a){return this.problem.put("problems/update/".concat(e),{solution:t,answerauthorId:a}).then((function(e){return e.data}))}},{key:"deleteproblem",value:function(e,t,a){return console.log("value insiodde service",e),console.log(t),console.log(a),this.problem.put("problems/delete/".concat(e),{authorID:t,category:a}).then((function(e){return e.data}))}}]),e}()),D=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},problemsempty:!1,problems:[]},a.deleteProblem=function(e,t,n){U.deleteproblem(e,t,n).then((function(){var t=a.state.problems.filter((function(t){return t._id!==e}));a.setState({problems:t.reverse()})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id;L.getOneById(t).then((function(t){e.setState({user:t,problems:t.myproblems}),0===t.myproblems.length&&e.setState({problemsempty:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.problems;return r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"is-size-3"}," Your problems asked"),t?t.reverse().map((function(t){return r.a.createElement(_,{delete:e.deleteProblem,oneProblem:t,key:t._id})})):r.a.createElement("h4",null,"loading"),this.state.problemsempty?r.a.createElement("h2",null,"No problems asked"):null)}}]),t}(n.Component));function z(e,t){return t.myproblems.find((function(t){return t._id===e}))}var M=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},myproblem:{},problemAnswersEmpty:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a=this.props.user._id;L.getOneById(a).then((function(a){e.setState({user:a}),e.setState({myproblem:z(t,a)}),0===e.state.myproblem.problemanswers.length&&e.setState({problemAnswersEmpty:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.user,a=this.state.myproblem;return console.log("is empty",this.state.problemAnswersEmpty),r.a.createElement("div",{className:"Container"},r.a.createElement("h2",{className:"is-size-4"},"My problem asked is :"),r.a.createElement("div",{className:"problem"},r.a.createElement("h2",{className:"is-size-4"},t.myproblems?a.text:r.a.createElement("p",null,"loading")),r.a.createElement("img",{src:a.pic,alt:""})),r.a.createElement("hr",null),r.a.createElement("h3",{className:"is-size-4"},"Answers proposed"),t.myproblems?z(e,t).problemanswers.reverse().map((function(t){return r.a.createElement("div",{className:"answer",key:t._id},r.a.createElement(h.b,{to:"/MyProblems/details/".concat(e,"/AnswerDetails/").concat(t._id),className:"text-link"},r.a.createElement("p",null,"Answer : ",t.text),r.a.createElement("p",null," Answer picture :",r.a.createElement("br",null)," ",r.a.createElement("img",{src:t.pic,alt:""})),r.a.createElement("p",null," Answer author : ",t.author.username," ")))})):r.a.createElement("p",null,"loading"),this.state.problemAnswersEmpty?(r.a.createElement("br",null),r.a.createElement("h2",null,"No Answers recieved")):null)}}]),t}(n.Component));function I(e,t){return t.myproblems.find((function(t){return t._id===e}))}function R(e,t,a){return t.myproblems.find((function(t){return t._id===e})).problemanswers.find((function(e){return e._id===a}))}var B=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},updated:!1,myproblem:{},answer:{}},a.updateUser=function(e){var t=a.state.user,n=a.props.match.params,r=n.id,l=n.AnsId,s=R(r,t,l).author._id,o=U.updateproblem(r,l,s).then((function(){console.log("problem updated")})).catch((function(e){return console.log(e)})),i=L.updateUser(r,t._id).then((function(){console.log("user updateded")})).catch((function(e){return console.log(e)}));Promise.all([o,i]).then((function(){a.setState({updated:!0})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id,a=this.props.match.params,n=a.id,r=a.AnsId;L.getOneById(t).then((function(t){e.setState({user:t}),e.setState({myproblem:I(n,t)}),e.setState({answer:R(n,t,r)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props.match.params.id,t=this.state.user,a=this.state.myproblem,n=this.state.answer;return console.log("user charged",this.state.updated),r.a.createElement("div",{className:"Container"},r.a.createElement("h3",null,"My problem asked is : "),r.a.createElement("h3",null,t.myproblems?a.text:r.a.createElement("p",null,"loading")),r.a.createElement("img",{src:a.pic,alt:""}),r.a.createElement("hr",null),!this.state.updated&&t.myproblems?(r.a.createElement("h3",null," Answer Details"),r.a.createElement("div",{className:"answer"},r.a.createElement("p",null,"Answer details : ",n.text," "),n.pic?(r.a.createElement("p",null," Picture : "),r.a.createElement("br",null)):null,r.a.createElement("img",{src:n.pic,alt:""}))):null,this.state.updated?r.a.createElement("div",null," ",r.a.createElement("h5",null,"Problem added to problems solved"),r.a.createElement(h.b,{to:"/UserProfile"},r.a.createElement("button",{className:"button is-info"},"go to profile"))):r.a.createElement("div",null,r.a.createElement("button",{className:"button is-link is-outlined",onClick:this.updateUser},"Add to Problems Solved"),r.a.createElement(h.b,{to:"/MyProblems/details/".concat(e)}," ",r.a.createElement("button",{className:"button is-danger is-outlined"},"Discard")," ")))}}]),t}(n.Component)),F=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id;L.getOneById(t).then((function(t){e.setState({user:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"is-size-3"}," Problems to solve "),e.problemstosolve?e.problemstosolve.reverse().map((function(e){return r.a.createElement("div",{className:"problem",key:e._id},r.a.createElement(h.b,{to:"/ProblemsToSolve/details/".concat(e._id),className:"text-link"},r.a.createElement("p",{className:"is-size-4"}," ",e.text),r.a.createElement("img",{src:e.pic,alt:""}),r.a.createElement("p",{className:"is-size-6"},"Author : ",e.author.username),r.a.createElement("p",{className:"is-size-6"},"Category : ",e.category)))})):r.a.createElement("p",null,"loading"))}}]),t}(n.Component)),T=new(function(){function e(){Object(o.a)(this,e),this.answer=g.a.create({baseURL:"https://solveitapp.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"sendanswer",value:function(e,t,a,n,r){return this.answer.post("answers",{text:e,pic:t,category:a,problemtosolve:n,author:r}).then((function(e){return e.data}))}}]),e}());function J(e,t){return t.problemstosolve.find((function(t){return t._id===e}))}var G=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},description:"",problem:{},imageReady:!0,updated:!1},a.handleformsubmit=function(e){e.preventDefault();var t=a.state,n=t.description,r=t.pic,l=a.props.match.params.id,s=a.state.user;T.sendanswer(n,r,s.expert,l,s._id).then((function(){a.setState({description:"",pic:"noimage.jpg"}),a.setState({updated:!0})})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handlePhotoChange=function(e){a.setState({imageReady:!1}),console.log(e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("photo",t),j.imageUpload(n).then((function(e){console.log("da image ",e),a.setState({pic:e,imageReady:!0}),console.log("da picture in da state",a.state.pic)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a=this.props.user._id;L.getOneById(a).then((function(a){e.setState({user:a}),e.setState({problem:J(t,a)})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.user,a=this.state.problem;return r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"is-size-4"}," Problem to solve details"),r.a.createElement("div",{className:"problem"},r.a.createElement("h4",null," Problem asked : "),r.a.createElement("h4",null,t.problemstosolve?a.text:r.a.createElement("p",null,"loading")),r.a.createElement("img",{src:a.pic,alt:""})),r.a.createElement("h3",{className:"is-size-4"},"Propose solution :"),this.state.updated?r.a.createElement("div",null,r.a.createElement("h4",{className:"is-size-3"},"Answer Sent")," ,",r.a.createElement(h.b,{to:"/ProblemsToSolve"},r.a.createElement("button",{className:"button is-link is-outlined"},"Back to Problems to Solve"))):r.a.createElement("form",{className:"formsolution",onSubmit:this.handleformsubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Answer text :"),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea is-focused",name:"description",value:this.state.description,onChange:this.handleChange}))),r.a.createElement("label",{className:"label"},"Upload Image"),r.a.createElement("input",{className:"input",type:"file",name:"photo",onChange:function(t){return e.handlePhotoChange(t)}}),r.a.createElement("div",{className:"field is-grouped is-grouped-centered",id:"submitButtonAskproblem"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-link is-outlined",disabled:!this.state.imageReady},"Submit")))))}}]),t}(n.Component)),H=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},description:"",category:"dogs",pic:"noimage.jpg",imageReady:!0,updated:!1},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.category,r=t.description,l=t.pic,s=a.state.user;U.askproblem(n,r,l,s._id).then((function(){a.setState({description:"",category:"dogs",pic:"noimage.jpg"}),a.setState({updated:!0})})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handlePhotoChange=function(e){a.setState({imageReady:!1}),console.log(e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("photo",t),j.imageUpload(n).then((function(e){console.log("da image ",e),a.setState({pic:e,imageReady:!0}),console.log("da picture in da state",a.state.pic)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id;L.getOneById(t).then((function(t){e.setState({user:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"is-size-3"},"Ask a Problem"),this.state.updated?r.a.createElement("div",null,r.a.createElement("h4",null,"Problem Sent"),r.a.createElement(h.b,{to:"/MyProblems"},r.a.createElement("button",{className:"button is-link is-outlined"},"Go to my problems asked"))):r.a.createElement("form",{className:"formask",onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Category:"),r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("div",{className:"select is-fullwidth"},r.a.createElement("select",{name:"category",value:this.state.category,onChange:this.handleChange},r.a.createElement("option",{value:"dogs"},"Dogs"),r.a.createElement("option",{value:"cats"},"Cats"),r.a.createElement("option",{value:"parrots"},"Parrots"))))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Description:"),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea is-focused",name:"description",value:this.state.description,onChange:this.handleChange}))),r.a.createElement("label",{className:"label"},"Upload Image"),r.a.createElement("input",{className:"input",type:"file",name:"photo",onChange:function(t){return e.handlePhotoChange(t)}}),r.a.createElement("div",{className:"field is-grouped is-grouped-centered",id:"submitButtonAskproblem"},r.a.createElement("div",{className:"control"},r.a.createElement("button",{type:"submit",className:"button is-link is-outlined",disabled:!this.state.imageReady},"Submit")))))}}]),t}(n.Component)),W=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id;L.getOneById(t).then((function(t){e.setState({user:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.user;return console.log("user",e),console.log("user solved problems",e.mysolvedproblems),r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"Userprofile"},r.a.createElement("img",{src:e.pictureUrl,alt:"userimg"}),r.a.createElement("h2",null,"User's profile"),r.a.createElement("p",null,"Name : ",e.username),r.a.createElement("p",null,"Expert on : ",e.expert),r.a.createElement(h.b,{to:"/EditUserProfile"},r.a.createElement("button",null,"Edit User Profile"))),r.a.createElement("h3",null,"My Problems Solved"),e.mysolvedproblems?e.mysolvedproblems.reverse().map((function(e){return r.a.createElement("div",{className:"problem",key:e._id},r.a.createElement("p",{className:"is-size-5"},"Problem :",e.text),r.a.createElement("img",{src:e.pic,alt:""}),r.a.createElement("p",{className:"is-size-6"},"Category : ",e.category),r.a.createElement("hr",null),r.a.createElement("p",{className:"is-size-5"},"Solution : ",e.solution[0].text),r.a.createElement("img",{src:e.solution[0].pic,alt:""}),r.a.createElement("p",{className:"is-size-6"},"Solution Author: ",e.solution[0].author.username))})):r.a.createElement("p",null,"No solved problems"))}}]),t}(n.Component)),Y=N(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},username:"",password:"",mail:"",picture:"",points:0,expert:"dogs",imageReady:!0},a.handleFormSubmit=function(e){e.preventDefault(),console.log("before senddin'",a.state.user)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.handlePhotoChange=function(e){a.setState({imageReady:!1}),console.log(e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("photo",t),j.imageUpload(n).then((function(e){a.setState({picture:e,imageReady:!0})}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("user id from props",this.props.user._id);var t=this.props.user._id;L.getOneById(t).then((function(t){e.setState({user:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.user,a=t.username,n=t.password,l=t.mail,s=t.expert;return r.a.createElement("div",null,r.a.createElement("h1",null,"Edit Profile"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,encType:"multipart/form-data"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("label",null,"Mail:"),r.a.createElement("input",{type:"mail",name:"mail",value:l,onChange:this.handleChange}),r.a.createElement("label",null,"Expert at :"),r.a.createElement("select",{name:"expert",value:s,onChange:this.handleChange},r.a.createElement("option",{value:"dogs"},"Dogs"),r.a.createElement("option",{value:"cats"},"Cats"),r.a.createElement("option",{value:"parrots"},"Parrots")),r.a.createElement("input",{type:"file",name:"photo",onChange:function(t){return e.handlePhotoChange(t)}}),r.a.createElement("button",{type:"submit",disabled:!this.state.imageReady},"Submit")),r.a.createElement("p",null,"Want to to get back to user profile?"),r.a.createElement(h.b,{to:"/UserProfile"}," ",r.a.createElement("button",null,"User profile")))}}]),t}(n.Component)),q=a(20);var K=N((function(e){var t=e.component,a=e.isLoggedin,n=e.isLoading,l=Object(q.a)(e,["component","isLoggedin","isLoading"]);return n?r.a.createElement("h1",null,"Loading"):r.a.createElement(p.b,Object.assign({},l,{render:function(e){return a?r.a.createElement(p.a,{to:"/MyProblems"}):r.a.createElement(t,e)}}))}));var Q=N((function(e){var t=e.component,a=e.isLoggedin,n=e.isLoading,l=Object(q.a)(e,["component","isLoggedin","isLoading"]);return n?r.a.createElement("h1",null,"Loading"):r.a.createElement(p.b,Object.assign({},l,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/login"})}}))})),V=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null),r.a.createElement(P,null),r.a.createElement(p.d,null,r.a.createElement(K,{exact:!0,path:"/signup",component:w}),r.a.createElement(K,{exact:!0,path:"/login",component:C}),r.a.createElement(Q,{exact:!0,path:"/private",component:k}),r.a.createElement(Q,{exact:!0,path:"/MyProblems",component:D}),r.a.createElement(Q,{exact:!0,path:"/MyProblems/details/:id",component:M}),r.a.createElement(Q,{exact:!0,path:"/MyProblems/details/:id/AnswerDetails/:AnsId",component:B}),r.a.createElement(Q,{exact:!0,path:"/ProblemsToSolve",component:F}),r.a.createElement(Q,{exact:!0,path:"/ProblemsToSolve/details/:id",component:G}),r.a.createElement(Q,{exact:!0,path:"/AskProblem",component:H}),r.a.createElement(Q,{exact:!0,path:"/UserProfile",component:W}),r.a.createElement(Q,{exact:!0,path:"/EditUserProfile",component:Y})))}}]),t}(n.Component);a(67);s.a.render(r.a.createElement(h.a,null,r.a.createElement(O,null,r.a.createElement(V,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.359883a1.chunk.js.map