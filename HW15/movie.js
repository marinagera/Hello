function movieList(wrapper, movies) {
  console.log(wrapper, movies);
  const ul = document.createElement("ul");
  ul.classList.add("movies");

  for (let movie of movies) {
    console.log(movie);
    const li = document.createElement("li");
    li.classList.add("card");
    const img = document.createElement("img");
    img.classList.add("img");
    img.src = movie.preview.low;
    const h3 = document.createElement("h3");
    h3.classList.add("title");
    h3.textContent = movie.title;
    const p = document.createElement("p");
    p.classList.add("discrip");
    p.textContent = movie.description;
    const h4 = document.createElement("h4");
    h4.classList.add("subtitle");
    h4.textContent = movie.genre;
    const h5 = document.createElement("h5");
    h5.classList.add("rating");
    h5.textContent = movie.rating;

    li.append(img);
    li.append(h3);
    li.append(p);
    li.append(h4);
    li.append(h5);
    ul.append(li);
  }

  wrapper.append(ul);
}

export { movieList };
