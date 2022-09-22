var LinksBtn = document.querySelector('.links-profiles-btn');
var LinksProfiles = document.querySelectorAll('.link-profile');

var i = 0;

LinksBtn.addEventListener('focus', () => {
    LinksProfiles = document.querySelectorAll('.link-profile');
    // var LinksProfiles_first = LinksProfiles[0];
    // LinksProfiles_first.style.display = "none"
    // LinksProfiles.forEach(LinkProfile => {
    //     LinkProfile.transitione
    // });
    for(var i = 0; i <= LinksProfiles.length-1; i++){
        LinksProfiles[i].style.display = "block";
        var LinkProfile_old = LinksProfiles[0];
        setTimeout(() => {
            LinksProfiles.forEach(LinkProfile => {
                LinkProfile.style.opacity = 1;
                LinkProfile.addEventListener('transitionend', () => {
                    console.log("b");
                    if((LinkProfile_old.style.opacity == 1) || (LinkProfile_old == LinkProfile)){
                        console.log("c");
                        LinkProfile_old = LinkProfile;
                    }
                });
            });
            // console.log("a");
            // LinksProfiles[i].style.opacity = "1";
            // LinksProfiles[i].addEventListener('transitionend', () => {
            //     console.log("b");
                // if(LinksProfiles[i].style.opacity == 1){
                //     console.log("c");
                // }
            // });
        }, 10);
    }
});