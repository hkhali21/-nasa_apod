let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

fetch (url)
  .then ( (response) => {
    return response.json();
  })
  .then ( (json) => {
     console.log(json.date);
      let h = document.createElement("h1");
      h.innerText = json.title;

      let p1 = document.createElement("p")
      p1.innerText = json.date;

      let image = document.createElement("p")

      const img = document.createElement("img");
      img.src = "https://apod.nasa.gov/apod/image/2203/AirglowRings_Wang_1080.jpg";
  
      let p = document.createElement("p")
      p.innerText = json.explanation;
    
      document.body.append(h);
      document.body.append(p1);
      document.body.append(img);
      document.body.append(p);

  })

