## let 和 const

let 声明变量  -->  有块级作用域,没有声明提升,暂时性死区,不允许重复声明

    let 闭包实现 --> 在es5


const 声明只读常量  --> 常量的值不能改变

Object.defineProperty

    writable   //是否可写
    configurable   //是否可删除
    enumerable    //是否可枚举
    value   // 设置值
    get   
    set   



```
    eg:
    writable  -->  是否可写
    Object.defaultProperty({a:1},"a",{
        writable:false
    })
    //设置false之后不可更改    不改变原来数据
    
    configurable  -->  是否可删除
    Object.defaultProperty({a:1},"a",{
        configurable:false
    })
    //设置flase之后不可删除
    
    enumerable  -->  是否可枚举
    Object.defaultProperty({a:1},"a",{
        enumerable:false
    })
    //设置为false   遍历之后不可获取
    
    
    value
    Object.defaultProperty({a:1},"a",{
        value:false
    })
    //设置a的值为  false
    
    Object.defineProperty(obj,"c",{
        writable:false,//是否可写
        configurable:false,//是否可删除
        enumerable:false,
        value:"lisi"
    })
    
    
    get/set  --> 只兼容到ie8
    Object.defaultProperty({a:1},"a",{
        get(){//获取值得时候执行
            return "111"
        },
        set(val){//设置值得时候执行
            console.log(val);
        }
    })
    //get的返回值为set的参数
    
```

## 判断array与object

1. Object.prototype.toString.call([]) === "[object Array]" 
2. [].constructor == Array


```
    [] instanceof Array  // true
    
    [] instanceof Object  // true
    
    instanceof无法判断数组和对象
    
```

typeof用来判断基本数据类型
    
## proxy   ES6 3.0的核心
    
    
    
```

var obj = {abc:"123"}

var proxy = new Proxy(obj,{
    get(target,key){
        console.log(target,key) //  {abc: "123"} "abc"
    },
    set(target,key,val){
        console.log(target,key,val)  // {abc: "123"} "abc" 设置的值
    }
})
    target  处理的目标对象  （对象，函数）
    key  键
    val   设置的值
```


## promise  async/await   generator  异步-->同步


promise中的3种状态：penndeing，resolved/fulfilled，rejected


then方法中的参数   就是resolve,reject

promise中的两个静态方法 ：Promise.resolve   Promise.reject
//将非promise对象转化为promise对象


promise的两个控制时序的方法:all,rece

    
特性 1.控制时序 2.封装复用
 
 
```
//promise 放在函数中  
   
function load(src){
    return new Promise((resolve,reject)=>{
        let img = new Image()
        img.src = src;
        img.onload = fucntion(){
            resolve(img)
        }
        img.onerror = fucntion(e){
            reject(e)
        }
    })
}

let url = ''

load(url).then((res)=>{
    document.body.appendChild(res)
    return 111 === return Promise.resolve(111)
    return Promise.reject("出错了")
},err=>{
    
}).then(res1=>{
    console.log(res1) // 111
}，err=>{
    console.log(err)
}).catch(()=>{
    //捕获所有reject
}
).finally(()=>{
    //不论什么时候都会执行
})
```


## async await  异步函数

async返回一个promise对象


```
async function loadImg(){
   let  img = await load(url)//返回一个resolve --> 如果返回一个reject,会报错(用try  catch 解决)
   let num = await 1000;//1000
   document.body.appendChild(img)
}
loadImg() //返回一个promise
```


## class面向对象


super在第一行使用   拷贝父类的构造函数


## 深浅拷贝


> 数组 [...arr]  ,concat()  slice()
>
> 对象 {...obj}  Object.assign()


==只做第一层的的深拷贝==
    

JSON.parse(JSON.stringify())//深拷贝