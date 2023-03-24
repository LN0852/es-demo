for(var i = 0 ; i < 3 ; i++) {
    (function(j){
        setTimeout(function(){
            console.log(j)
        })
    })(i)
    // 写成闭包的形式
}
// ===
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    })
}