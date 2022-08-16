import App from "./App";

const root = document.getElementById("root");

root.innerHTML = `<div>
<h1 class="text-center">Webpack Starter
${App({ name: "Rockstar Dev" })}
</div>`;
