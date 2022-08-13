const createFooter = () => {
    let footer=document.querySelector("footer");

    footer.innerHTML = `
    <h3 class="footer-desc">This website has been made by Emir Asal for study purposes. 2022®</h3>
    <a class="footer-link" href="https://www.github.com/emirasal/Restaurant-Website">Click Here For the Source Code</a>
    `;
}

createFooter();