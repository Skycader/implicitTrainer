var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

const promise = () => {
	return [
		promises[Math.floor(Math.random()*promises.length)].replace("{{body}}",bodies[Math.floor(Math.random()*bodies.length)]),
		thens[Math.floor(Math.random()*thens.length)],
	]
}
const cases = [
	promise
]

const promises = [
	`new Promise((resolve,reject)=>{
		{{body}}
	})`,
	`Promise.resolve("123")`
]
const bodies = [
	`console.log(123)`,
	`resolve("123")`,
	promises[0],
	promises[1]
]

let thens = [
	`.then(res=>console.log(res))`
]

let code = ""
const generator = () => {
	code = cases[Math.floor(Math.random()*cases.length)]().join("")	
	console.log(code)
	console.log("---------")
	//eval(code)
}

rl.on('line', function (data) {
	eval(code)
})

generator()
