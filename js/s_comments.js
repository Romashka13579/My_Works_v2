var mainCommentsTextbarBtn = document.querySelector('.main-comments-textbar-btn');
var mainCommentsTextbar = document.querySelector('.main-comments-textbar');
var commentsBlock = document.querySelector('.comments-block');

var commentBlock1 = document.querySelector('.comment-block-1').cloneNode(true);
var commentBlock1Txt = commentBlock1.querySelector('.comment-block-txt');
document.querySelector('.comment-block-1').remove();

mainCommentsTextbarBtn.addEventListener('click', () => {
    if(mainCommentsTextbar.value != "")
    {
        var clone = commentBlock1.cloneNode(true);
        clone.querySelector('.comment-block-txt').innerHTML = mainCommentsTextbar.value;
        commentsBlock.append(clone);
        mainCommentsTextbar.value = "";
        var commentsBlocks1 = document.querySelectorAll('.comment-block-1');
        CommentsArray(commentsBlocks1);
    }
});

function CommentsArray(array){
    array.forEach(arrayelement => {
        arrayelement.querySelector('.fa-square-minus').addEventListener('click', () => {
            arrayelement.remove();
        });
        arrayelement.querySelector('.fa-pen').addEventListener('click', () => {
            arrayelement.querySelector('.comment-block-txt').style.display = "none";
            if(arrayelement.querySelector('.comment-block-txt').innerHTML != ""){
                arrayelement.querySelector('.comment-block-txt-in-change').value = arrayelement.querySelector('.comment-block-txt').innerHTML;
                arrayelement.querySelector('.comment-block-txt').innerHTML = "";
            }
            arrayelement.querySelector('.comment-block-txt-in-change').style.display = "block";
            arrayelement.querySelector('.comment-block-txt-in-change').addEventListener('keypress', (e) => {
                if(e.key === 'Enter'){
                    arrayelement.querySelector('.comment-block-txt').innerHTML = arrayelement.querySelector('.comment-block-txt-in-change').value;
                    arrayelement.querySelector('.comment-block-txt').style.display = "block";
                    arrayelement.querySelector('.comment-block-txt-in-change').style.display = "none";
                }
            });
        });
    });
}