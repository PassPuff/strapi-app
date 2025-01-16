import{g as k,k as F,i as S,d as E,j as e,P as u,ff as w,n as C,u as P,o as A,r as c,w as B,x as D,b,F as g,B as N,T as p,Q as d,U as a,X as h,ae as V,af as $,S as q,bv as O,fg as Q}from"./strapi-cD9KxiGF.js";const Y=(i,t)=>!i||!t?{}:{[i]:t[i]},G=i=>(i?.inner||[]).reduce((t,s)=>(s.path&&(t[s.path.split("[").join(".").split("]").join("")]={id:s.message,defaultMessage:s.message,values:Y(s?.type,s?.params)}),t),{}),M=k().shape({email:F().email(S.email.id).required(S.required.id)}),H=E.a`
  color: ${({theme:i})=>i.colors.primary600};
`,_=()=>e.jsx(u.Protect,{permissions:w.settings,children:e.jsx(U,{})}),U=()=>{const{toggleNotification:i}=C(),{formatMessage:t}=P(),{get:s,post:v}=A(),[l,y]=c.useState(""),[I,f]=c.useState(!1),[x,R]=c.useState({}),{data:o,isLoading:j}=B(["email","settings"],async()=>{const n=await s("/email/settings"),{data:{config:r}}=n;return r}),m=D(async n=>{await v("/email/test",n)},{onError(){i({type:"danger",message:t({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:l})})},onSuccess(){i({type:"success",message:t({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:l})})},retry:!1});c.useEffect(()=>{M.validate({email:l},{abortEarly:!1}).then(()=>f(!0)).catch(()=>f(!1))},[l]);const T=n=>{y(()=>n.target.value)},L=async n=>{n.preventDefault();try{await M.validate({email:l},{abortEarly:!1})}catch(r){r instanceof Q&&R(G(r))}m.mutate({to:l})};return j?e.jsx(u.Loading,{}):e.jsxs(u.Main,{labelledBy:"title","aria-busy":j||m.isLoading,children:[e.jsx(u.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})})}),e.jsx(b.Header,{id:"title",title:t({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:t({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),e.jsx(b.Content,{children:o&&e.jsx("form",{onSubmit:L,children:e.jsxs(g,{direction:"column",alignItems:"stretch",gap:7,children:[e.jsx(N,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:e.jsxs(g,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(g,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(p,{variant:"delta",tag:"h2",children:t({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),e.jsx(p,{children:t({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.jsx(H,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:t({id:"email.link",defaultMessage:"Link"})})})})]}),e.jsxs(d.Root,{gap:5,children:[e.jsx(d.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{name:"shipper-email",children:[e.jsx(a.Label,{children:t({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"})}),e.jsx(h,{placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:o.settings.defaultFrom})]})}),e.jsx(d.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{name:"response-email",children:[e.jsx(a.Label,{children:t({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"})}),e.jsx(h,{placeholder:t({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:o.settings.defaultReplyTo})]})}),e.jsx(d.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{name:"email-provider",children:[e.jsx(a.Label,{children:t({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"})}),e.jsx(V,{disabled:!0,value:o.provider,children:e.jsx($,{value:o.provider,children:o.provider})})]})})]})]})}),e.jsxs(g,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[e.jsx(p,{variant:"delta",tag:"h2",children:t({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),e.jsxs(d.Root,{gap:5,children:[e.jsx(d.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsxs(a.Root,{name:"test-address",error:x.email?.id&&t({id:`email.${x.email?.id}`,defaultMessage:"This is not a valid email"}),children:[e.jsx(a.Label,{children:t({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"})}),e.jsx(h,{onChange:T,value:l,placeholder:t({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})]})}),e.jsx(d.Item,{col:7,s:12,direction:"column",alignItems:"start",children:e.jsx(q,{loading:m.isLoading,disabled:!I,type:"submit",startIcon:e.jsx(O,{}),children:t({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})};export{_ as ProtectedSettingsPage};
