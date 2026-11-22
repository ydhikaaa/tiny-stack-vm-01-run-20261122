import{readFileSync as a,readdirSync as b,mkdirSync as c,writeFileSync as d}from"node:fs";
let{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
let F="y+x|0;y-x|0;Math.imul(y,x);y/x|0;y%x;Y/X|0;Y%X|0;0;y&x;y|x;y^x;0;y<<x;y>>x;(y>>>x)|0;0;y==x|0;y<x|0;Y<X|0".split(";");
for(let D of b(I)){
let P=a(I+"/"+D+"/program.bin"),N=a(I+"/"+D+"/input.bin"),S=[],C=[],M=[],B=Buffer.alloc(65536),p=0,i=0,k=0,e=-1,o,m,q,v,t,x,y,Y,X,n=0;
let U=g=>S.length<g&&(e=2),V=()=>S.length>255&&(e=3);
while(e<0){
if(k++>999999){e=10;break}
if(p<0|p>=P.length){e=9;break}
o=P[p++];m=[0,1,4][o]||(o>47&o<52?2:0);
if(p+m>P.length){e=9;break}
if(o>47&o<51)q=P.readInt16LE(p);
if(o>15&&o<35&&o%4!=3||o==19){
if(U(2))break;
x=S.pop();y=S.pop();Y=y>>>0;X=x>>>0;
if(o>18&o<23&&!x)e=4;else S.push(eval(F[o-16]));
continue}
switch(o){
case 0:e=0;break;
case 1:V()||S.push(P[p++]<<24>>24);break;
case 2:V()||(S.push(P.readInt32LE(p)),p+=4);break;
case 3:U(1)||S.pop();break;
case 4:U(1)||V()||S.push(S.at(-1));break;
case 5:U(2)||S.push(S.pop(),S.pop());break;
case 6:U(2)||V()||S.push(S.at(-2));break;
case 7:U(3)||S.push(S.splice(-3,1)[0]);break;
case 23:U(1)||S.push(-S.pop()|0);break;
case 27:U(1)||S.push(~S.pop());break;
case 48:p+=2+q;break;
case 49:U(1)||(p+=2+(S.pop()?0:q));break;
case 50:U(1)||(p+=2+(S.pop()?q:0));break;
case 51:C.length>63?e=7:(C.push(p+2),p=P[p]|P[p+1]<<8);break;
case 52:(p=C.pop())==null&&(e=8);break;
case 64:U(1)||(q=S.pop(),q<0|q>255?e=6:S.push(M[q]||0));break;
case 65:U(2)||(q=S.pop(),v=S.pop(),q<0|q>255?e=6:M[q]=v);break;
case 80:U(1)||(t=""+S.pop(),n+t.length>65536?e=11:n+=B.write(t,n));break;
case 81:U(1)||(n>65535?e=11:B[n++]=S.pop()&255);break;
case 82:V()||S.push(i<N.length?N[i++]:-1);break;
case 83:U(1)||(e=S.pop()&255);break;
default:e=5}
}
let f=O+"/"+D+"/";c(f,{recursive:!0});d(f+"stdout.bin",B.subarray(0,n));d(f+"exit.txt",e+"");
}
