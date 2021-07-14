let wishlistButtons = document.querySelectorAll('.add-wishlist');
let bascketButtons = document.querySelectorAll('.add-buscket');

for (let wishlistButton of wishlistButtons){
wishlistButton.onclick = function (){
	wishlistButton.classList.toggle('added-wishlist');
}
}

for (let bascketButton of bascketButtons){
bascketButton.onclick = function (){
	bascketButton.classList.toggle('added-buscket');
}
}