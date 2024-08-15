(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{11809:function(e,t,n){Promise.resolve().then(n.bind(n,31969))},31969:function(e,t,n){"use strict";n.r(t);var o=n(57437),a=n(2265);n(57818);var c=n(220),d=n(48888),r=n(16463);n(87138),t.default=()=>{let e=(0,r.useRouter)(),[t,n]=(0,a.useState)([]),[i,s]=(0,a.useState)([]),[l,u]=(0,a.useState)([]),{nodes:p,setNodes:_,edges:h,setEdges:g}=(0,a.useContext)(d.I),m=(e,t)=>{let n=e.target.files[0],o=new FileReader;o.onload=e=>{let n=e.target.result,o=(0,c.X)(n);"interactions"===t?s(o):u(o)},o.readAsText(n)},x=e=>{let t={};return e.forEach(e=>{let{source:n,target:o}=e.data;t[n]=(t[n]||0)+1,t[o]=(t[o]||0)+1}),t};return(0,o.jsxs)("div",{children:[(0,o.jsx)("h1",{children:"Biological Network Visualization"}),(0,o.jsxs)("div",{style:{display:"flex",marginTop:"20px"},children:[(0,o.jsx)("h3",{style:{marginRight:"20px"},children:"Input Interactions"}),(0,o.jsx)("input",{type:"file",onChange:e=>m(e,"interactions"),accept:".tsv"})]}),(0,o.jsxs)("div",{style:{display:"flex",marginTop:"20px"},children:[(0,o.jsxs)("h3",{style:{marginRight:"20px"},children:["Protein Annotations",(0,o.jsx)("p",{style:{fontSize:"13px"},children:"(Not required)"})]}),(0,o.jsx)("input",{type:"file",onChange:e=>m(e,"annotations"),accept:".tsv"})]}),(0,o.jsx)("div",{style:{marginTop:"20px"},children:(0,o.jsx)("button",{onClick:()=>{let t=[...new Map(i.map(e=>({data:{id:e["#node1"],label:e["#node1"]}})).map(e=>[e.data.id,e])).values()].map(e=>{let t=l.find(t=>t["#node"]===e.data.id);return t?{data:{...e.data,...t}}:e}),n=new Set,o=i.flatMap(e=>{let t="".concat(e["#node1"],"_").concat(e.node2),o="".concat(e.node2,"_").concat(e["#node1"]);return n.has(t)||n.has(o)?[]:(n.add(t),n.add(o),[{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_combined"),source:e["#node1"],target:e.node2,score:e.combined_score,type:"combined_score"}},{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_neighborhood"),source:e["#node1"],target:e.node2,score:e.neighborhood_on_chromosome,type:"neighborhood_on_chromosome"}},{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_gene_fusion"),source:e["#node1"],target:e.node2,score:e.gene_fusion,type:"gene_fusion"}},{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_phylogenetic_cooccurrence"),source:e["#node1"],target:e.node2,score:e.phylogenetic_cooccurrence,type:"phylogenetic_cooccurrence"}},{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_homology"),source:e["#node1"],target:e.node2,score:e.homology,type:"homology"}},{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_coexpression"),source:e["#node1"],target:e.node2,score:e.coexpression,type:"coexpression"}},{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_experimentally_determined_interaction"),source:e["#node1"],target:e.node2,score:e.experimentally_determined_interaction,type:"experimentally_determined_interaction"}},{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_database_annotated"),source:e["#node1"],target:e.node2,score:e.database_annotated,type:"database_annotated"}},{data:{id:"".concat(e["#node1"],"_").concat(e.node2,"_automated_textmining"),source:e["#node1"],target:e.node2,score:e.automated_textmining,type:"automated_textmining"}}].filter(e=>0!==e.data.score&&"0"!==e.data.score))});g(o);let a=x(o),c=t.map(e=>({...e,data:{...e.data,size:a[e.data.id]?a[e.data.id]/1.5+25:25}}));_(c),console.log(o),console.log(c),e.push("/result")},children:"Visualize"})})]})}},48888:function(e,t,n){"use strict";n.d(t,{I:function(){return c},MyProvider:function(){return d}});var o=n(57437),a=n(2265);let c=(0,a.createContext)(),d=e=>{let{children:t}=e,[n,d]=(0,a.useState)([]),[r,i]=(0,a.useState)([]);return(0,o.jsx)(c.Provider,{value:{nodes:n,setNodes:d,edges:r,setEdges:i},children:t})}},220:function(e,t,n){"use strict";n.d(t,{X:function(){return o}});let o=e=>{let t=e.trim().split("\n"),n=t[0].split("	");return t.slice(1).map(e=>{let t=e.split("	");return n.reduce((e,n,o)=>(e[n]=t[o],e),{})})}}},function(e){e.O(0,[614,971,23,744],function(){return e(e.s=11809)}),_N_E=e.O()}]);