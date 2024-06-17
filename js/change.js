// 切换主题
function change() {
    let html = document.querySelector('html')
    let currentTheme = html.getAttribute('data-theme');

    if (currentTheme === "light") {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'dark')
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('darkMode', 'light')
    }
}


// 在页面加载完成后读取localStorage并应用深色模式
document.addEventListener('DOMContentLoaded', (event) => {
    const darkModePref = localStorage.getItem('darkMode');
    let html = document.querySelector('html');
    html.setAttribute('data-theme', darkModePref);
});
