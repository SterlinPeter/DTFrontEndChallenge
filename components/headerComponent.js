
export const headerComponent = () => {

    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.innerHTML =
        `
            <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo">
            <div id="navbar">
                <a href="#"><img src="./static/img/home.svg"></a>
                <a href="#"><img src="./static/img/settings.svg"></a>
                <a href="#"><img src="./static/img/notifs.svg"></a>
                <a href="#"><img src="./static/img/user.svg"></a>
                <a href="#"><img src="./static/img/more.svg"></a>
            </div>
    `;
    return header;
};