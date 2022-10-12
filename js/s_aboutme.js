var mainButton = document.querySelector('.main-button');
var mainButtonInside = document.querySelector('.main-button-inside');
var mainMovingCards = document.querySelectorAll('.main-moving-card');
var main = document.querySelector('.main');

var movingpresesed = false;
var movingclicked = false;

mainButton.addEventListener('click', () => {
    if (movingclicked == false) {
        movingclicked = true;
        mainButton.style.borderColor = "#40939E";
        mainButtonInside.style.background = "#40939E";
        mainButtonInside.style.marginLeft = "3px";
    }
    else if (movingclicked == true) {
        movingclicked = false;
        mainButton.style.borderColor = "#DADADA";
        mainButtonInside.style.background = "#DADADA";
        mainButtonInside.style.marginLeft = "43px";
    }
});

mainMovingCards.forEach(mainMovingCard => {
    mainMovingCard.addEventListener('mousedown', (e) => {
        if (movingclicked == true) {
            movingpresesed = true;
            var x01 = e.clientX;
            var x = e.clientX - mainMovingCard.offsetLeft;
            var y = e.clientY - mainMovingCard.offsetTop;

            var mainMovingCard_clone = mainMovingCard.cloneNode(true);
            mainMovingCard_clone.style.position = "absolute";
            mainMovingCard_clone.style.zIndex = 4;
            main.append(mainMovingCard_clone);

            ForMousemove(e, mainMovingCard_clone, x, y);
            mainMovingCard.style.opacity = 0;
            mainMovingCard_clone.addEventListener('mousemove', (e) => {
                if (movingpresesed == true) {
                    ForMousemove(e, mainMovingCard_clone, x, y);
                }
            });
            document.addEventListener('mouseup', (e) => {
                if (movingclicked == true) {
                    movingpresesed = false;
                    var x1 = e.clientX;
                    var y1 = e.clientY;
                    for (let i = 0; i < mainMovingCards.length; i++) {
                        if ((x1 > mainMovingCards[i].offsetLeft && x1 < (mainMovingCards[i].offsetWidth + mainMovingCards[i].offsetLeft)) && (y1 > mainMovingCards[i].offsetTop && y1 < (mainMovingCards[i].offsetHeight + mainMovingCards[i].offsetTop))) {
                            mainMovingCard.style.opacity = 1;
                            mainMovingCards[i].after(mainMovingCard);
                            if (x01 > x1) {
                                mainMovingCards[i].before(mainMovingCard);
                            }
                            else if (x01 < x1) {
                                mainMovingCards[i].after(mainMovingCard);
                            }
                            mainMovingCard_clone.remove();
                        }
                        else {
                            mainMovingCard.style.opacity = 1;
                            mainMovingCard_clone.remove();
                        }
                    }
                }
            });
        }
    });
});

function ForMousemove(e, mainMovingCard_clone, x, y) {
    mainMovingCard_clone.style.left = (e.clientX - x) + "px";
    mainMovingCard_clone.style.top = (e.clientY - y) + "px";
}

var hnmtlcssBtnLeft = document.querySelector('.main-html-css-project-btn-1');
var hnmtlcssBtnRight = document.querySelector('.main-html-css-project-btn-2');
var mainHtmlCssProjectPictureOverflow = document.querySelector('.main-html-css-project-picture-overflow');
var mainHtmlCssProjectPictureFull = document.querySelector('.main-html-css-project-picture-full');
var mainHtmlCssProjectPicture = document.querySelectorAll('.main-html-css-project-picture');
var htmlCssProjectRadio = document.querySelectorAll('.html-css-project-radio');
var btnsSmall = document.querySelectorAll('.btn-small');

var i_hc = 1;

var htmlcssFirstClone = mainHtmlCssProjectPicture[0].cloneNode(true);
var htmlcssLastClone = mainHtmlCssProjectPicture[mainHtmlCssProjectPicture.length - 1].cloneNode(true);

htmlcssFirstClone.id = "html-css-first-clone";
htmlcssLastClone.id = "html-css-last-clone";

mainHtmlCssProjectPictureFull.append(htmlcssFirstClone);
mainHtmlCssProjectPictureFull.prepend(htmlcssLastClone);

var mainHtmlCssProjectPicture = document.querySelectorAll('.main-html-css-project-picture');

mainHtmlCssProjectPictureFull.addEventListener('transitionend', () => {
    var mainHtmlCssProjectPicture = document.querySelectorAll('.main-html-css-project-picture');
    if (mainHtmlCssProjectPicture[i_hc].id === "html-css-first-clone") {
        mainHtmlCssProjectPictureFull.style.transition = "none";
        i_hc = 1;
        HtmlCssProjectLeft(mainHtmlCssProjectPictureFull, main);
    }
    if (mainHtmlCssProjectPicture[i_hc].id === "html-css-last-clone") {
        mainHtmlCssProjectPictureFull.style.transition = "none";
        i_hc = mainHtmlCssProjectPicture.length - 2;
        HtmlCssProjectLeft(mainHtmlCssProjectPictureFull, main);
    }
});

hnmtlcssBtnLeft.addEventListener('click', () => {
    if (i_hc <= 0) { return; }
    i_hc--;
    if(i_hc > 0){
        htmlCssProjectRadio[i_hc-1].checked = true;
    }
    else{
        htmlCssProjectRadio[mainHtmlCssProjectPicture.length - 3].checked = true;
    }
    HtmlCssProjectLeft(mainHtmlCssProjectPictureFull, main);
    mainHtmlCssProjectPictureFull.style.transition = "1s";
});

hnmtlcssBtnRight.addEventListener('click', () => {
    var mainHtmlCssProjectPicture = document.querySelectorAll('.main-html-css-project-picture');
    if (i_hc >= mainHtmlCssProjectPicture.length - 1) { return; }
    i_hc++;
    if(i_hc < mainHtmlCssProjectPicture.length - 1){
        htmlCssProjectRadio[i_hc-1].checked = true;
    }
    else{
        htmlCssProjectRadio[0].checked = true;
    }
    HtmlCssProjectLeft(mainHtmlCssProjectPictureFull, main);
    mainHtmlCssProjectPictureFull.style.transition = "1s";
});

btnsSmall.forEach(btnSmall => {
    btnSmall.addEventListener('click', () => {
        for (let k = 0; k < btnsSmall.length; k++) {
            if(btnSmall == btnsSmall[k]){
                var k1 = k;
            }
        }
        i_hc = k1+1;
        HtmlCssProjectLeft(mainHtmlCssProjectPictureFull, main);
        mainHtmlCssProjectPictureFull.style.transition = "1s";
    });
});

function HtmlCssProjectLeft(obj, main){
    if(main.offsetWidth<=600){
        obj.style.left = "" + (-70 * i_hc) + "vw";
    }
    else if(main.offsetWidth<=1210){
        obj.style.left = "" + (-80 * i_hc) + "vw";
    }
    else{
        obj.style.left = "" + (-55 * i_hc) + "vw";
    }
}

var mainMusicBlocksFull = document.querySelectorAll('.main-music-block-full');

mainMusicBlocksFull.forEach(mainMusicBlockFull => {
    mainMusicBlockFull.addEventListener('mouseover', () => {
        var mainMusicBlock = mainMusicBlockFull.querySelector('.main-music-block');
        var mainMusicBlockText = mainMusicBlockFull.querySelector('.main-music-block-text');
        mainMusicBlockFull.style.height = ""+(mainMusicBlock.offsetHeight+mainMusicBlockText.offsetHeight+1)+"px";
    });
    mainMusicBlockFull.addEventListener('mouseout', () => {
        mainMusicBlockFull.style.height = "150px";
    });
});