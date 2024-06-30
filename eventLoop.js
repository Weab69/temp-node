const { readFile } = require('fs')

console.log('started first task')

readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
    console.log('task completed')
} ) 

console.log('started second task')