import axios from "axios";

const Card = (article) => {

  const mainDiv = document.createElement('div');
  mainDiv.classList.add("card");

  const headline = document.createElement('div');
  headline.classList.add("headline");
  headline.textContent = article.headline;
    

  const authorDiv = document.createElement('div');
  authorDiv.classList.add('author');
        

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
        

  const image = document.createElement('img');
  image.src = article.authorPhoto;


  const span = document.createElement('span');
  span.textContent = `By ${article.authorName}`;


  //adding the event listener
  mainDiv.addEventListener("click", ()=> {
    console.log(headline);
  });


  //hierarcy
  mainDiv.appendChild(headline);
  mainDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(image);
  authorDiv.appendChild(span);

        
  return mainDiv;
  
      
    
    
      

  // return mainDiv;


  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  const headerParent = document.querySelector(selector);

  axios.get(`http://localhost:5001/api/articles`)
  .then((res) => {
    res.data.articles.javascript.forEach((element)=> {
      headerParent.appendChild(Card(element));
    })
    res.data.articles.bootstrap.forEach((element)=> {
      headerParent.appendChild(Card(element));
    })
    res.data.articles.technology.forEach((element)=> {
      headerParent.appendChild(Card(element));
    })
    res.data.articles.jquery.forEach((element)=> {
      headerParent.appendChild(Card(element));
    })
    res.data.articles.node.forEach((element)=> {
      headerParent.appendChild(Card(element));
    })
  })

  return headerParent;

  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
