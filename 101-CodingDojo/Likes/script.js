// function likeClick(countNumber) {

//     var likeBtnClass = countNumber;
//     var firstLike = document.querySelector(".count-1");
//     var secondLike = document.querySelector(".count-2");
//     var thirdLike = document.querySelector(".count-3");

//     if(likeBtnClass == 'count-1'){
//         firstLike.innerText = +firstLike.innerText +1;
//         console.log(likeBtnClass);
//         console.log(firstLike);
//     }

//     else if(likeBtnClass == 'count-2'){
//         secondLike.innerText = +secondLike.innerText +1;
//         console.log(likeBtnClass);
//         console.log(secondLike);
//     }

//     else if(likeBtnClass == 'count-3'){
//         thirdLike.innerHTML = +thirdLike.innerHTML +1;
//         console.log(likeBtnClass);
//         console.log(thirdLike);
//     }
// }

function likeClick(id){
    var like = document.querySelector(id)
    like.innerText++
}