//求出所有3位数的偶数和

function all(arr){
    return arr.reduce((a,b)=>a+b);
}
var arr = [];
for(var i = 100;i<=999;i++){
    arr.push(i)
}
var newArr = arr.filter(item=>item%2===0)

console.log(all(newArr))

//随机生成6个随机数(在1-100之间)，存储到ArrayList集合中将集合中的随机数遍历出来
function rendom(min,max){
    return Math.floor(Math.random()*(max-min-1)+min)
}

var rendomArr = [];

while(rendomArr.length<6){
    rendomArr.push(rendom(1,100))
}
rendomArr.forEach(item=>{
    console.log(item)
})