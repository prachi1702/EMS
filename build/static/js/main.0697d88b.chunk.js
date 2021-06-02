(this["webpackJsonpemployee-firebase"]=this["webpackJsonpemployee-firebase"]||[]).push([[0],{18:function(e,t,a){},19:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(8),s=a.n(c),i=(a(18),a(4)),r=a(9),l=a(10),o=a(13),j=a(12),u=(a(19),a(0)),d=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state.employeeData,a=n.refs.txtName.value,c=n.refs.txtAge.value,s=n.refs.txtEmail.value;if(0===n.state.act){var i={name:a,email:s,age:c};t.push(i)}else{var r=n.state.index;t[r].name=a,t[r].email=s,t[r].age=c}n.setState({employeeData:t,act:0}),n.refs.myForm.reset()},n.handleEdit=function(e){var t=n.state.employeeData[e];n.refs.txtName.value=t.name,n.refs.txtEmail.value=t.email,n.refs.txtAge.value=t.age,n.setState({act:1,index:e})},n.handleDelete=function(e){var t=n.state.employeeData;t.splice(e,1),n.setState({employeeData:t})},n.state={title:"Employee Data",employeeData:[],act:0,index:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.employeeData;return Object(u.jsxs)("div",{className:"content",children:[Object(u.jsxs)("form",{ref:"myForm",className:"myForm",children:[Object(u.jsx)("h1",{children:this.state.title}),Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",ref:"txtName",placeholder:"Enter Name",className:"formField"}),Object(u.jsx)("label",{children:"Email"}),Object(u.jsx)("input",{type:"text",ref:"txtEmail",placeholder:"Enter email",className:"formField"}),Object(u.jsx)("label",{children:"Age"}),Object(u.jsx)("input",{type:"text",ref:"txtAge",placeholder:"Enter age",className:"formField"}),Object(u.jsx)("button",{onClick:function(t){return e.handleSubmit(t)},className:"myButton",children:"Save"})]}),Object(u.jsx)("table",{className:"table",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Age"}),Object(u.jsx)("th",{children:"Edit"}),Object(u.jsx)("th",{children:"Delete"})]}),t.map((function(t,a){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.email}),Object(u.jsx)("td",{children:t.age}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return e.handleEdit(a)},className:"myButton",children:"Edit"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return e.handleDelete(a)},className:"myButton",children:"Delete"})})]},a)}))]})})]})}}]),a}(n.Component),h=function(e){var t=e.handleLogout;return Object(u.jsxs)("div",{children:[Object(u.jsx)("section",{className:"hero",children:Object(u.jsxs)("nav",{children:[Object(u.jsx)("h1",{children:"Wecome"}),Object(u.jsx)("button",{onClick:t,children:"Logout"})]})}),Object(u.jsx)(d,{})]})},b=function(e){var t=e.email,a=e.setEmail,n=e.password,c=e.setPassword,s=e.handleLogin,i=e.handleSignup,r=e.hasAccount,l=e.sethasAccount,o=e.emailError,j=e.passwordError;return Object(u.jsx)("section",{className:"login",children:Object(u.jsxs)("div",{className:"loginContainer",children:[Object(u.jsx)("label",{children:"Username"}),Object(u.jsx)("input",{type:"text",autoFocus:!0,required:!0,value:t,onChange:function(e){return a(e.target.value)}}),Object(u.jsxs)("p",{className:"errorMsg",children:[" ",o]}),Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("p",{className:"errorMsg",children:j}),Object(u.jsx)("div",{className:"btnContainer",children:r?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:s,children:" Sign In"}),Object(u.jsxs)("p",{children:["Don't have an account?",Object(u.jsx)("span",{onClick:function(){return l(!r)},children:"Sign Up"})]})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{onClick:i,children:" Sign Up"}),Object(u.jsxs)("p",{children:["Have an Account?",Object(u.jsx)("span",{onClick:function(){return l(!r)},children:"Sign in?"})]})]})})]})})},m=a(11),O=(a(21),m.a.initializeApp({apiKey:"AIzaSyAZLbONZr1nt-jv_xwFc-PcMkpsZQ-EVAs",authDomain:"react-auth-2d3ef.firebaseapp.com",projectId:"react-auth-2d3ef",storageBucket:"react-auth-2d3ef.appspot.com",messagingSenderId:"783303320228",appId:"1:783303320228:web:8c7c6443ef868bf19bfc31",measurementId:"G-LRGZRMGW3M"})),x=(a(23),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),r=Object(i.a)(s,2),l=r[0],o=r[1],j=Object(n.useState)(""),d=Object(i.a)(j,2),m=d[0],x=d[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),g=p[0],v=p[1],y=Object(n.useState)(""),E=Object(i.a)(y,2),N=E[0],S=E[1],w=Object(n.useState)(!1),A=Object(i.a)(w,2),C=A[0],k=A[1],D=function(){v(""),S("")},F=function(){O.auth().onAuthStateChanged((function(e){e?(o(""),x(""),c(e)):c("")}))};return Object(n.useEffect)((function(){F()}),[]),Object(u.jsx)("div",{children:a?Object(u.jsx)(h,{handleLogout:function(){O.auth().signOut()}}):Object(u.jsx)(b,{email:l,setEmail:o,password:m,setPassword:x,handleLogin:function(){D(),O.auth().signInWithEmailAndPassword(l,m).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":v(e.message);break;case"auth/wrong-password":S(e.message)}}))},handleSignup:function(){D(),O.auth().createUserWithEmailAndPassword(l,m).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":v(e.message);break;case"auth/weak-password":S(e.message)}}))},hasAccount:C,sethasAccount:k,emailError:g,passwordError:N})})}),f=(a(24),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))});s.a.render(Object(u.jsx)(x,{}),document.getElementById("root")),f()}},[[25,1,2]]]);
//# sourceMappingURL=main.0697d88b.chunk.js.map