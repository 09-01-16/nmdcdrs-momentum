const quotes = [
    {
        quote: 'Talk is cheap. Show me the code.',
        author: 'Linus Torvalds',
    },
    {
        quote: 'Learning to code is useful no matter what your career ambitions are.',
        author: 'Arianna Huffington',
    },
    {
        quote: 'The best error message is the one that never shows up.',
        author: 'Thomas Fuchs',
    },
    {
        quote: 'Don’t write code that just works. Write code that is beautiful.',
        author: 'Ward Cunningham',
    },
    {
        quote: 'The most disastrous thing that you can ever learn is your first programming language.',
        author: 'Alan Kay',
    },
    {
        quote: 'Code is like humor. When you have to explain it, it’s bad.',
        author: 'Cory House',
    },
    {
        quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        author: 'Martin Fowler',
    },
    {
        quote: 'It’s not at all important to get it right the first time. It’s vitally important to get it right the last time.',
        author: 'Andrew Hunt and David Thomas',
    },
    {
        quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
        author: 'Harold Abelson',
    },
    {
        quote: 'Coding is not just code, that is a live thing to serve everyone!',
        author: 'Ming Qian',
    },
    {
        quote: 'The computer is incredibly fast, accurate, and stupid. Man is unbelievably slow, inaccurate, and brilliant. The marriage of the two is a force beyond calculation.',
        author: 'Leo Cherne',
    },
    {
        quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
        author: 'Anonymous',
    },
    {
        quote: 'First, solve the problem. Then, write the code.',
        author: 'John Johnson',
    },
    {
        quote: 'Programmers are not just technicians, but problem solvers and creators of new things.',
        author: 'Mikhail Kalashnikov',
    },
    {
        quote: 'The code you write makes you a programmer. The code you delete makes you a good one.',
        author: 'Mario Fusco',
    },
    {
        quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
        author: 'Patrick McKenzie',
    },
    {
        quote: 'Software is a great combination of artistry and engineering.',
        author: 'Bill Gates',
    },
    {
        quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
        author: 'Hal Abelson',
    },
    {
        quote: 'Code never lies, comments sometimes do.',
        author: 'Ron Jeffries',
    },
    {
        quote: 'Good code is its own best documentation.',
        author: 'Steve McConnell',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = '"' + randomQuote.quote + '"';
author.innerHTML = '- ' + randomQuote.author;
