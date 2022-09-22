var LinksBtn = document.querySelector('.links-profiles-btn');
var LinksProfiles = document.querySelectorAll('.link-profile');

var i = 0;
var LinkProfile_old;

LinksBtn.addEventListener('focus', () => {
    LinksProfiles = document.querySelectorAll('.link-profile');
    for(var i = 0; i <= LinksProfiles.length-1; i++){
        LinksProfiles[i].style.display = "block";
        LinkProfile_old = LinksProfiles[i];
        console.log(LinkProfile_old);
        setTimeout(() => {
            LinkProfile_old.style.opacity = 1;
            console.log("a");
        }, 10);
        console.log(LinkProfile_old);
    }
});