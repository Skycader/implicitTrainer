var readline = require('readline');

var rl = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

const prettier = require('prettier')
const line = [
//	`{{line}}`,
	`{{line}}
	
	{{line}}
	
	{{line}}
	`,
	`var p = new Promise((resolve,reject)=>{
		{{promise-body}}
	}){{then-body}}`,
	`Promise.resolve({{random-num}}){{then-body}}`,
	`var p = new Promise((resolve,reject)=>{
		{{promise-body}}
	})`,
	`Promise.reject("ERR"){{then-body}}`,
	`p{{then-body}}`,
	`setTimeout(()=>{
		{{setTimeout-body}}
	})`,
	`console.log("{{random-num}}")`,

]

const promiseBody = [
	`resolve("{{random-num}}")`,
	`console.log("{{random-num}}");
	resolve("{{random-num}}")`,
	`reject("ERROR")`
]

const then = [
	``,
	`.then(res=>console.log(res)){{then-body}}`,
	`.then(res=>{ console.log(res); return new Promise((resolve,reject) => {
		{{promise-body}}
	})})`,
	`.catch(res=>{console.log(res); return {{random-num}} })`,
	`.catch(res=>console.log(res))`,
	`.catch()`,
	`.finally(res=>{console.log(res); return {{random-num}} })`

]

//promise-body: anything from body
//setTimeout-body: anything from body expect for resolve
//then-body: anything from then body

Array.prototype.takeRandom = function() { //Returns random element from an array

	let randomIndex = Math.floor(Math.random()*this.length)
	return this[randomIndex]
}

String.prototype.replacer = function() {
	let res = 
		this
		.replace(`{{line}}`,line.takeRandom() )
		.replace(`{{promise-body}}`, promiseBody.takeRandom() )
		.replace(`{{setTimeout-body}}`, line.takeRandom() )
		.replace(`{{then-body}}`, then.takeRandom() )
		.replace(`{{random-num}}`, Math.floor(Math.random()*999) )

	return res
}

const generator = (str) => {
	return  (str.indexOf(`{{`) !== -1) 
	? generator( str.replacer() )
	: str
}
let code = ""
console.log("GENERATOR: \n",
	code = prettier.format(generator(line[0]))
)
rl.on('line', function (data) {
	eval(code)
})
