const quotesCollection = [
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever makes ablution and makes it well, will have his sins removed from his body, even from under his "fingernails" and "toenails".'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'There is no Muslim who makes ablution and makes it well and then stands and makes two Rak\'ah prayers directing himself with his face and heart to Allah except that Paradise will be due to him. (Muslim) '
    },
    
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever goes to the congregational Mosque, his one step erases a sin and his next step writes for him a good deed as he goes and returns (Ahmad).'
    },
     
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever prays for the sake of Allah for forty days in congregation reaching the first Takbeer of the prayer, he will be written to be free of two: from the Hellfire and from hyprocrisy.'
    },
    
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'The obligatory prayer is better than that performed individually for twenty-seven years.'
    },
    
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever prays ISHA\' in congregation, it is as if he stood for night prayer until half the night. And whoever prays FAJR in congregation, it is as if he prayed the entire night.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'The two supererogatory Rak\'ah before FAJR are better than this world and what is in it.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever prays morning obligatory prayer is in the protection of Allah.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever recites AAYAT-UL-KURSI (Verse of the Footsool[Q2:255]) after each of the obligatory prayers, nothing will prevent him from entering Paradise except death.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever gives condolences to an afflicted person will have a similar reward.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'There is not a believer who gives condolences to his brother for an affliction except that Allah will clothe him with the clothes of honor.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever builds a Mosque for Allah, even like a little nest, Allah will build for him a house in Paradise.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever fasts a day for the sake of Allah, Allah will move his face away from the hellfire the distance of seventy years.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever fasts thirty days of Ramadan and then follows it by six days of Shawwal, it is like fasting the entire year.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'There is no Muslim whose three children die, none reaching the time of sin (puberty), except that Allah will enter him into Paradise.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'You will not leave anything for the sake of Allah, Almighty and Majestic, except that Allah will give you something better.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'Whoever guarantees for me what is between his jawbones and what is between his legs, I will guarantee for him Paradise'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'I and the guardian of an orphan are like these two in Paradise: He then indicated with his index and middle fingers.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'None of you believes until he loves for his brother what he loves for himself.'
    },
    {
        name: 'Prophet Muhammad [Peace be upon Him]',
        quote: 'No two Muslims meet and shake hands except that they are forgiven before they separate.'
    },
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
const blockq = document.querySelector('blockquote');
const quoteBtn2 = document.querySelector('#quoteBtn2');

blockq.style.display = 'none';
quoteBtn2.style.display = 'none';
quoteBtn.addEventListener('click', displayHadith);

function displayQuote() {
    blockq.style.display = 'block';
    quoteBtn2.style.display = 'inline';

    quoteBtn.style.display = 'none';
    random = Math.floor(Math.random() * quotesCollection.length);
    quoteBtn2.innerHTML = `Hadith Number ${random + 1}`;
    quoteBtn2.classList.add('quoteBtn2');
    quoteAuthor.innerHTML= quotesCollection[random].name
    quote.innerHTML = quotesCollection[random].quote
}


function displayHadith() {
    displayQuote();
    setInterval(displayQuote, 7500);
}