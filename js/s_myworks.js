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

javascriptBtnBack.addEventListener('click', () => {
    mainBlockBottomOverflow_array.forEach(mainBlockBottomOverflow => {
        mainBlockBottomOverflow.style.transition = "height 2000ms";
    });
    if (jsblockclicked == 1) {
        jsblockclicked = 0;
        javascriptBtnBack.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
        var mainBlockBottom = mainBlockBottomOverflow_array[myprojectstxti].querySelector('.main-block-bottom');
        var mainBlockBottomstyle = mainBlockBottom.getBoundingClientRect();
        mainBlockBottomOverflow_array[myprojectstxti].style.height = "" + mainBlockBottomstyle.height + "px";
    }
    else if (jsblockclicked == 0) {
        jsblockclicked = 1;
        javascriptBtnBack.style.transform = "matrix(-1.00,0.00,-0.00,-1.00,0,0)";
        mainBlockBottomOverflow_array[myprojectstxti].style.height = "0px";
    }
});

myprojectsMenus.forEach(myprojectsMenu => {
    myprojectsMenu.addEventListener('click', () => {
        mainBlockBottomOverflow_array[myprojectstxti].style.display = "none";
        mainBlockBottomOverflow_array[myprojectstxti].style.height = "0px";
        for(var k = 0; k < myprojectsMenus.length; k++){
            if(myprojectsMenus[k] == myprojectsMenu){
                myprojectstxti = k;
            }
        }
        var dropdownTxt = document.querySelector('.dropdown-txt');
        var myprojectsMenuTxt = myprojectsMenu.querySelector('.myprojects-menu-txt');
        dropdownTxt.innerHTML = myprojectsMenuTxt.innerHTML;
        javascriptTxt.innerHTML = myprojectsMenuTxt.innerHTML;
        mainBlockBottomOverflow_array[myprojectstxti].style.display = "block";
        if (jsblockclicked == 0) {
            forBottomOverflow(mainBlockBottomOverflow_array, myprojectstxti);
        }
    });
});

jsBtnRight.addEventListener('click', () => {
    mainBlockBottomOverflow_array[myprojectstxti].style.display = "none";
    mainBlockBottomOverflow_array[myprojectstxti].style.height = "0px";
    myprojectstxti++;
    if (myprojectstxti == myprojectsMenuTxt_2.length) {
        myprojectstxti = 0;
    }
    javascriptTxt.innerHTML = myprojectsMenuTxt_2[myprojectstxti].innerHTML;
    var dropdownTxt = document.querySelector('.dropdown-txt');
    dropdownTxt.innerHTML = myprojectsMenuTxt_2[myprojectstxti].innerHTML;
    mainBlockBottomOverflow_array[myprojectstxti].style.display = "block";
    if (jsblockclicked == 0) {
        forBottomOverflow(mainBlockBottomOverflow_array, myprojectstxti);
    }
});

jsBtnLeft.addEventListener('click', () => {
    mainBlockBottomOverflow_array[myprojectstxti].style.display = "none";
    mainBlockBottomOverflow_array[myprojectstxti].style.height = "0px";
    myprojectstxti--;
    if (myprojectstxti == -1) {
        myprojectstxti = myprojectsMenuTxt_2.length - 1;
    }
    javascriptTxt.innerHTML = myprojectsMenuTxt_2[myprojectstxti].innerHTML;
    var dropdownTxt = document.querySelector('.dropdown-txt');
    dropdownTxt.innerHTML = myprojectsMenuTxt_2[myprojectstxti].innerHTML;
    mainBlockBottomOverflow_array[myprojectstxti].style.display = "block";
    if (jsblockclicked == 0) {
        forBottomOverflow(mainBlockBottomOverflow_array, myprojectstxti);
    }
});

function forBottomOverflow(array, k){
    var mainBlockBottom = array[k].querySelector('.main-block-bottom');
    var mainBlockBottomstyle = mainBlockBottom.getBoundingClientRect();
    array[k].style.transition = "0s";
    array[k].style.height = "" + mainBlockBottomstyle.height + "px";
}

var mainBlockBottomHtml = document.querySelector('.main-block-bottom-html');
var mainBlockBottomCard = mainBlockBottomHtml.querySelector('.main-block-bottom-card');
var HtmlNameArray = ['First+', 'Table', 'CV', 'Git'];
var HtmlBackArray = ['HTML_2.jpg', 'HTML_3.png', 'HTML_1.webp', 'HTML_5.jpg'];

for(var d = HtmlNameArray.length-1; d >=0; d--){
    var mainBlockBottomCard_clone = mainBlockBottomCard.cloneNode(true);
    mainBlockBottomCard.after(mainBlockBottomCard_clone);

    mainBlockBottomCard_clone.querySelector(".main-js-card-top-txt").innerHTML = HtmlNameArray[d];
    mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "HTML / Project "+(d+2)+"";
    mainBlockBottomCard_clone.querySelector(".main-js-card-2").style.background = "url(png/js_group/"+HtmlBackArray[d]+") center/cover";
    mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://romashka13579.github.io/Project_"+(d+2)+"/";
    mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://github.com/Romashka13579/Project_"+(d+2)+"";
}

var mainBlockBottomCss = document.querySelector('.main-block-bottom-css');
var mainBlockBottomCard = mainBlockBottomCss.querySelector('.main-block-bottom-card');
var CssNameArray = ['Flex Box', 'Font Awes.', 'Startup', 'Position', 'Forms', 'Pseudo class', 'Pseudo class', 'Drop menu', 'Drop menu 2', 'Device Adapt.', 'Ulkit', 'Figma' , 'Grid', 'My Works', 'HTML CSS'];
var CssBackArray = ['CSS_2.png', 'CSS_3.jpg', 'CSS_4.png', 'CSS_5.jpg', 'CSS_6.png', 'CSS_1.jpg', 'CSS_1.jpg', 'CSS_9.jpg', 'CSS_9.jpg', 'CSS_10.webp', 'CSS_11.jpeg', 'CSS_12.png', 'CSS_14.png', 'CSS_15.jpeg', 'CSS_16.png'];
var CssLinkArray = ['7', '8', '9', '10', '11', '12', '13', '14', '14.1', '15', '16', '18', '19'];

for(var d = CssNameArray.length-1; d >=0; d--){
    var mainBlockBottomCard_clone = mainBlockBottomCard.cloneNode(true);
    mainBlockBottomCard.after(mainBlockBottomCard_clone);

    mainBlockBottomCard_clone.querySelector(".main-js-card-top-txt").innerHTML = CssNameArray[d];
    if(d == (CssNameArray.length - 1)){
        mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "CSS / Project HTML-CSS";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://romashka13579.github.io/Project_HTML-CSS/";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://github.com/Romashka13579/Project_HTML-CSS";
    }
    else if(d == (CssNameArray.length - 2)){
        mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "CSS / Project My Works";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://romashka13579.github.io/My_Works/";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://github.com/Romashka13579/My_Works";
    }
    else if(CssLinkArray[d] == "18"){
        mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "CSS / Project My Works";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://github.com/Romashka13579/Project_18";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://www.figma.com/files/user/1069152158594079452?fuid=1069152158594079452";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").style.background = "url(png/figma.png) center/cover"
    }
    else{
        mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "CSS / Project "+(d+2)+"";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://romashka13579.github.io/Project_"+CssLinkArray[d]+"/";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://github.com/Romashka13579/Project_"+CssLinkArray[d]+"";
    }
    mainBlockBottomCard_clone.querySelector(".main-js-card-2").style.background = "url(png/js_group/"+CssBackArray[d]+") center/cover";
}

var mainBlockBottomJs = document.querySelector('.main-block-bottom-js');
var mainBlockBottomCard = mainBlockBottomJs.querySelector('.main-block-bottom-card');
var JsNameArray = ['Info / Date', 'Console Timer', 'Clock', 'Light', 'Range Input', 'Blank', 'Calcul', 'Slider', 'Statistic', 'Puncts', 'Card hover', 'Cards position', 'Mp3 player', 'Drop menu', 'Paint (copy)'];
var JsBackArray = ['JS_2.png', 'JS_3.webp', 'JS_4.webp', 'JS_5.webp', 'JS_2.png', 'JS_2.png', 'JS_8.jpg', 'JS_9.png', 'JS_10.png', 'JS_2.png', 'JS_11.png', 'JS_12.jfif', 'JS_2.png', 'JS_14.png', 'JS_15.webp'];
var JsLinkArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '10.1', '11', '12', '13', '14', '15'];

for(var d = JsNameArray.length-1; d >=0; d--){
    var mainBlockBottomCard_clone = mainBlockBottomCard.cloneNode(true);
    mainBlockBottomCard.after(mainBlockBottomCard_clone);

    mainBlockBottomCard_clone.querySelector(".main-js-card-top-txt").innerHTML = JsNameArray[d];
    mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "Java Script / Project "+(JsLinkArray[d])+"";
    mainBlockBottomCard_clone.querySelector(".main-js-card-2").style.background = "url(png/js_group/"+JsBackArray[d]+") center/cover";
    mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://romashka13579.github.io/JavaScript_"+JsLinkArray[d]+"/";
    mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://github.com/Romashka13579/JavaScript_"+JsLinkArray[d]+"";
}

var mainBlockBottomCplus = document.querySelector('.main-block-bottom-cplus');
var mainBlockBottomCard = mainBlockBottomCplus.querySelector('.main-block-bottom-card');
var CplusNameArray = ['Tin Ker Cad', 'Matrix Max', 'Seven Segm.', 'Arduino Proj.', 'Arduino Other', 'Qt 1 Creator', 'Qt 2 Creator', 'Qt 3 Creator', 'Qt 4 Creator', 'Qt 5 Creator', 'Qt 6 Creator', 'Qt Calculator'];
var CplusBackArray = ['CPLUS_TINKERCAD.png', 'CPLUS_2.jfif', 'CPLUS_3.png', 'CPLUS_4', 'CPLUS_5.png!d', 'CPLUS_6.png', 'CPLUS_6.png', 'CPLUS_6.png', 'CPLUS_6.png', 'CPLUS_6.png', 'CPLUS_6.png', 'CPLUS_7'];
var CplusLinkArray = ['Arduino_MatrixMax', 'Arduino_MatrixMax', 'Arduino_Seven-segment-indicator', 'Arduino_Project', 'Arduino_Other', 'QtCreator_1', 'QtCreator_2', 'QtCreator_3', 'QtCreator_4', 'QtCreator_5', 'QtCreator_6', 'QtCreator_Calculator'];

for(var d = CplusNameArray.length-1; d >=0; d--){
    var mainBlockBottomCard_clone = mainBlockBottomCard.cloneNode(true);
    mainBlockBottomCard.after(mainBlockBottomCard_clone);

    mainBlockBottomCard_clone.querySelector(".main-js-card-top-txt").innerHTML = CplusNameArray[d];
    if(d == 0){
        mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "C++ / TinKerCad";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://www.tinkercad.com/users/h70OFn5l97m";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://www.tinkercad.com/users/h70OFn5l97m";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").style.background = "url(png/tinkercad.png) center/cover";
    }
    else if(d >= 5){
        mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "C++ / Qt Creator / Project "+(d-4)+"";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://github.com/Romashka13579/"+CplusLinkArray[d]+"";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://github.com/Romashka13579/"+CplusLinkArray[d]+"";
    }
    else{
        mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "C++ / Arduino / Project "+(d)+"";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://github.com/Romashka13579/"+CplusLinkArray[d]+"";
        mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://github.com/Romashka13579/"+CplusLinkArray[d]+"";
    }
    mainBlockBottomCard_clone.querySelector(".main-js-card-2").style.background = "url(png/js_group/"+CplusBackArray[d]+") center/cover";
}
mainBlockBottomCard.querySelector(".main-js-card-bottom-jsicon").style.background = "url(png/eolymp.png) center/cover";

var mainBlockBottomCsharp = document.querySelector('.main-block-bottom-csharp');
var mainBlockBottomCard = mainBlockBottomCsharp.querySelector('.main-block-bottom-card');
var CsharpNameArray = ['Menu Test', 'Team Game'];
var CsharpBackArray = ['CSHARP_2.png', 'CSHARP_3.jpg'];
var CsharpLinkArray = ['Romashka13579/2D_Menu_Test', 'Renie56/Game'];

for(var d = CsharpNameArray.length-1; d >=0; d--){
    var mainBlockBottomCard_clone = mainBlockBottomCard.cloneNode(true);
    mainBlockBottomCard.after(mainBlockBottomCard_clone);

    mainBlockBottomCard_clone.querySelector(".main-js-card-top-txt").innerHTML = CsharpNameArray[d];
    mainBlockBottomCard_clone.querySelector(".main-js-card-center-txt").innerHTML = "C# / Unity / Project "+(d+1)+"";
    mainBlockBottomCard_clone.querySelector(".main-js-card-2").style.background = "url(png/js_group/"+CsharpBackArray[d]+") center/cover";
    mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-txt-block").href = "https://github.com/"+CsharpLinkArray[d]+"";
    mainBlockBottomCard_clone.querySelector(".main-js-card-bottom-jsicon").href = "https://github.com/"+CsharpLinkArray[d]+"";
}