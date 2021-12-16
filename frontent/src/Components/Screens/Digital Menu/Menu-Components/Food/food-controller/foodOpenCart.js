const openCart = (id) => {
    document.querySelector(".down-arrow"+id).style.display = "none";
    document.querySelector(".up-arrow"+id).style.display = "block";
    document.querySelector(".slider"+id).style.display = "block";
}

module.exports = openCart;