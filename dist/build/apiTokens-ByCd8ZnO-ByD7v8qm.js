import{aM as s}from"./strapi-cD9KxiGF.js";const o=s.enhanceEndpoints({addTagTypes:["ApiToken"]}).injectEndpoints({endpoints:n=>({getAPITokens:n.query({query:()=>"/admin/api-tokens",transformResponse:e=>e.data,providesTags:(e,t)=>[...e?.map(({id:a})=>({type:"ApiToken",id:a}))??[],{type:"ApiToken",id:"LIST"}]}),getAPIToken:n.query({query:e=>`/admin/api-tokens/${e}`,transformResponse:e=>e.data,providesTags:(e,t,a)=>[{type:"ApiToken",id:a}]}),createAPIToken:n.mutation({query:e=>({url:"/admin/api-tokens",method:"POST",data:e}),transformResponse:e=>e.data,invalidatesTags:[{type:"ApiToken",id:"LIST"}]}),deleteAPIToken:n.mutation({query:e=>({url:`/admin/api-tokens/${e}`,method:"DELETE"}),transformResponse:e=>e.data,invalidatesTags:(e,t,a)=>[{type:"ApiToken",id:a}]}),updateAPIToken:n.mutation({query:({id:e,...t})=>({url:`/admin/api-tokens/${e}`,method:"PUT",data:t}),transformResponse:e=>e.data,invalidatesTags:(e,t,{id:a})=>[{type:"ApiToken",id:a}]})})}),{useGetAPITokensQuery:r,useGetAPITokenQuery:p,useCreateAPITokenMutation:T,useDeleteAPITokenMutation:d,useUpdateAPITokenMutation:k}=o;export{d as a,p as b,T as c,k as d,r as u};
