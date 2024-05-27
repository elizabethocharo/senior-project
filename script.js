const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const authentication = document.querySelector('.authentication');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    authentication.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });

    // check if there is data in the session storage and display user profile
    if (sessionStorage.getItem('user')) {
        const user = JSON.parse(sessionStorage.getItem('user'));
        // create the profile container and add it to the nav
        const nav = document.querySelector('nav');
        const profileContainer = document.createElement('div');
        profileContainer.classList.add('profile');

        const userIcon = document.createElement('span');
          userIcon.innerHTML = `<svg width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22.5" cy="22.5" r="22.5" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4444 10.7778C15.4444 8.71498 16.2405 6.73667 17.6574 5.27806C19.0744 3.81944 20.9961 3 23 3C25.0039 3 26.9256 3.81944 28.3426 5.27806C29.7595 6.73667 30.5556 8.71498 30.5556 10.7778C30.5556 12.8406 29.7595 14.8189 28.3426 16.2775C26.9256 17.7361 25.0039 18.5556 23 18.5556C20.9961 18.5556 19.0744 17.7361 17.6574 16.2775C16.2405 14.8189 15.4444 12.8406 15.4444 10.7778ZM15.4444 22.4444C12.9396 22.4444 10.5374 23.4687 8.76621 25.292C6.99504 27.1153 6 29.5882 6 32.1667C6 33.7138 6.59702 35.1975 7.65973 36.2915C8.72243 37.3854 10.1638 38 11.6667 38H34.3333C35.8362 38 37.2776 37.3854 38.3403 36.2915C39.403 35.1975 40 33.7138 40 32.1667C40 29.5882 39.005 27.1153 37.2338 25.292C35.4626 23.4687 33.0604 22.4444 30.5556 22.4444H15.4444Z" fill="#561919"/>
        </svg>`

        const userName = document.createElement('span');
        userName.textContent = user.name.split(' ')[0];;

        // for logout
        const logout =document.createElement('span')
        logout.classList.add('logout')
        logout.textContent="Logout"



        profileContainer.appendChild(userIcon);
        profileContainer.appendChild(userName);
        nav.appendChild(profileContainer);
        nav.appendChild(logout);

        const auths = document.querySelector('.auths');
        if (auths) {
            auths.remove();
        }

        // add logout functionality
        logout.addEventListener('click', function() {
            if(window.confirm("Are you sure you want to Logout?")){
                sessionStorage.removeItem('user');
                window.location.reload();
            }
        });

    }



});
