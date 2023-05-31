
let prom1  = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Prom1 resolved");
	},2000);
});

let prom2  = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Prom2 resolved");
	},5000);
});

let prom3  = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Prom3 resolved");
	},1000);
});

let prom4  = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Prom4 resolved");
	},4000);
});

let prom5  = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("Prom5 resolved");
	},3000);
});

window.promises = Promise.any([prom1,prom2,prom3,prom4,prom5]);

let output = document.getElementById("output");
output.innerText = window.promises;
// Do not change the code above this
// add your promises to the array `promises`
