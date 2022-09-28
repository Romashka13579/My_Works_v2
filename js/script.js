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

var myprojectsMenus = document.querySelectorAll('.myprojects-menu');
var javascriptTxt = document.querySelector('.javascript-txt');
var mainBlockBottomOverflow_array = document.querySelectorAll('.main-block-bottom-overflow');
var jsBtnLeft = document.querySelector('.js-btn-left');
var jsBtnRight = document.querySelector('.js-btn-right');
var myprojectsMenuTxt_2 = document.querySelectorAll('.myprojects-menu-txt');
var myprojectsMenus = document.querySelectorAll('.myprojects-menu');
var javascriptBtnBack = document.querySelector('.javascript-btn-back');
var mainBlockBottom_array = document.querySelectorAll('.main-block-bottom');

var jsblockclicked = 1;
var myprojectstxti = 2;

mainBlockBottomOverflow_array[myprojectstxti].style.display = "block";
mainBlockBottomOverflow_array[myprojectstxti].style.height = "0px";

// mainBlockBottom_array.forEach(mainBlockBottom => {
//     var mainBlockBottomstyle = mainBlockBottom.getBoundingClientRect();
//     mainBlockBottom.style.marginTop = ""+(-mainBlockBottomstyle.height)+"px";
// });

myprojectsMenus.forEach(myprojectsMenu => {
    myprojectsMenu.addEventListener('click', () => {
        mainBlockBottomOverflow_array[myprojectstxti].style.display = "none";
        for(var k = 0; k < myprojectsMenus.length; k++){
            if(myprojectsMenus[k] == myprojectsMenu){
                myprojectstxti = k;
            }
        }
        console.log(myprojectstxti);
        var dropdownTxt = document.querySelector('.dropdown-txt');
        var myprojectsMenuTxt = myprojectsMenu.querySelector('.myprojects-menu-txt');
        dropdownTxt.innerHTML = myprojectsMenuTxt.innerHTML;
        javascriptTxt.innerHTML = myprojectsMenuTxt.innerHTML;
        mainBlockBottomOverflow_array[myprojectstxti].style.display = "block";
    });
});

javascriptBtnBack.addEventListener('click', () => {
    // mainBlockBottom_array.forEach(mainBlockBottom => {
    //     mainBlockBottom.style.transition = "margin-top 2000ms";
    // });
    if (jsblockclicked == 1) {
        jsblockclicked = 0;
        javascriptBtnBack.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
        mainBlockBottomOverflow_array[myprojectstxti].style.display = "block";
        // var mainBlockBottom = mainBlockBottomOverflow_array[myprojectstxti].querySelector('.main-block-bottom');
        // var mainBlockBottomstyle = mainBlockBottom.getBoundingClientRect();
        // mainBlockBottomOverflow_array[myprojectstxti].style.height = "" + mainBlockBottomstyle.height + "px";
        // mainBlockBottom.style.marginTop = "0px";
    }
    else if (jsblockclicked == 0) {
        jsblockclicked = 1;
        javascriptBtnBack.style.transform = "matrix(-1.00,0.00,-0.00,-1.00,0,0)";
        mainBlockBottomOverflow_array[myprojectstxti].style.display = "none";
        // var mainBlockBottom = mainBlockBottomOverflow_array[myprojectstxti].querySelector('.main-block-bottom');
        // var mainBlockBottomstyle = mainBlockBottom.getBoundingClientRect();
        // mainBlockBottomOverflow_array[myprojectstxti].style.height = "0px";
        // mainBlockBottom.style.marginTop = "" + (-mainBlockBottomstyle.height) + "px";
    }
});

var jsBtnLeft = document.querySelector('.js-btn-left');
var jsBtnRight = document.querySelector('.js-btn-right');
var myprojectsMenuTxt_2 = document.querySelectorAll('.myprojects-menu-txt');
var myprojectsMenus = document.querySelectorAll('.myprojects-menu');

jsBtnRight.addEventListener('click', () => {
    mainBlockBottomOverflow_array[myprojectstxti].style.display = "none";
    // var mainBlockBottom = mainBlockBottomOverflow_array[myprojectstxti].querySelector('.main-block-bottom');
    // var mainBlockBottomstyle = mainBlockBottom.getBoundingClientRect();
    // mainBlockBottomOverflow_array[myprojectstxti].style.height = "0px";
    // mainBlockBottom.style.marginTop = "" + (-mainBlockBottomstyle.height) + "px";
    myprojectstxti++;
    if (myprojectstxti == myprojectsMenuTxt_2.length) {
        myprojectstxti = 0;
    }
    javascriptTxt.innerHTML = myprojectsMenuTxt_2[myprojectstxti].innerHTML;
    var dropdownTxt = document.querySelector('.dropdown-txt');
    dropdownTxt.innerHTML = myprojectsMenuTxt_2[myprojectstxti].innerHTML;
    mainBlockBottomOverflow_array[myprojectstxti].style.display = "block";
});

jsBtnLeft.addEventListener('click', () => {
    // var mainBlockBottom = mainBlockBottomOverflow_array[myprojectstxti].querySelector('.main-block-bottom');
    // var mainBlockBottomstyle = mainBlockBottom.getBoundingClientRect();
    // mainBlockBottomOverflow_array[myprojectstxti].style.height = "0px";
    mainBlockBottomOverflow_array[myprojectstxti].style.display = "none";
    myprojectstxti--;
    if (myprojectstxti == -1) {
        myprojectstxti = myprojectsMenuTxt_2.length - 1;
    }
    javascriptTxt.innerHTML = myprojectsMenuTxt_2[myprojectstxti].innerHTML;
    var dropdownTxt = document.querySelector('.dropdown-txt');
    dropdownTxt.innerHTML = myprojectsMenuTxt_2[myprojectstxti].innerHTML;
    mainBlockBottomOverflow_array[myprojectstxti].style.display = "block";
});