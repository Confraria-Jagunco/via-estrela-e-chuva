const linkHomeHeader = document.getElementById("toHomeHeader");
const linkHomeFooter = document.getElementById("toHomeFooter");

function toHome () {
    window.open("https://confraria-jagunco.github.io/a-sensacao-de-conforto-ou-nao-causada-pela-retrospectiva-spotify/");
};

linkHomeHeader.addEventListener("click", toHome);
linkHomeFooter.addEventListener("click", toHome);