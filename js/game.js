document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-container');
    const guessForm = document.getElementById('guess-form');
    const feedback = document.getElementById('feedback');

    // Example quotes
    const quotes = [
        { text: "The only way to do great work is to love what you do.", group: "Inspiration" },
        { text: "The harder you work for something, the greater you’ll feel when you achieve it.", group: "Perseverance" },
        { text: "Success is not the key to happiness. Happiness is the key to success.", group: "Happiness" },
        { text: "Don't watch the clock; do what it does. Keep going.", group: "Perseverance" },
        { text: "Happiness is not something ready made. It comes from your own actions.", group: "Happiness" },
        { text: "Success usually comes to those who are too busy to be looking for it.", group: "Success" },
        { text: "The only limit to our realization of tomorrow is our doubts of today.", group: "Inspiration" },
        { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", group: "Perseverance" },
        { text: "The purpose of our lives is to be happy.", group: "Happiness" },
        { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", group: "Success" },
        // Add 100 more quotes here
        { text: "Believe you can and you're halfway there.", group: "Inspiration" },
        { text: "Act as if what you do makes a difference. It does.", group: "Inspiration" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", group: "Success" },
        { text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", group: "Inspiration" },
        { text: "You are never too old to set another goal or to dream a new dream.", group: "Inspiration" },
        { text: "To see what is right and not do it is a lack of courage.", group: "Wisdom" },
        { text: "Reading is to the mind, as exercise is to the body.", group: "Wisdom" },
        { text: "The mind is everything. What you think you become.", group: "Wisdom" },
        { text: "Quality is not an act, it is a habit.", group: "Wisdom" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", group: "Inspiration" },
        { text: "It does not matter how slowly you go as long as you do not stop.", group: "Perseverance" },
        { text: "All our dreams can come true, if we have the courage to pursue them.", group: "Inspiration" },
        { text: "Success is walking from failure to failure with no loss of enthusiasm.", group: "Success" },
        { text: "Do not be embarrassed by your failures, learn from them and start again.", group: "Success" },
        { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", group: "Inspiration" },
        { text: "The only way to achieve the impossible is to believe it is possible.", group: "Inspiration" },
        { text: "You are enough just as you are.", group: "Inspiration" },
        { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", group: "Inspiration" },
        { text: "Challenges are what make life interesting and overcoming them is what makes life meaningful.", group: "Inspiration" },
        { text: "I am not a product of my circumstances. I am a product of my decisions.", group: "Inspiration" },
        { text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", group: "Wisdom" },
        { text: "Life is what happens when you're busy making other plans.", group: "Wisdom" },
        { text: "You only live once, but if you do it right, once is enough.", group: "Wisdom" },
        { text: "In the end, it's not the years in your life that count. It's the life in your years.", group: "Wisdom" },
        { text: "Life is really simple, but we insist on making it complicated.", group: "Wisdom" },
        { text: "May you live all the days of your life.", group: "Wisdom" },
        { text: "Life itself is the most wonderful fairy tale.", group: "Wisdom" },
        { text: "Do not take life too seriously. You will never get out of it alive.", group: "Wisdom" },
        { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", group: "Inspiration" },
        { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", group: "Inspiration" },
        { text: "The only person you are destined to become is the person you decide to be.", group: "Inspiration" },
        { text: "Start where you are. Use what you have. Do what you can.", group: "Inspiration" },
        { text: "It is never too late to be what you might have been.", group: "Inspiration" },
        { text: "The best way to predict the future is to invent it.", group: "Inspiration" },
        { text: "I have not failed. I've just found 10,000 ways that won't work.", group: "Inspiration" },
        { text: "A person who never made a mistake never tried anything new.", group: "Inspiration" },
        { text: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", group: "Inspiration" },
        { text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", group: "Inspiration" },
        { text: "You can't use up creativity. The more you use, the more you have.", group: "Inspiration" },
        { text: "I want to be all used up when I die.", group: "Inspiration" },
        { text: "Dream big and dare to fail.", group: "Inspiration" },
        { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", group: "Inspiration" },
        { text: "Too many of us are not living our dreams because we are living our fears.", group: "Inspiration" },
        { text: "I have learned over the years that when one's mind is made up, this diminishes fear.", group: "Inspiration" },
        { text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.", group: "Inspiration" },
        { text: "The only limit to our realization of tomorrow will be our doubts of today.", group: "Inspiration" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", group: "Inspiration" },
        { text: "It does not matter how slowly you go as long as you do not stop.", group: "Perseverance" },
        { text: "Our greatest glory is not in never falling, but in rising every time we fall.", group: "Perseverance" },
        { text: "The only way of finding the limits of the possible is by going beyond them into the impossible.", group: "Perseverance" },
        { text: "The best revenge is massive success.", group: "Success" },
        { text: "Success is how high you bounce when you hit bottom.", group: "Success" },
        { text: "Success is getting what you want. Happiness is wanting what you get.", group: "Success" },
        { text: "Success is not in what you have, but who you are.", group: "Success" },
        { text: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", group: "Success" },
        { text: "Success is not how high you have climbed, but how you make a positive difference to the world.", group: "Success" }
    ];

    let currentQuoteIndex = 0;
    let points = 0;

    function displayQuote() {
        const quote = quotes[currentQuoteIndex];
        quoteContainer.querySelector('#quote').textContent = `\"${quote.text}\"`;
        feedback.textContent = '';
    }

    guessForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const guess = guessForm.guess.value.trim();
        if (guess.toLowerCase() === quotes[currentQuoteIndex].group.toLowerCase()) {
            points += 10000;
            feedback.textContent = 'Correct! ✅ You have ' + points + ' points.';
        } else {
            points -= 1000;
            feedback.textContent = 'Try again. ❌ You have ' + points + ' points.';
        }
        // Go to the next quote or end the game if finished
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        displayQuote();
    });

    displayQuote();
});