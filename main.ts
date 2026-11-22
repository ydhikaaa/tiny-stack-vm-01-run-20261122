import{readFileSync as a,readdirSync as b,mkdirSync as c,writeFileSync as d}from"node:fs";
let F="y+x;y-x;Math.imul(y,x);y/x;y%x;Y/X;Y%X;;y&x;y|x;y^x;;y<<x;y>>x;y>>>x;;y==x;y<x;Y<X".split(";"),L="/",{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
let H="00e=0;01A(q);01A(q);10G();12A(S.at(-1));22A(G(),G());23A(S.at(-2));33A(S.splice(-3,1)[0]);;;;;;;;;;;;;;;;11A(-G()|0);;;;11A(~G());;;;;;;;;;;;;;;;;;;;;00p+=q;10p+=G()?0:q;10p+=G()?q:0;00C.push(p)>64?e=7:p=q&65535;00p=C.pop()??(e=8);;;;;;;;;;;;11q=G(),q>>8?e=6:A(M[q]|0);20q=G(),t=G(),q>>8?e=6:M[q]=t;;;;;;;;;;;;;;;10t=''+G(),s.length+t.length>65536?e=11:s+=t;10s.length>65535?e=11:s+=String.fromCharCode(G());01A(N[i++]??-1);10e=G()&255".split(";");
for(let D of b(I)){
let P=a(I+L+D+L+"program.bin"),N=a(I+L+D+L+"input.bin"),S=[],C=[],M=[],s="",p=0,i=0,k=1e6,e=-1,o,m,q,t,x,y,Y,X,A=S.push.bind(S),G=()=>S.pop();
let K=u=>+u[0]>S.length?e=2:S.length>256+ +u[0]-+u[1]?e=3:eval(u.slice(2));
while(e<0)k--?P[p]==null?e=9:(o=P[p++],m=+"014"[o]||(o>47&o<52?2:0),p+m>P.length?e=9:(q=m?P["read"+(m>3?"Int32LE":m>1?"Int16LE":"Int8")](p):0,p+=m,(t=F[o-16])?K("21")||(x=G(),y=G(),Y=y>>>0,X=x>>>0,!x&o>18&o<23?e=4:A(eval(t)|0)):(t=H[o],t?K(t):e=5))):e=10;
let f=O+L+D+L;c(f,{recursive:!0});d(f+"stdout.bin",s,"latin1");d(f+"exit.txt",e+"");
}
