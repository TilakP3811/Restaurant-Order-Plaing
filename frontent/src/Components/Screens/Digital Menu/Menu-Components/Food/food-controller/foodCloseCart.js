const closeCart = (id) => {
    document.querySelector(".down-arrow"+id).style.display = "block";
    document.querySelector(".up-arrow"+id).style.display = "none";
    document.querySelector(".slider"+id).style.display = "none";
}
module.exports = closeCart;