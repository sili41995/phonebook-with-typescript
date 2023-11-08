"use strict";(self.webpackChunkphonebook_with_typescript=self.webpackChunkphonebook_with_typescript||[]).push([[103,70],{3103:function(n,t,e){e.r(t),e.d(t,{default:function(){return rn}});var r,i,o,c,a,u,s,l,f,d,h,m,p=e(9439),x=e(7689),g=e(2791),y=e(8820),Z=e(458),j=e(168),b=e(6088),C=b.Z.div(r||(r=(0,j.Z)(["\n  flex-grow: 1;\n"]))),v=b.Z.div(i||(i=(0,j.Z)(["\n  display: flex;\n  gap: ","px;\n  justify-content: flex-end;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.primaryGap}),(function(n){return n.theme.spacing(28)})),F=e(1087),w=e(4226),S=e(2386),k=e(5617),z=b.Z.img(o||(o=(0,j.Z)(["\n  width: 112px;\n  margin: 0 auto ",";\n"])),(function(n){return n.theme.spacing(2)})),T=b.Z.div(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(2)})),W=b.Z.p(a||(a=(0,j.Z)(["\n  color: ",";\n  font-family: Jua;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.secondaryFontSize}),(function(n){return n.theme.fontWeight.otherFontWeight})),P=b.Z.p(u||(u=(0,j.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.secondaryFontColor}),(function(n){return n.theme.fontSize.primaryFontSize}),(function(n){return n.theme.fontWeight.primaryFontWeight})),V=b.Z.nav(s||(s=(0,j.Z)(["\n  background-color: ",";\n  padding: ",";\n  border-radius: ","px;\n  margin-top: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.colors.lightgreyColor}),(function(n){return n.theme.spacing()}),(function(n){return n.theme.borderRadius.navBarBorderRadius}),(function(n){return n.theme.spacing(20)}),(function(n){return n.theme.spacing(10)})),B=b.Z.ul(l||(l=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),I=b.Z.li(f||(f=(0,j.Z)(["\n  & a {\n    display: block;\n    padding: ",";\n    border-radius: ","px;\n    color: ",";\n    font-family: Jua;\n    font-size: ","px;\n    font-weight: ",";\n    text-decoration: none;\n    transition: background-color\n      ",";\n    &.active,\n    &:hover,\n    &:focus {\n      background-color: ",";\n    }\n  }\n"])),(function(n){var t=n.theme;return"".concat(t.spacing()," ").concat(t.spacing(5))}),(function(n){return n.theme.borderRadius.secondaryBorderRadius}),(function(n){return n.theme.colors.otherFontColor}),(function(n){return n.theme.fontSize.primaryFontSize}),(function(n){return n.theme.fontWeight.otherFontWeight}),(function(n){return n.theme.transitionDurationAndFunc}),(function(n){return n.theme.colors.otherLinkColor})),O=e(474),R=e(3329),U=function(){var n=(0,w.d)(),t=(0,S.lC)(n),e=t.name,r=t.role,i=t.userAvatar;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(z,{src:i,alt:"".concat(e," photo")}),(0,R.jsxs)(T,{children:[(0,R.jsx)(W,{children:e}),(0,R.jsx)(P,{children:r})]}),(0,R.jsx)(V,{children:(0,R.jsxs)(B,{children:[(0,R.jsx)(I,{children:(0,R.jsx)(F.OL,{to:O.l.contactPath,children:"Contact"})}),(0,R.jsx)(I,{children:(0,R.jsx)(F.OL,{to:O.l.aboutPath,children:"About"})})]})}),(0,R.jsx)(g.Suspense,{fallback:(0,R.jsx)(k.Z,{}),children:(0,R.jsx)(x.j3,{})})]})},q=e(1413),A=e(8617),E=e(6355),G=e(5763),J=e(8014),_=e(1134),L=(e(5462),b.Z.p(d||(d=(0,j.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.otherFontSize}),(function(n){return n.theme.fontWeight.secondaryFontWeight}))),N=b.Z.form(h||(h=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.primaryGap})),D=b.Z.div(m||(m=(0,j.Z)(["\n  display: flex;\n  gap: ",";\n  align-self: center;\n"])),(function(n){return n.theme.spacing(10)})),K=e(7109),H=e(6202),Q=e(3458),X=e(5233),Y=e(8660),M=e(3137),$=e(7432),nn=function(n){var t=n.setEditContact,e=(0,Y.C)(X.xU),r=(0,Y.T)(),i=(0,x.UO)()[O.l.dynamicParam],o=(0,w.d)(),c=(0,S.lC)(o),a=c.name,u=c.number,s=(0,_.cI)(),l=s.register,f=s.formState,d=f.errors,h=f.isSubmitting,m=s.handleSubmit;(0,g.useEffect)((function(){h&&(d.name&&S.Vy.errorToast("Name is required"),d.number&&S.Vy.errorToast("Phone is required"))}),[d,h]);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(L,{children:"Contact editing"}),(0,R.jsxs)(N,{onSubmit:m((function(n){i&&r((0,Q.Tk)({data:n,id:i})).unwrap().then((function(){S.Vy.successToast("Contact updated successfully")})).catch((function(){S.Vy.errorToast("Contact update failed")}))})),children:[(0,R.jsx)(H.Z,{defaultValue:a,settings:(0,q.Z)({},l("name",{required:!0})),type:"text",placeholder:"Name",inputWrap:!0,fieldIcon:(0,R.jsx)(E.Xws,{}),fieldIconSize:18}),(0,R.jsx)(H.Z,{defaultValue:u,settings:(0,q.Z)({},l("number",{required:!0})),type:"tel",placeholder:"Phone",inputWrap:!0,fieldIcon:(0,R.jsx)(A.JbR,{}),fieldIconSize:18}),(0,R.jsxs)(D,{children:[(0,R.jsx)(K.Z,{disabled:e,btnType:$.Z.accept,width:44,height:35,type:M.s.submit,children:(0,R.jsx)(J.pkh,{})}),(0,R.jsx)(K.Z,{btnType:$.Z.cancel,width:44,height:35,onBtnClick:t,children:(0,R.jsx)(G.Q7B,{})})]})]})]})},tn=e(5070),en=e(4159),rn=function(){var n=(0,g.useState)(!1),t=(0,p.Z)(n,2),e=t[0],r=t[1],i=(0,Y.C)(X.xU),o=(0,x.UO)()[O.l.dynamicParam],c=(0,w.m)(),a=(0,w.d)().id,u=function(){r((function(n){return!n}))};return a?(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(C,{children:[(0,R.jsxs)(v,{children:[!e&&(0,R.jsx)(K.Z,{disabled:i,btnType:$.Z.delete,width:44,height:35,onBtnClick:function(){o&&c(o)},children:(0,R.jsx)(y.VPh,{})}),(0,R.jsx)(K.Z,{btnType:$.Z.edit,width:44,height:35,onBtnClick:function(n){u(),(0,S.KY)(n.currentTarget)},children:(0,R.jsx)(Z.FNg,{})})]}),e?(0,R.jsx)(tn.default,{children:(0,R.jsx)(nn,{setEditContact:u})}):(0,R.jsx)(U,{})]})}):(0,R.jsx)(en.Z,{message:"Contact is absent"})}},5070:function(n,t,e){e.r(t),e.d(t,{default:function(){return a}});var r,i=e(168),o=e(6088).Z.div(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.primaryGap})),c=e(3329),a=function(n){var t=n.children;return(0,c.jsx)(o,{children:t})}},4159:function(n,t,e){e.d(t,{Z:function(){return a}});var r,i=e(168),o=e(6088).Z.p(r||(r=(0,i.Z)(["\n  color: ",";\n  font-family: Jua;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.secondaryFontSize}),(function(n){return n.theme.fontWeight.otherFontWeight})),c=e(3329),a=function(n){var t=n.message;return(0,c.jsx)(o,{children:t})}},4226:function(n,t,e){e.d(t,{m:function(){return l},d:function(){return d}});var r=e(9439),i=e(2791),o=e(7689),c=e(2386),a=e(3458),u=e(8660),s=e(474),l=function(){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),e=t[0],l=t[1],f=(0,u.T)(),d=(0,o.s0)(),h=(0,o.TH)().search,m="/".concat(s.l.contactsPath+h);return(0,i.useEffect)((function(){e&&f((0,a.GK)(e)).unwrap().then((function(){d(m),c.Vy.successToast("Contact successfully removed")})).catch((function(){c.Vy.errorToast("Deleting a contact failed")}))}),[e,f,d,m]),l},f=e(5233),d=function(){var n=(0,o.UO)()[s.l.dynamicParam],t=(0,u.C)(f.Af).find((function(t){return t.id===n}));return t||{id:"",name:"",number:""}}}}]);
//# sourceMappingURL=103.453e3033.chunk.js.map