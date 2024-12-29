var a = 40
var b = 23 
var c = 40
var d ="Arvi"

//arithmatic operators
console.log("--------------Arithmetic---------")
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//relational operator
console.log("---------relation-----------")
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a==c)
console.log(a===b)
console.log(a!=b)
console.log(a!==d)


//logical
console.log("----logical------")
console.log(a&&b)
console.log(a||c)


//bitwise
console.log("-------------bitwise---------")
console.log(1&2)
console.log(1|2)
console.log(2^1)
console.log(2>>2)
console.log(a<<2)


//ternary 
console.log((a>b)?"m":"g")

//looping
arvi_mean = [20,19,5,[4.5 , 10.2],null,true]

for(var x in arvi_mean)
{
    console.log(x)
}

for (const element of arvi_mean) {
       console.log(element)
}

//object type 1

obj = {
    "Name":"Mahashwin",
    "Roll_No": "22csr112",
    "Age" : 20, 
}

console.log(obj)


//Type 2
obj1 = {}
obj1["Movie"] = "Pushpa 2"
obj1["Movie_budjet"] = "500 cr"
obj1["Collection"] = "1200 cr"

console.log(obj1)

//type 3
const obj2 = new Object()
obj2["Name"] = "jayaanth"
obj2["Spouse_name"] = "kamalesh"
obj2["Kid name"] = "jana" 

console.log(obj2)



//arrow function
arrow = (studet)=>{
    return studet[0]
}
console.log(arrow(["maha","ashwin","jayaanth"]))

//destructing operator
console.log(".............Destructing operator..................")
var mark=[10,20,30]
var [m1,m2,m3] = mark
console.log(m1,m2,m3)

//ternary
console.log(".............Ternary operator..................")
a=10
console.log((a%2==0)?"Even":"odd")

//spread operator
console.log(".............Sprad operator..................")
arr=["maha","ashwin","jayaanth","jana","kishore"]
arr1=["mathav","kamalesh"]
console.log(...arr,...arr1)

//rest operator
console.log(".............rest operator..................")
const [ar,br,...cr] = arr
console.log(ar)
console.log(br)
console.log(cr)

//scope
console.log(".............Scope operator..................")
var p=10
{
    let p=90
    console.log(p)

}
console.log(p)