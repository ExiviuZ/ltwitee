const form = document.querySelector('#form')
const tweetplace = document.querySelector('#tweetplace')

const randomTweets = [
    '<b>@Osep101</b> - "I Love Bernadette so Much"',
    '<b>@WilsonRevillame</b> - "Paisa daw ako!"',
    '<b>@Lust69</b> - "Kike!"',
    '<b>@NagisaWalangShiota.</b> - "mic drop"',
    '<b>@Capricorn</b> - "I love big bazooka"',
    '<b>@MagicSHop</b> - "sakin ka na lang faye"',
    '<b>@Incept</b> - "San Pedro tagal magturo"',
    '<b>@Pepito</b> - "Alfred Kalbo!"',
    '<b>@ketatanga11</b> - "tanginaniyo!"',
    '<b>@ketatanga15</b> - "Bobo amputa?"',
    '<b>@ketatanga69</b> - "ginagawa mo pre??"',
    '<b>@Asura</b> - "Online na ko Tol!"',
    '<b>@ketatanga59</b> - "hermosapien!"',
    '<b>@ketatanga23</b> - "kikeng gala!"',
    '<b>@ketatanga09</b> - "titeng gala!"',
];

for (let i = 0; i <= 2; i++) {
    const random = Math.floor(Math.random() * randomTweets.length);
    const recentTweets = document.createElement('li');
    tweetplace.appendChild(recentTweets)
    recentTweets.innerHTML = randomTweets[random];
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = form.elements.username;
    const tweetInput = form.elements.tweet;

    newpost(usernameInput.value, tweetInput.value)

    usernameInput.value = ''
    tweetInput.value = ''

    usernameInput.focus()

})

const newpost = function (username, tweet) {

    const namehere = document.createElement('b')
    const tweethere = document.createElement('span')
    const wholetweet = document.createElement('li')
    const button = document.createElement('button')
    const br = document.createElement('br')

    namehere.append(username);
    tweethere.append(tweet);
    button.append('Remove')

    wholetweet.append(namehere, ` - "`, tweethere, `"`, br, button)

    tweetplace.appendChild(wholetweet);

};

tweetplace.addEventListener('click', function (e) {
    if (e.target.nodeName === "BUTTON") {
        e.target.parentElement.remove()
    }
})
