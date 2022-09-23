var LinksBtn = document.querySelector('.links-profiles-btn');
var LinksProfiles = document.querySelectorAll('.link-profile');
var LinkProfiles = document.querySelector('.profile-links');

LinksBtn.addEventListener('focus', () => {
    LinkProfiles.style.display = "flex";
    setTimeout(() => {
        LinksProfiles[LinksProfiles.length - 1].style.opacity = 1;
        var i = LinksProfiles.length - 2;
        link();
        function link(){
            if(i >= 0){
                LinksProfiles[i+1].addEventListener('transitionend', () => {
                    if(LinksProfiles[i+1].style.opacity == 1){
                        LinksProfiles[i].style.opacity = 1;
                        i--;
                        link();
                    }
                });
            }
        }
    }, 10);
});