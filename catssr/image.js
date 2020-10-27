function resultimg(path) {
    document.getElementById('myImg').src = path + ".jpg";
    document.getElementById('myImg').alt = path;
}

// 获取弹窗
var modal = document.getElementById('myModal');

// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}