const e=new Date("sep 06 2023 21:00:00"),o=e.getTime(),t=setInterval(function(){let e=new Date,l=e.getTime(),n=o-l,a=Math.floor(n/864e5),c=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4),s=Math.floor(n%6e4/1e3);console.log(a),console.log(c),console.log(r),console.log(s),document.getElementById("contime").innerHTML=`${a}d ${c}h ${r}m ${s}s`,n<0&&clearInterval(t)},1e3);//# sourceMappingURL=index.da1c926f.js.map

//# sourceMappingURL=index.da1c926f.js.map
