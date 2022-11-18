console.log("123")

p.then(res=>console.log(res))

var p = new Promise((resolve,reject)=>{
	console.log("555")
	resolve("421")
})

console.log("451")
