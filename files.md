### 文件上传
- formData文件上传posthttp://123.206.55.50:11000/upload

```
<input type="file">
```
```
支持文件上传,用post方式提交formData对象,键为文件名,值为文件
eg:
var ele = document.querySelector('input');
ele.onchange = function(e){
    console.log('e...', e);
    let files = e.target.files;
    // 创建一个formData
    let form = new FormData();
    for (let i=0,len=files.length; i<len;i++){
        console.log(files[i].name);
        form.append(files[i].name, files[i]);
    }

    axios({
        method: 'post',
        url: 'http://123.206.55.50:11000/upload',
        data: form
    }).then(body=>{
        console.log('body...', body);
    }).catch(e=>{
        console.log('e..', e);
    })
}
```
- base64图片上传 post http://123.206.55.50:11000/upload_base64

```
<input type="file">
```

```
var ele = document.querySelector('input');
ele.onchange = function(e){
    let files = e.target.files;
    var reader = new FileReader();
    reader.onload = function(){
        console.log('result...', this.result);
        axios({
            method: 'post',
            url: 'http://123.206.55.50:11000/upload_base64',
            data: {base64: this.result}
        }).then(body=>{
            console.log('body...', body);
        }).catch(e=>{
            console.log('e..', e);
        })
    }
    reader.readAsDataURL(files[0]);
}
```

- 图片转成base64 post http://123.206.55.50:11000/tobase64

```
axios({
    method: 'post',
    url: 'http://123.206.55.50:11000/tobase64',
    data: {url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3360034032,4096528553&fm=26&gp=0.jpg'}
}).then(body=>{
    console.log('body...', body);
}).catch(e=>{
    console.log('e..', e);
})
```