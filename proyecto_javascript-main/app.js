function getCharacteres(done) {

    const results= fetch("https://rickandmortyapi.com/api/character");

    results
     .then(response => response.json())
     .then(data => {
        done(data)
     });
}

getCharacteres(data => {

  data.results.forEach(personaje => {
    
    const article = document.createRange().createContextualFragment(/*THML*/`
      <article>

       <div class="image-container">
         <img src="${personaje.image}" alt="personaje">

       </div>

         <h2>${personaje.name}</h2>
         <span>${personaje.status}</span>

      </article>
        
        `)
        const main =document.querySelector("main");

        main.append(article);
  });
});