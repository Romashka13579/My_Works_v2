var LinksBtn = document.querySelector('.links-profiles-btn');
var LinksProfiles = document.querySelectorAll('.link-profile');
var ProfileLinks = document.querySelector('.profile-links');

var clicked = 1;
var i = LinksProfiles.length - 1;

LinksBtn.addEventListener('click', () => {
    if (clicked == 1) {
        clicked = 0;
        ProfileLinks.style.display = "flex";
        setTimeout(() => {
            Links(LinksProfiles, i, 1);
        }, 10);
    }
    else if (clicked == 0) {
        clicked = 1;
        setTimeout(() => {
            Links(LinksProfiles, i, 0);
        }, 10);
    }
});

LinksProfiles.forEach(LinkProfile => {
    LinkProfile.addEventListener('transitionend', () => {
        if (LinkProfile.style.opacity == 1) {
            i--;
            if (i >= 0) {
                Links(LinksProfiles, i, 1);
            }
            else {
                i++;
            }
        }
        if (LinkProfile.style.opacity == 0) {
            i++;
            if (i < LinksProfiles.length) {
                Links(LinksProfiles, i, 0);
            }
            else {
                i--;
                ProfileLinks.style.display = "none";
            }
        }
    });
});

function Links(LinksProfiles, i, a) {
    if (a == 1) {
        LinksProfiles[i].style.opacity = 1;
    }
    else if (a == 0) {
        LinksProfiles[i].style.opacity = 0;
    }
}

var headerBotBtn = document.querySelector('.rectangles');
var faArrowUp = document.querySelector('.fa-arrow-up');
var headerBottomOverflow = document.querySelector('.header-bottom-overflow');
var headerBottom = document.querySelector('.header-bottom');
var main = document.querySelector('.main');

var headerclicked = 1;

headerBotBtn.addEventListener('click', () => {
    if (headerclicked == 1) {
        headerclicked = 0;
        faArrowUp.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
        headerBottomOverflow.style.display = "block";
        setTimeout(() => {
            main.style.transition = "padding 750ms";
            main.style.paddingTop = "192px"
            headerBottomOverflow.style.height = "80px";
            headerBottom.style.top = "0px";
        }, 10);
    }
    else if (headerclicked == 0) {
        headerclicked = 1;
        main.style.transition = "padding 750ms";
        main.style.paddingTop = "110px"
        faArrowUp.style.transform = "matrix(-1.00,0.00,-0.00,-1.00,0,0)";
        headerBottom.style.top = "-80px";
        headerBottomOverflow.style.height = "0px";
        setTimeout(() => {
            Links(LinksProfiles, i, 0);
        }, 10);
    }
});

var dropdownBtn = document.querySelector('.dropdown-btn');
var dropdownMyprojectsMenu = document.querySelector('.dropdown-myprojects-menu-overflow');

var dropdownBtnstyle;

dropdownBtn.addEventListener('focus', () => {
    dropdownBtnstyle = dropdownBtn.getBoundingClientRect();
    dropdownMyprojectsMenu.style.left = "" + (dropdownBtnstyle.left + 10) + "px";
    dropdownMyprojectsMenu.style.display = "block";
    setTimeout(() => {
        dropdownMyprojectsMenu.style.opacity = 1;
        dropdownMyprojectsMenu.style.marginTop = "165px";
        dropdownMyprojectsMenu.style.left = "" + (dropdownBtnstyle.left) + "px";
    }, 10);
});

dropdownBtn.addEventListener('focusout', () => {
    dropdownBtnstyle = dropdownBtn.getBoundingClientRect();
    dropdownMyprojectsMenu.style.opacity = 0;
    dropdownMyprojectsMenu.style.left = "" + (dropdownBtnstyle.left + 10) + "px";
    dropdownMyprojectsMenu.style.marginTop = "185px";
    dropdownMyprojectsMenu.addEventListener('transitionend', () => {
        if (dropdownMyprojectsMenu.style.marginTop == "185px") {
            dropdownMyprojectsMenu.style.display = "none";
        }
    });
});

var mainButton = document.querySelector('.main-button');
var mainButtonInside = document.querySelector('.main-button-inside');
var mainMovingCards = document.querySelectorAll('.main-moving-card');
var main = document.querySelector('.main');

var movingpresesed = false;
var movingclicked = false;

mainButton.addEventListener('click', () => {
    if(movingclicked == false){
        movingclicked = true;
        mainButton.style.borderColor = "#40939E";
        mainButtonInside.style.background = "#40939E";
        mainButtonInside.style.marginLeft = "3px";
    }
    else if(movingclicked == true){
        movingclicked = false;
        mainButton.style.borderColor = "#DADADA";
        mainButtonInside.style.background = "#DADADA";
        mainButtonInside.style.marginLeft = "43px";
    }
});

mainMovingCards.forEach(mainMovingCard => {
    mainMovingCard.addEventListener('mousedown', (e) => {
        if(movingclicked == true){
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
            mainMovingCard_clone.addEventListener('mouseup', (e) => {
                movingpresesed = false;
                var x1 = e.clientX;
                var y1 = e.clientY;
                for (let i = 0; i < mainMovingCards.length; i++) {
                    if((x1 > mainMovingCards[i].offsetLeft && x1 < (mainMovingCards[i].offsetWidth + mainMovingCards[i].offsetLeft)) && (y1 > mainMovingCards[i].offsetTop && y1 < (mainMovingCards[i].offsetHeight + mainMovingCards[i].offsetTop))){
                        mainMovingCard.style.opacity = 1;
                        mainMovingCards[i].after(mainMovingCard);
                        if(x01>x1){
                            mainMovingCards[i].before(mainMovingCard);
                        }
                        else if(x01<x1){
                            mainMovingCards[i].after(mainMovingCard);
                        }
                        mainMovingCard_clone.remove();
                    }
                    else{
                        mainMovingCard.style.opacity = 1;
                        mainMovingCard_clone.remove();
                    }
                }
            });
        }
        mainButton.addEventListener('click', () => {
            if(movingclicked == false){
                mainMovingCard.style.opacity = 1;
                mainMovingCard_clone.remove();
            }
        });
    });
});

function ForMousemove(e, mainMovingCard_clone, x, y) {
    mainMovingCard_clone.style.left = (e.clientX - x) + "px";
    mainMovingCard_clone.style.top = (e.clientY - y) + "px";
}

var mainArduinoDownloadsLinks = document.querySelectorAll('.main-arduino-downloads-link');

mainArduinoDownloadsLinks.forEach(mainArduinoDownloadsLink => {
    mainArduinoDownloadsLink.addEventListener('click', () => {

    });
});