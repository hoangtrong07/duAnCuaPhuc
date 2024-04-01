const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector("H1").innerText
    var productPrice =product.querySelector("span").innerText
    // console.log(productPrice,productImg,productName)
    addcart(productPrice,productImg,productName)
}})
})
function addcart(productPrice,productImg,productName) {
    var addtr = document.createElement("tr")
    var carItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<carItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML==productName){
            alert("Sản phẩm của bạn đã có trong giỏ hàng")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width: 70px" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;">Xóa</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    carttotal()
}
// -------------------------------------------------------------
function carttotal (){
    var carItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i=0;i<carItem.length;i++){
        var inputValue = carItem[i].querySelector("input").value
        var productPrice = carItem[i].querySelector(".prices").innerHTML
        totalA = inputValue*productPrice*1000
        totalC = totalC + totalA
        totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalC
    // console.log(cartTotalA)

}