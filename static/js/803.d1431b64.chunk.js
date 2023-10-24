"use strict";(self.webpackChunkphonebook_with_typescript=self.webpackChunkphonebook_with_typescript||[]).push([[803],{7803:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,i,o,c,s,u,a=t(8617),h=t(4373),l=t(7425),d=t(168),f=t(6088),p=f.Z.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"])),(function(n){return n.theme.spacing(10)})),m=f.Z.div(i||(i=(0,d.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),x=f.Z.div(o||(o=(0,d.Z)([""]))),y=f.Z.p(c||(c=(0,d.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.secondaryFontColor}),(function(n){return n.theme.fontSize.primaryFontSize}),(function(n){return n.theme.fontWeight.primaryFontWeight})),j=f.Z.p(s||(s=(0,d.Z)(["\n  color: ",";\n  font-family: Inter;\n  font-size: ","px;\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.primaryFontColor}),(function(n){return n.theme.fontSize.primaryFontSize}),(function(n){return n.theme.fontWeight.primaryFontWeight})),b=t(2386),g=f.Z.a(u||(u=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 44px;\n  height: 35px;\n  padding: ",";\n  background-color: ",";\n  border-radius: ","px;\n  transition: box-shadow ",";\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n  }\n  & svg {\n    width: 100%;\n    height: 100%;\n    fill: ",";\n    stroke: inherit;\n  }\n"])),(function(n){return n.theme.spacing()}),(function(n){var e=n.btnType;return(0,b.HL)(e)}),(function(n){return n.theme.borderRadius.secondaryBorderRadius}),(function(n){return n.theme.transitionDurationAndFunc}),(function(n){return n.theme.shadows.primaryShadow}),(function(n){var e=n.btnType;return(0,b.yj)(e)})),Z=t(3329),v=function(n){var e=n.link,t=n.children,r=n.btnType;return(0,Z.jsx)(g,{btnType:r,href:e,onClick:function(n){(0,b.KY)(n.currentTarget)},children:t})},w=t(4226),k=t(7432),T=function(){var n=(0,w.d)(),e=(0,b.lC)(n),t=e.number,r=e.email,i=e.chat,o=(0,b.ly)(t);return(0,Z.jsxs)(p,{children:[(0,Z.jsxs)(m,{children:[(0,Z.jsxs)(x,{children:[(0,Z.jsx)(y,{children:"Phone number"}),(0,Z.jsx)(j,{children:t})]}),(0,Z.jsx)(v,{link:"tel:".concat(o),btnType:k.Z.phone,children:(0,Z.jsx)(a.PES,{})})]}),(0,Z.jsxs)(m,{children:[(0,Z.jsxs)(x,{children:[(0,Z.jsx)(y,{children:"Email Address"}),(0,Z.jsx)(j,{children:r})]}),(0,Z.jsx)(v,{link:"mailto:".concat(r),btnType:k.Z.message,children:(0,Z.jsx)(h.JwT,{})})]}),(0,Z.jsxs)(m,{children:[(0,Z.jsxs)(x,{children:[(0,Z.jsx)(y,{children:"Chat"}),(0,Z.jsx)(j,{children:i})]}),(0,Z.jsx)(v,{link:"tg://resolve?domain=".concat(i),btnType:k.Z.chat,children:(0,Z.jsx)(l.CXA,{})})]})]})}},4226:function(n,e,t){t.d(e,{m:function(){return h},d:function(){return d}});var r=t(9439),i=t(2791),o=t(7689),c=t(2386),s=t(3458),u=t(8660),a=t(474),h=function(){var n=(0,i.useState)(null),e=(0,r.Z)(n,2),t=e[0],h=e[1],l=(0,u.T)(),d=(0,o.s0)(),f=(0,o.TH)().search,p="/".concat(a.l.contactsPath+f);return(0,i.useEffect)((function(){t&&l((0,s.GK)(t)).unwrap().then((function(){d(p),c.Vy.successToast("Contact successfully removed")})).catch((function(){c.Vy.errorToast("Deleting a contact failed")}))}),[t,l,d,p]),h},l=t(5233),d=function(){var n=(0,o.UO)()[a.l.dynamicParam],e=(0,u.C)(l.Af).find((function(e){return e.id===n}));return e||{id:"",name:"",number:""}}}}]);
//# sourceMappingURL=803.d1431b64.chunk.js.map