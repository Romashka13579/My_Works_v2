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
        console.log(i);
        LinksProfiles[i].style.opacity = 1;
    }
    else if(a == 0){
        console.log(i);
        LinksProfiles[i].style.opacity = 0;
    }
}