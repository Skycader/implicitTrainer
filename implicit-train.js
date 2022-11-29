var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

function parse(str) {
  return new Function("", `return ${str}`)();
}

const vars = {
	0: "false",
	1: "true",
	2: "'string'",
	3: "'str123b'",
	4: "' 1 '",
	5: "[]",
	6: "[1,2]",
	7: "null",
	8: "undefined",
	9: "{}",
	10: "!",
	11: "2",
	12: "4",
	13: "0",
	14: "[1]",
	15: "'true'",
	16: "'false'",
	17: "new Date(0)",
	18: '3.14',
	19: 'Infinity',
	20: '-Infinity',
	21: '{name: "John"}',
	22: 'new Array(1)[0]'
}

const oprs = {
	0: "+",
	1: "-",
	2: "*",
	3: "/",
	4: "==",
	5: ">",
	6: "<",
	7: "||",
	8: "&&",
	9: "==="
}

const mods = {
	0: "",
	1: "+",
	2: " + ",
	3: "!",
	4: "!!",
	5: "typeof "

}

const func = {
	0: "Number",
	1: "Boolean",
	2: "String"
}

const take = (obj) => {
	//if (obj[1]=="-") if (Math.random()<0.5) return obj[0]
	let ok = Object.keys(obj).length
	let rk = Math.floor(Math.random()*ok)
	return obj[rk]
}

const render = () => {
	try {
	task = `${take(mods)}${take(vars)}${take(oprs)}${take(mods)}${take(vars)}`
	if (Math.random()>0.7) task = `${take(mods)}${take(vars)}${take(oprs)}${take(mods)}${take(vars)}${take(oprs)}${take(mods)}${take(vars)}`
	if (Math.random()>0.8) task = `${take(mods)}${take(vars)}${take(oprs)}${take(mods)}${take(vars)}${take(oprs)}${take(mods)}${take(vars)}${take(oprs)}${take(mods)}${take(vars)}` 
	if (Math.random()<0.1) task = `typeof ${take(vars)}`
	if (Math.random()<0.5) task = `${take(func)}(${take(vars)})`

		//task = `{}-!2`
	//task = `[]||+[]`
	//task = `[1,2]||+[]`
	sol = parse(task)
	//console.log(sol)
	console.log("Counter: " + counter + " Strike: ", strike, "Task took: ",  ((Date.now()-taskTook)/1000).toFixed(2) + "sec ",  "Time: ", ((Date.now()-begin)/1000).toFixed(2) + "sec")
	taskTook = Date.now()
	console.log(task)
	return task
	} catch(e) {
	//	console.log("FIXING ERROR")
		render()
	}
}
let counter = 0
let strike = 0
let task = ""
let sol = ""
let begin = Date.now()
let taskTook = Date.now()
rl.on('line', function (data) {
		counter++
		if (sol instanceof Array) sol = `[${sol}]`
		if (String(data) == String(sol)) {
			strike++
			console.log("OK")
			} else {
			strike=0
			console.log("WRONG! SOLUTION: " + sol)
			process.exit()
		}
		render()
	//	console.log("TASK:" + render())


});
render()
//console.log(render())
