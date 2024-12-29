// function databasesharing(){
//     console.log("Data Stored Successfully")
// }

// function sumbitform(fromMsg,dbs){
//     setTimeout((=>w))
// }
// obj1 = {
//     "Name":"Mahashwin",
//     "Roll_No": "22csr112",
//     "Age" : 20, 
// }

// for(key in obj1){
//     value = obj1[key]
//     console.log(key,value)
// }

// task 1   print obj in for of or for each 

//async 

// async function fun() {          //normal fun
//     return "hello"
// }
// fun1= async () => {          //arrow fun
//     return "kec"
// }

// console.log(fun())
// console.log(fun1())

// setTimeout(()=>{                 //timer 
//     console.log("hii")
// },2000


//location finder eg
// function loc(){
//     m=7
//     return new Promise((resolve,reject)=>{           // promises 
//         if(m ==9){
//             resolve("Train Arrived")
//         }
//         else{
//             reject("Train Not Arrived")
//         }
//     })
// }

// loc().then((resolvemsg)=>{
//     console.log(resolvemsg);
// }).catch(function(rejectedmsg){
//     console.log(rejectedmsg);
// })


//promises insta


async function createPost(){
    var post = new Promise((cpost) => {
        cpost("Created successfully")
    })
    var [posts,comments,likes] = await Promise.all([post,comment(),like()])
    console.log(posts);
    console.log(comments);
    console.log(likes);
}


createPost()                                   ///////


async function comment() {
    return new Promise((commandPosted) => {
        commandPosted("Command Posted Successfully")
    })
}



async function like() {
    return new Promise((liked) => {
        liked("Liked Posted Successfully")
    })
}

//task 2   implement share unshare unpost unlike uncomment 