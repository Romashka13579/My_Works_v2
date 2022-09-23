var LinksBtn = document.querySelector('.links-profiles-btn');
var LinksProfiles = document.querySelectorAll('.link-profile');
var ProfileLinks = document.querySelector('.profile-links');

var clicked = 1;
var i = LinksProfiles.length - 1;

LinksBtn.addEventListener('click', () => {
    if(clicked == 1){
        clicked = 0;
        ProfileLinks.style.display = "flex";
        setTimeout(() => {
            Links(LinksProfiles, i, 1);
        }, 10);
    }
    else if(clicked == 0){
        clicked = 1;
        setTimeout(() => {
            Links(LinksProfiles, i, 0);
        }, 10);
    }
});

LinksProfiles.forEach(LinkProfile => {
    LinkProfile.addEventListener('transitionend', () => {
        if(LinkProfile.style.opacity == 1){
            i--;
            if(i>=0){
                Links(LinksProfiles, i, 1);
            }
            else{
                i++;
            }
        }
        if(LinkProfile.style.opacity == 0){
            i++;
            if(i < LinksProfiles.length){
                Links(LinksProfiles, i, 0);
            }
            else{
                i--;
                ProfileLinks.style.display = "none";
            }
        }
    });
});

function Links(LinksProfiles, i, a){
    if(a == 1){
        LinksProfiles[i].style.opacity = 1;
    }
    else if(a == 0){
        LinksProfiles[i].style.opacity = 0;
    }
}

var headerBotBtn = document.querySelector('.rectangles');
var faArrowUp = document.querySelector('.fa-arrow-up');
var headerBottomOverflow = document.querySelector('.header-bottom-overflow');
var headerBottom = document.querySelector('.header-bottom');

var headerclicked = 1;

headerBotBtn.addEventListener('click', () => {
    if(headerclicked == 1){
        headerclicked = 0;
        faArrowUp.style.transform = "matrix(-1.00,0.00,-0.00,-1.00,0,0)";
        headerBottomOverflow.style.display = "block";
        setTimeout(() => {
            headerBottomOverflow.style.height = "80px";
            headerBottom.style.top = "0px";
        }, 10);
    }
    else if(headerclicked == 0){
        headerclicked = 1;
        faArrowUp.style.transform = "matrix(1.00,0.00,0.00,1.00,0,0)";
        headerBottom.style.top = "-80px";
        headerBottomOverflow.style.height = "0px";
        setTimeout(() => {
            Links(LinksProfiles, i, 0);
        }, 10);
    }
});