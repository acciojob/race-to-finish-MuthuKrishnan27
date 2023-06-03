let prom1  = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Prom1 resolved");
            },(Math.floor(Math.random() * 5) + 1)*1000;
        });

        let prom2  = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Prom2 resolved");
            },(Math.floor(Math.random() * 5) + 1)*1000;
        });

        let prom3  = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Prom3 resolved");
            },(Math.floor(Math.random() * 5) + 1)*1000;
        });

        let prom4  = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Prom4 resolved");
            },(Math.floor(Math.random() * 5) + 1)*1000;
        });

        let prom5  = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Prom5 resolved");
            },(Math.floor(Math.random() * 5) + 1)*1000;
        });

window.promises = Promise.any([prom1,prom2,prom3,prom4,prom5]);
let output = document.getElementById("output");
promises.then((result)=>{
	output.innerText = result;
})