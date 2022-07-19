const Header = (title, date, temp) => {

  const header = document.createElement("div");
  const date_span = document.createElement("span");
  const title_h1 = document.createElement("h1");
  const temp_span = document.createElement("span");


  date_span.textContent = date;
  title_h1.textContent = title;
  temp_span.textContent = temp;


  header.classList.add("header");
  date_span.classList.add("date");
  temp_span.classList.add("temp");

  header.appendChild(date_span);
  header.appendChild(title_h1);
  header.appendChild(temp_span);

  
  return header;

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}



const headerAppender = (selector) => {
  const headerParent = document.querySelector(selector);
  headerParent.appendChild(Header("title","date","temp"));

  return headerParent;


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}


export { Header, headerAppender }
