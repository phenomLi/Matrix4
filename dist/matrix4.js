!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var a in r)("object"==typeof exports?exports:t)[a]=r[a]}}(window,(function(){return function(t){var e={};function r(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e._tempMatrix3=e._tempMatrix4=void 0;const a=r(1),i=r(3);var o=r(1);Object.defineProperty(e,"Matrix4",{enumerable:!0,get:function(){return o.Matrix4}});var n=r(3);Object.defineProperty(e,"Matrix3",{enumerable:!0,get:function(){return n.Matrix3}});var p=r(2);Object.defineProperty(e,"Vector3",{enumerable:!0,get:function(){return p.Vector3}});var M=r(4);Object.defineProperty(e,"Vector2",{enumerable:!0,get:function(){return M.Vector2}}),e._tempMatrix4=a.Matrix4.create(),e._tempMatrix3=i.Matrix3.create()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Matrix4=void 0;const a=r(0),i=r(2);e.Matrix4={create(t){let e=new Float32Array(16);return e[0]=1,e[5]=1,e[10]=1,e[15]=1,void 0!==t&&Array.isArray(t)&&this.set(e,t),e},set:(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t),add(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]+e[0],a[1]=t[1]+e[1],a[2]=t[2]+e[2],a[3]=t[3]+e[3],a[4]=t[4]+e[4],a[5]=t[5]+e[5],a[6]=t[6]+e[6],a[7]=t[7]+e[7],a[8]=t[8]+e[8],a[9]=t[9]+e[9],a[10]=t[10]+e[10],a[11]=t[11]+e[11],a[12]=t[12]+e[12],a[13]=t[13]+e[13],a[14]=t[14]+e[14],a[15]=t[15]+e[15],a},subtract(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]-e[0],a[1]=t[1]-e[1],a[2]=t[2]-e[2],a[3]=t[3]-e[3],a[4]=t[4]-e[4],a[5]=t[5]-e[5],a[6]=t[6]-e[6],a[7]=t[7]-e[7],a[8]=t[8]-e[8],a[9]=t[9]-e[9],a[10]=t[10]-e[10],a[11]=t[11]-e[11],a[12]=t[12]-e[12],a[13]=t[13]-e[13],a[14]=t[14]-e[14],a[15]=t[15]-e[15],a},multiply(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]*e[0]+t[1]*e[4]+t[2]*e[8]+t[3]*e[12],a[1]=t[0]*e[1]+t[1]*e[5]+t[2]*e[9]+t[3]*e[13],a[2]=t[0]*e[2]+t[1]*e[6]+t[2]*e[10]+t[3]*e[14],a[3]=t[0]*e[3]+t[1]*e[7]+t[2]*e[11]+t[3]*e[15],a[4]=t[4]*e[0]+t[5]*e[4]+t[6]*e[8]+t[7]*e[12],a[5]=t[4]*e[1]+t[5]*e[5]+t[6]*e[9]+t[7]*e[13],a[6]=t[4]*e[2]+t[5]*e[6]+t[6]*e[10]+t[7]*e[14],a[7]=t[4]*e[3]+t[5]*e[7]+t[6]*e[11]+t[7]*e[15],a[8]=t[8]*e[0]+t[9]*e[4]+t[10]*e[8]+t[11]*e[12],a[9]=t[8]*e[1]+t[9]*e[5]+t[10]*e[9]+t[11]*e[13],a[10]=t[8]*e[2]+t[9]*e[6]+t[10]*e[10]+t[11]*e[14],a[11]=t[8]*e[3]+t[9]*e[7]+t[10]*e[11]+t[11]*e[15],a[12]=t[12]*e[0]+t[13]*e[4]+t[14]*e[8]+t[15]*e[12],a[13]=t[12]*e[1]+t[13]*e[5]+t[14]*e[9]+t[15]*e[13],a[14]=t[12]*e[2]+t[13]*e[6]+t[14]*e[10]+t[15]*e[14],a[15]=t[12]*e[3]+t[13]*e[7]+t[14]*e[11]+t[15]*e[15],a},multiplyVec3(t,e,r){let a;return a=void 0!==r?r:i.Vector3.create(),a[0]=t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3],a[1]=t[4]*e[0]+t[5]*e[1]+t[6]*e[2]+t[7],a[2]=t[8]*e[0]+t[9]*e[1]+t[10]*e[2]+t[11],a},multiplyNum:(t,e)=>(t[0]=t[0]*e,t[1]=t[1]*e,t[2]=t[2]*e,t[3]=t[3]*e,t[4]=t[4]*e,t[5]=t[5]*e,t[6]=t[6]*e,t[7]=t[7]*e,t[8]=t[8]*e,t[9]=t[9]*e,t[10]=t[10]*e,t[11]=t[11]*e,t[12]=t[12]*e,t[13]=t[13]*e,t[14]=t[14]*e,t[15]=t[15]*e,t),transpose(t){let e=t[0],r=t[1],a=t[2],i=t[3],o=t[4],n=t[5],p=t[6],M=t[7],u=t[8],l=t[9],m=t[10],c=t[11],x=t[12],_=t[13],s=t[14],d=t[15];return t[0]=e,t[1]=o,t[2]=u,t[3]=x,t[4]=r,t[5]=n,t[6]=l,t[7]=_,t[8]=a,t[9]=p,t[10]=m,t[11]=s,t[12]=i,t[13]=M,t[14]=c,t[15]=d,t},identity:t=>(t[0]=t[5]=t[10]=t[15]=1,t[1]=t[2]=t[3]=0,t[4]=t[6]=t[7]=0,t[8]=t[9]=t[11]=0,t[12]=t[13]=t[14]=0,t),fromQuaternion:(t,e)=>t,translate:(t,r)=>(a._tempMatrix4[0]=1,a._tempMatrix4[1]=0,a._tempMatrix4[2]=0,a._tempMatrix4[3]=r[0],a._tempMatrix4[4]=0,a._tempMatrix4[5]=1,a._tempMatrix4[6]=0,a._tempMatrix4[7]=r[1],a._tempMatrix4[8]=0,a._tempMatrix4[9]=0,a._tempMatrix4[10]=1,a._tempMatrix4[11]=r[2],a._tempMatrix4[12]=0,a._tempMatrix4[13]=0,a._tempMatrix4[14]=0,a._tempMatrix4[15]=1,e.Matrix4.multiply(a._tempMatrix4,t,t)),scale:(t,r)=>(a._tempMatrix4[0]=r[0],a._tempMatrix4[1]=0,a._tempMatrix4[2]=0,a._tempMatrix4[3]=0,a._tempMatrix4[4]=0,a._tempMatrix4[5]=r[1],a._tempMatrix4[6]=0,a._tempMatrix4[7]=0,a._tempMatrix4[8]=0,a._tempMatrix4[9]=0,a._tempMatrix4[10]=r[2],a._tempMatrix4[11]=0,a._tempMatrix4[12]=0,a._tempMatrix4[13]=0,a._tempMatrix4[14]=0,a._tempMatrix4[15]=1,e.Matrix4.multiply(a._tempMatrix4,t,t)),rotate(t,r,i){let o=Math.sin(r),n=Math.cos(r),p=1-n,[M,u,l]=i;return a._tempMatrix4[0]=n*(1-n)*Math.pow(M,2),a._tempMatrix4[1]=p*M*u-o*l,a._tempMatrix4[2]=p*M*l-o*u,a._tempMatrix4[3]=0,a._tempMatrix4[4]=p*M*u+o*l,a._tempMatrix4[5]=n+p*Math.pow(u,2),a._tempMatrix4[6]=p*u*l-o*M,a._tempMatrix4[7]=0,a._tempMatrix4[8]=p*M*l-o*u,a._tempMatrix4[9]=p*u*l+o*M,a._tempMatrix4[10]=n+p*Math.pow(l,2),a._tempMatrix4[11]=0,a._tempMatrix4[12]=0,a._tempMatrix4[13]=0,a._tempMatrix4[14]=0,a._tempMatrix4[15]=1,e.Matrix4.multiply(a._tempMatrix4,t,t)},setViewer(t,e,r,a){let o=i.Vector3.negate(i.Vector3.normalize(r)),n=i.Vector3.cross(a,o),p=i.Vector3.cross(o,n);return t[0]=n[0],t[1]=p[0],t[2]=o[0],t[3]=e[0],t[4]=n[1],t[5]=p[1],t[6]=o[1],t[7]=e[1],t[8]=n[2],t[9]=p[2],t[10]=o[2],t[11]=e[2],t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},setOrthogonal(t,e,r,a){let i=e[0],o=e[1],n=r[0],p=r[1],M=a[0],u=a[1],l=1/(i-o),m=1/(n-p),c=1/(M-u);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=(i+o)*l,t[4]=0,t[5]=-2*m,t[6]=0,t[7]=(p+n)*m,t[8]=0,t[9]=0,t[10]=2*c,t[11]=(u+M)*c,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},setPerspective(t,e,r,a){let i,o=(e[1]-e[0])/(r[1]-r[0]),n=a[0],p=a[1],M=2*n/(r[1]-r[0]);return t[0]=M/o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=M,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[12]=0,t[13]=0,t[14]=1,t[15]=0,null!=p&&p!==1/0?(i=1/(n-p),t[10]=(p+n)*i,t[11]=2*p*n*i):(t[10]=-1,t[11]=-2*n),t}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vector3=void 0,e.Vector3={create(t,e,r){let a=new Float32Array(3);return void 0!==t&&(a[0]=t),void 0!==e&&(a[1]=e),void 0!==r&&(a[2]=r),a},set:(t,e,r,a)=>(t[0]=e,t[1]=r,t[2]=a,t),clone(t){return this.create(...t)},copy:(t,e)=>(e[0]=t[0],e[1]=t[1],e[2]=t[2],e),add(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]+e[0],a[1]=t[1]+e[1],a[2]=t[2]+e[2],a},subtract(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]-e[0],a[1]=t[1]-e[1],a[2]=t[2]-e[2],a},addNum:(t,e)=>(t[0]=t[0]+e,t[1]=t[1]+e,t[2]=t[2]+e,t),dot:(t,e)=>t[0]*e[0]+t[1]*e[1]+t[2]*e[2],cross(t,e,r){let a;a=void 0!==r?r:this.create();let i=t[0],o=t[1],n=t[2],p=e[0],M=e[1],u=e[2];return a[0]=o*u-n*M,a[1]=n*p-i*u,a[2]=i*M-o*p,a},project:(t,e)=>(t[0]*e[0]+t[1]*e[1]+t[2]*e[2])/Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)),length:t=>Math.hypot(t[0],t[1],t[2]),normalize(t){let e=Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2)+Math.pow(t[2],2));return 0!==e?(t[0]=t[0]/e,t[1]=t[1]/e,t[2]=t[2]/e):t[0]=t[1]=t[2]=0,t},scale:(t,e)=>(t[0]=t[0]*e,t[1]=t[1]*e,t[2]=t[2]*e,t),negate:t=>(t[0]=-t[0],t[1]=-t[1],t[2]=-t[2],t),angle(t,e){let r=t[0],a=t[1],i=t[2],o=e[0],n=e[1],p=e[2],M=Math.sqrt(r*r+a*a+i*i)*Math.sqrt(o*o+n*n+p*p),u=t[0]*e[0]+t[1]*e[1]+t[2]*e[2],l=M&&u/M;return Math.acos(Math.min(Math.max(l,-1),1))},extend(t){let e=new Float32Array(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1,e}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Matrix3=void 0;const a=r(0),i=r(4);e.Matrix3={create(t){let e=new Float32Array(9);return e[0]=1,e[4]=1,e[8]=1,void 0!==t&&Array.isArray(t)&&this.set(e,t),e},set:(t,e)=>(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t),add(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]+e[0],a[1]=t[1]+e[1],a[2]=t[2]+e[2],a[3]=t[3]+e[3],a[4]=t[4]+e[4],a[5]=t[5]+e[5],a[6]=t[6]+e[6],a[7]=t[7]+e[7],a[8]=t[8]+e[8],a},subtract(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]-e[0],a[1]=t[1]-e[1],a[2]=t[2]-e[2],a[3]=t[3]-e[3],a[4]=t[4]-e[4],a[5]=t[5]-e[5],a[6]=t[6]-e[6],a[7]=t[7]-e[7],a[8]=t[8]-e[8],a},multiply(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]*e[0]+t[1]*e[3]+t[2]*e[6],a[1]=t[0]*e[1]+t[1]*e[4]+t[2]*e[7],a[2]=t[0]*e[3]+t[1]*e[5]+t[2]*e[8],a[3]=t[3]*e[0]+t[4]*e[3]+t[5]*e[6],a[4]=t[3]*e[1]+t[4]*e[4]+t[5]*e[7],a[5]=t[3]*e[3]+t[4]*e[5]+t[5]*e[8],a[6]=t[6]*e[0]+t[7]*e[3]+t[8]*e[6],a[7]=t[6]*e[1]+t[7]*e[4]+t[8]*e[7],a[8]=t[6]*e[3]+t[7]*e[5]+t[8]*e[8],a},multiplyVec2(t,e,r){let a;return a=void 0!==r?r:i.Vector2.create(),a[0]=t[0]*e[0]+t[1]*e[1]+t[2],a[1]=t[3]*e[0]+t[4]*e[1]+t[5],a},multiplyNum:(t,e)=>(t[0]=t[0]*e,t[1]=t[1]*e,t[2]=t[2]*e,t[3]=t[3]*e,t[4]=t[4]*e,t[5]=t[5]*e,t[6]=t[6]*e,t[7]=t[7]*e,t[8]=t[8]*e,t),transpose(t){let e=t[0],r=t[1],a=t[2],i=t[3],o=t[4],n=t[5],p=t[6],M=t[7],u=t[8];return t[0]=e,t[1]=i,t[2]=p,t[3]=r,t[4]=o,t[5]=M,t[6]=a,t[7]=n,t[8]=u,t},identity:t=>(t[0]=t[4]=t[8]=1,t[1]=t[2]=0,t[3]=t[5]=0,t[6]=t[7]=0,t),translate:(t,r)=>(a._tempMatrix3[0]=1,a._tempMatrix3[1]=0,a._tempMatrix3[2]=r[0],a._tempMatrix3[3]=0,a._tempMatrix3[4]=1,a._tempMatrix3[5]=r[1],a._tempMatrix3[6]=0,a._tempMatrix3[7]=0,a._tempMatrix3[8]=1,e.Matrix3.multiply(a._tempMatrix3,t,t)),scale:(t,r)=>(a._tempMatrix3[0]=r[0],a._tempMatrix3[1]=0,a._tempMatrix3[2]=0,a._tempMatrix3[3]=0,a._tempMatrix3[4]=r[1],a._tempMatrix3[5]=0,a._tempMatrix3[6]=0,a._tempMatrix3[7]=0,a._tempMatrix3[8]=1,e.Matrix3.multiply(a._tempMatrix3,t,t)),rotate(t,r,i){let o=Math.sin(r),n=Math.cos(r),p=1-n,[M,u]=i;return a._tempMatrix3[0]=n,a._tempMatrix3[1]=-o,a._tempMatrix3[2]=p*M+o*u,a._tempMatrix3[3]=o,a._tempMatrix3[4]=n,a._tempMatrix3[5]=p*u-o*M,a._tempMatrix3[6]=0,a._tempMatrix3[7]=0,a._tempMatrix3[8]=1,e.Matrix3.multiply(a._tempMatrix3,t,t)}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Vector2=void 0,e.Vector2={create(t,e){let r=new Float32Array(2);return void 0!==t&&(r[0]=t),void 0!==e&&(r[1]=e),r},set:(t,e,r)=>(t[0]=e,t[1]=r,t),clone(t){return this.create(...t)},copy:(t,e)=>(e[0]=t[0],e[1]=t[1],e),add(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]+e[0],a[1]=t[1]+e[1],a},subtract(t,e,r){let a;return a=void 0!==r?r:this.create(),a[0]=t[0]-e[0],a[1]=t[1]-e[1],a},addNum:(t,e)=>(t[0]=t[0]+e,t[1]=t[1]+e,t),dot:(t,e)=>t[0]*e[0]+t[1]*e[1],cross:(t,e)=>t[0]*e[1]-e[0]*t[1],project:(t,e)=>(t[0]*e[0]+t[1]*e[1])/Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)),length:t=>Math.hypot(t[0],t[1]),normalize(t){let e=Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2));return 0!==e?(t[0]=t[0]/e,t[1]=t[1]/e):t[0]=t[1]=0,t},normal(t,e){let r;return r=void 0!==e?e:this.create(),r[0]=-t[1],r[1]=t[0],r},scale:(t,e)=>(t[0]=t[0]*e,t[1]=t[1]*e,t),negate:t=>(t[0]=-t[0],t[1]=-t[1],t),angle(t,e){let r=t[0]*e[0]+t[1]*e[1],a=Math.hypot(t[0],t[1]),i=Math.hypot(e[0],e[1]);return Math.acos(r/(a*i))},extend(t){let e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=1,e}}}])}));