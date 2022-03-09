import './index.less'
import data from './components/article/article.js'
import menuItems from './components/menu/menu.js'

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

const articles = document.querySelector(".articles");

function articleMaker(articleObject) {
  const article = document.createElement("div");
  const title = document.createElement("h2");
  const date = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const plusButton = document.createElement("span")

  // Setting structure to elements
  article.appendChild(title);
  article.appendChild(date);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(plusButton);



  //Setting text content
  title.textContent = articleObject.title;
  date.textContent = articleObject.date;
  p1.textContent = articleObject.firstParagraph;
  p2.textContent = articleObject.secondParagraph;
  p3.textContent = articleObject.thirdParagraph;
  plusButton.textContent = "+";

  // Adding classnames to my elements
  article.classList.add("article");
  date.classList.add("date");
  plusButton.classList.add("expandButton");

  // Step 2: Still inside `articleMaker`, add an event listener to 
  // the span.expandButton. This listener should toggle the class 
  // 'article-open' on div.article.
  plusButton.addEventListener("click", () => {
    article.classList.toggle("article-open")
  })

  // return the article
  return article; 
}

// Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
//   to create a div.article element and append it to the DOM inside div.articles (see index.html).

data.forEach(item => {
  const article = articleMaker(item);
  articles.appendChild(article);
})

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/