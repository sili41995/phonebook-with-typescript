"use strict";(self.webpackChunkphonebook_with_typescript=self.webpackChunkphonebook_with_typescript||[]).push([[693],{4159:function(n,t,e){e.d(t,{Z:function(){return a}});var r,o=e(168),i=e(6088).Z.p(r||(r=(0,o.Z)(["\n  color: ",";\n  font-family: Jua;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.secondaryFontSize}),(function(n){return n.theme.fontWeight.otherFontWeight})),c=e(3329),a=function(n){var t=n.message;return(0,c.jsx)(i,{children:t})}},4226:function(n,t,e){e.d(t,{m:function(){return f},d:function(){return h}});var r=e(9439),o=e(2791),i=e(7689),c=e(2386),a=e(3458),u=e(8660),s=e(474),f=function(){var n=(0,o.useState)(null),t=(0,r.Z)(n,2),e=t[0],f=t[1],l=(0,u.T)(),h=(0,i.s0)(),m=(0,i.TH)().search,d="/".concat(s.l.contactsPath+m);return(0,o.useEffect)((function(){e&&l((0,a.GK)(e)).unwrap().then((function(){h(d),c.Vy.successToast("Contact successfully removed")})).catch((function(){c.Vy.errorToast("Deleting a contact failed")}))}),[e,l,h,d]),f},l=e(5233),h=function(){var n=(0,i.UO)()[s.l.dynamicParam],t=(0,u.C)(l.Af).find((function(t){return t.id===n}));return t||{id:"",name:"",number:""}}},3693:function(n,t,e){e.r(t),e.d(t,{default:function(){return xn}});var r,o,i,c,a,u,s,f,l,h,m,d,p,x,g,y,Z,j,F,v=e(2791),z=e(7689),b=e(9439),S=e(1087),w=e(8820),C=e(7109),W=e(7570),T=e(2386),k=e(4226),P=e(168),G=e(6088),_=G.Z.li(r||(r=(0,P.Z)(["\n  position: relative;\n  align-items: center;\n  border-radius: ","px;\n  border: 0.5px solid;\n  border-color: ",";\n  transition: box-shadow ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n  }\n  & a {\n    padding: ",";\n    display: flex;\n    gap: ","px;\n    text-decoration: none;\n    color: ",";\n  }\n"])),(function(n){return n.theme.borderRadius.secondaryBorderRadius}),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.transitionDurationAndFunc}),(function(n){return n.theme.shadows.primaryShadow}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.primaryGap}),(function(n){return n.theme.colors.primaryFontColor})),I=G.Z.img(o||(o=(0,P.Z)(["\n  width: 70px;\n"]))),E=G.Z.div(i||(i=(0,P.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  gap: ","px;\n  align-items: center;\n  & div {\n    flex-basis: calc((100% - ","*2px) / 3);\n  }\n"])),(function(n){return n.theme.primaryGap}),(function(n){return n.theme.primaryGap})),A=G.Z.div(c||(c=(0,P.Z)([""]))),O=G.Z.p(a||(a=(0,P.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.otherFontSize}),(function(n){return n.theme.fontWeight.secondaryFontWeight})),R=G.Z.p(u||(u=(0,P.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.contactPrimaryTextColor}),(function(n){return n.theme.fontSize.primaryFontSize}),(function(n){return n.theme.fontWeight.primaryFontWeight})),B=G.Z.p(s||(s=(0,P.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.secondaryFontSize}),(function(n){return n.theme.fontWeight.primaryFontWeight})),D=G.Z.p(f||(f=(0,P.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.contactSecondaryTextColor}),(function(n){return n.theme.fontSize.secondaryFontSize}),(function(n){return n.theme.fontWeight.secondaryFontWeight})),J=e(5233),K=e(8660),V=e(474),H=e(7432),N=e(3329),U=function(n){var t=n.contact,e=(0,T.lC)(t),r=e.userAvatar,o=e.name,i=e.id,c=e.role,a=e.number,u=e.email,s=(0,K.C)(J.xU),f=(0,k.m)(),l="".concat(V.l.contactDetailsPath,"/").concat(i,"/").concat(V.l.contactPath);return(0,N.jsxs)(_,{children:[(0,N.jsxs)(W.Z,{to:l,children:[(0,N.jsx)(I,{src:r,alt:o}),(0,N.jsxs)(E,{children:[(0,N.jsxs)(A,{children:[(0,N.jsx)(O,{children:o}),(0,N.jsx)(R,{children:c})]}),(0,N.jsx)(B,{children:a}),(0,N.jsx)(D,{children:u})]})]}),(0,N.jsx)(C.Z,{top:0,right:0,position:"absolute",disabled:s,btnType:H.Z.deleteTransparent,width:44,height:35,onBtnClick:function(){i&&f(i)},children:(0,N.jsx)(w.VPh,{})})]})},Y=e(4159),L=G.Z.div(l||(l=(0,P.Z)(["\n  width: 650px;\n  flex-shrink: 0;\n"]))),M=G.Z.ul(h||(h=(0,P.Z)(["\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(n){return n.theme.primaryGap})),q=e(5003),Q=q.g.FILTER_SP_KEY,X=q.g.SORT_SP_KEY,$=function(){var n,t,e=(0,K.C)(J.Af),r=(0,S.lr)(),o=(0,b.Z)(r,1)[0],i=null!==(n=o.get(Q))&&void 0!==n?n:"",c=null!==(t=o.get(X))&&void 0!==t?t:"",a=(0,v.useMemo)((function(){var n=(0,T.Ol)(e,c);return(0,T.Gj)(n,i)}),[e,i,c]);return(0,N.jsx)(L,{children:e.length?(0,N.jsx)(M,{children:a.map((function(n){return(0,N.jsx)(U,{contact:n},n.id)}))}):(0,N.jsx)(Y.Z,{message:"Contact list is empty"})})},nn=e(8617),tn=e(6907),en=G.Z.div(m||(m=(0,P.Z)(["\n  flex-shrink: 0;\n"]))),rn=G.Z.img(d||(d=(0,P.Z)(["\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),on=G.Z.p(p||(p=(0,P.Z)(["\n  color: ",";\n  font-family: Jua;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.titleFontSize}),(function(n){return n.theme.fontWeight.otherFontWeight})),cn=G.Z.div(x||(x=(0,P.Z)(["\n  margin-top: ",";\n  margin-bottom: ",";\n"])),(function(n){return n.theme.spacing(7)}),(function(n){return n.theme.spacing(16)})),an=G.Z.div(g||(g=(0,P.Z)([""]))),un=G.Z.p(y||(y=(0,P.Z)(["\n  margin-top: ",";\n  margin-bottom: ",";\n  color: ",";\n  font-family: Jua;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.spacing()}),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.subtitleFontSize}),(function(n){return n.theme.fontWeight.otherFontWeight})),sn=G.Z.p(Z||(Z=(0,P.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.colors.secondaryFontColor}),(function(n){return n.theme.fontSize.secondaryFontSize}),(function(n){return n.theme.fontWeight.primaryFontWeight})),fn=G.Z.div(j||(j=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ",";\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.secondaryFontColor}),(function(n){return n.theme.fontSize.primaryFontSize}),(function(n){return n.theme.fontWeight.primaryFontWeight}),(function(n){return n.theme.spacing(6)})),ln=G.Z.span(F||(F=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  & svg {\n    width: 22px;\n    height: 22px;\n  }\n"]))),hn=e(8005),mn=function(){var n=(0,K.C)(hn.dy),t=(0,T.bG)(n),e=t.name,r=t.userAvatar,o=t.userName,i=t.email,c=t.dateOfBirth,a=t.phoneNumber,u=t.location;return(0,N.jsxs)(en,{children:[(0,N.jsx)(on,{children:e}),(0,N.jsxs)(cn,{children:[(0,N.jsx)(rn,{src:r,alt:"user avatar"}),(0,N.jsx)(un,{children:o}),(0,N.jsx)(sn,{children:i})]}),(0,N.jsxs)(an,{children:[(0,N.jsxs)(fn,{children:[(0,N.jsx)(ln,{children:(0,N.jsx)(w.xHR,{})}),c]}),(0,N.jsxs)(fn,{children:[(0,N.jsx)(ln,{children:(0,N.jsx)(nn.PES,{})}),a]}),(0,N.jsxs)(fn,{children:[(0,N.jsx)(ln,{children:(0,N.jsx)(tn.OxZ,{})}),u]})]})]})},dn=e(5617),pn=e(3458),xn=function(){var n=(0,K.T)(),t=(0,K.C)(J.Gj);return(0,v.useEffect)((function(){var t=n((0,pn.yF)());return function(){t.abort()}}),[n]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(mn,{}),t&&(0,N.jsx)($,{}),(0,N.jsx)(v.Suspense,{fallback:(0,N.jsx)(dn.Z,{}),children:(0,N.jsx)(z.j3,{})})]})}}}]);
//# sourceMappingURL=693.dc3b4d23.chunk.js.map