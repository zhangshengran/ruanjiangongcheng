var Input = document.querySelector("input");
Input.onchange = function upload(){
    var files = !!this.files ? this.files : [];
    if (!files.length || !window.FileReader) {
        console.log("浏览器不支持HTML5");
        return false;   
    };
    // 创建一个FormData对象,用来组装一组用 XMLHttpRequest发送请求的键/值对
    var fd = new FormData();
    // 把 input 标签获取的文件加入 FromData 中
    fd.append('file', files[0]);

    // Ajax
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/upload");
    request.send(fd);
    request.onreadystatechange = function(){
        if(request.readyState === 4 & request.status === 200){
            console.log("上传成功");
            var response = JSON.parse(request.responseText);
            console.log(response);
        }
    }
}
