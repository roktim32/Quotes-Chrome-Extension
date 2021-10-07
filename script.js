// fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
fetch('https://favqs.com/api/qotd')
    .then(data => data.json())
    .then(quotesData => {
        const quotesText = quotesData.quote.body;
        const quotesElement = document.getElementById('quotesElement');

        quotesElement.innerHTML = quotesText;
    })