const url = "google.com";

async function getData() {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data.count);
    data.results.forEach((pokemon) => {
      let h3 = document.createElement("h3");
      h3.textContent = pokemon.name;
      document.body.appendChild(h3);
    });
  } catch (error) {
    console.log(error);
  }
}

getData();
