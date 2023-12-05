//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const articles = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

    // Sort the articles while ignoring "a," "an," and "the"
    const sortedArticles = articles.sort((a, b) => {
        const wordsToIgnore = ["a", "an", "the"];
        const getTitle = article => article.toLowerCase().replace(/^(a|an|the)\s+/i, '');
        return getTitle(a).localeCompare(getTitle(b));
    });

    // Display sorted articles in the webpage
    const articlesList = document.getElementById('articles');
    sortedArticles.forEach(article => {
        const listItem = document.createElement('li');
		
        listItem.textContent = article;
        articlesList.appendChild(listItem);
    });
});
