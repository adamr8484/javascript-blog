'use strict';
/* document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });  */


const titleClickHandler = function(event){
    console.log('Link was clicked!');
    console.log('Events:', event)
    event.preventDefault();
  
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
    }
    
    /* [IN PROGRESS] add class 'active' to the clicked link */
    const clickedElement = this;
    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);
    
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
    }
  
    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector:', articleSelector);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    
    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
}
  
const links = document.querySelectorAll('.titles a');
  
for(let link of links){
    link.addEventListener('click', titleClickHandler);
}

{   
    const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

    function generateTitleLinks(){

    /* remove contents of titleList */
        function clearMessages(){
        document.querySelector(optTitleListSelector).innerHTML = 'titleList';
        }
    /* for each article - cos zle na pewno tutaj*/
        const articles = document.querySelectorAll(optArticleSelector);

        for(article of articles){
        article.clearMessages;
        }

        /* get the article id */
        const articleId = clickedElement.getAttribute('id');

        /* find the title element */
        const articleTitle = article.querySelector(optTitleSelector).innerHTML;    
        /* get the title from the title element */

        /* create HTML of the link */
        const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
        /* insert link into titleList */

    }

    generateTitleLinks();
}