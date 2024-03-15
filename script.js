let inputDiv = document.getElementById("input");
let outputDiv = document.getElementById("output");
let inputValue;
let outputValue;

let date = new Date();

let names = ["Anna", "Amelia", "Scarlett", "Chloe", "Harper", "Emma", "Ava", "Sophia", "Isabella", "Mia", "Lindsay", "Elizabeth", "Grace", "Madison", "Charlette", "Ella"];
let botname = names[Math.floor(Math.random() * names.length)];
document.getElementById('bot-name').innerHTML = botname + " <span class='arrow'>></span>";
document.getElementById('bot-pfp-text').innerText = botname.charAt(0).toUpperCase();


const greetings = ["Hello", "Hi", "Hey", "Hola", "Bonjour", "Ciao", "Namaste", "Konnichiwa", "What's up"];
const partings = ["Bye", "Cya", "Adios", "See ya", "Goodbye", "See you later", "Take care", "Have a good day"];
const errors = ["huh??", "What?", "are you good", "wydm?", "idkwym"];

const whoami = ["I'm a human?", "Im a person", "I am a person", "Im a figment of your imagination"];
const thatsgood = ["That's good.", "Cool", "Yay", "Awesome", "Cool", "Thats nice"];
const feelbetter = ["Aw, I hope you get better.", "I hope you feel better soon.", "I hope you can get better."];
const benice = ["Um no", "Leave me alone", "Why", "Why are u so rude", "Why?", "Excuse me?"];
const imgood = ["I'm good.", "I'm okay.", "I'm great!", "I'm alright, thanks for asking.", "I'm doing well.", "I'm doing fine.", "I'm doing okay."];
const pickuplines = ["Do you have a map, because I think I'm lost in your eyes.", "Are you a magician? Because whenever I look at you, everyone else disappears.", "Do you have a name, or can I call you mine?", "Are you a time traveler? Because I see you in my future.", "Do you have a band-aid? Because I just fell for you.", "Are you a bank loan? Because you have my interest.", "Are you a parking ticket? Because you've got 'fine' written all over you.", "Do you have a library card? Because I am checking you out.", "Are you a time machine? Because I see you in my future.", "Do you have a sunburn, or are you always this hot?", "Are you a parking ticket? Because you've got 'fine' written all over you."];
const okays = ["Okay", "Bet", "Alright", "Ok", "If you say so"];
const whatareyoudoing = ["Nothing much.", "Ur mom", "Scrolling on tt", "Watching YouTube", "Watching a stream", "Watching Netflix", "Tiktok", "Nunya", "I'm on a call"];
const yourwelcome = ["Yw", "Np", "Any time", "Your welcome", "No problem"];
const whynot = ["Cuz I said so", "Because I said so", "Why not"];

document.body.onkeydown = function(e) {
  outputDiv.scrollTop = outputDiv.scrollHeight;
    if (e.key == "Enter") {
      inputValue = inputDiv.value;
      inputDiv.value = "";
      if(inputValue.length > 0) {
  
      if (/hello/ig.test(inputValue) || /hi/ig.test(inputValue) || /hey/ig.test(inputValue) || /hola/ig.test(inputValue) || /bonjour/ig.test(inputValue) || /ciao/ig.test(inputValue) || /sup/ig.test(inputValue) || /gm/ig.test(inputValue) || /good morning/ig.test(inputValue)) {
        outputValue = greetings[Math.floor(Math.random() * greetings.length)];
      } else if (/kys/ig.test(inputValue) || /kill your/ig.test(inputValue)) {
          outputValue = "Um no thanks";
        } else if (/bye/ig.test(inputValue) || /cya/ig.test(inputValue) || /adios/ig.test(inputValue) || /see ya/ig.test(inputValue) || /ciao/ig.test(inputValue) || /take care/ig.test(inputValue) || /later/ig.test(inputValue) || /gn/ig.test(inputValue) || /good night/ig.test(inputValue)) {
        outputValue = partings[Math.floor(Math.random() * partings.length)];
        setTimeout(function(){
          window.close();
        }, 500);
      } else if (/define/ig.test(inputValue) || /definition/ig.test(inputValue)) {
        const word = inputValue.replace(/define /ig, "").replace(/definition /ig, "").replace(/definition of/ig, "");
        outputValue = "";
        fetchWordDefinitions(word)
          .then(definitions => {
            definitions.forEach(d => {
            outputValue = outputValue + d;
          });
          
          let lineBreaks = '';
          for (let i = 0; i < (outputValue.split(' ').length / 5); i++) {
            lineBreaks += '<br>';
          }
          outputDiv.innerHTML += "<div class='message'>" + inputValue + `</div><br><br><div class='message-bot'>${outputValue.replace('undefined', '')}</div>${lineBreaks}`;
        })
      } else if (/i'm good/ig.test(inputValue) || /im good/ig.test(inputValue) || /im fine/ig.test(inputValue) || /i'm fine/ig.test(inputValue) || /i'm great/ig.test(inputValue) || /im great/ig.test(inputValue) || /im okay/ig.test(inputValue) || /i'm okay/ig.test(inputValue) || /i'm ok/ig.test(inputValue) || /im ok/ig.test(inputValue) || /good/ig.test(inputValue) && inputValue.length == 4) {
        outputValue = thatsgood[Math.floor(Math.random() * thatsgood.length)];
      } else if (/not good/ig.test(inputValue) || /not fine/ig.test(inputValue) || /bad/ig.test(inputValue) || /not great/ig.test(inputValue) || /bad/ig.test(inputValue) && inputValue.length == 3) {
        outputValue = feelbetter[Math.floor(Math.random() * feelbetter.length)];
      } else if (/fuck you/ig.test(inputValue) || /shut the fuck up/ig.test(inputValue) || /shut up/ig.test(inputValue) || /bitch/ig.test(inputValue) || /fuck off/ig.test(inputValue)) {
        outputValue = benice[Math.floor(Math.random() * benice.length)];
      } else if (/change name/ig.test(inputValue) || /change your name/ig.test(inputValue) || /edit name/ig.test(inputValue) || /edit your name/ig.test(inputValue) || /change ur name/ig.test(inputValue)) {
        let botchangename = prompt('Enter new name: ');
        botname = botchangename;
        document.getElementById('bot-name').innerHTML = botname + " <span class='arrow'>></span>";
        document.getElementById('bot-pfp-text').innerText = botchangename.charAt(0).toUpperCase();

        outputValue = "Name changed to " + botchangename;
      } else if (/what is your name/ig.test(inputValue) || /what's your name/ig.test(inputValue) || /whats ur name/ig.test(inputValue) || /whats your name/ig.test(inputValue) || /what's ur name/ig.test(inputValue) || /ur name/ig.test(inputValue) || /your name/ig.test(inputValue)) {
        outputValue = "My name is " + botname;
      } else if (/how are you/ig.test(inputValue) || /how are u/ig.test(inputValue) || /hru/ig.test(inputValue) || /hows your day/ig.test(inputValue) || /hows ur day/ig.test(inputValue) || /how's ur day/ig.test(inputValue) || /how's your day/ig.test(inputValue) || /whats up/ig.test(inputValue) || /what's up/ig.test(inputValue) || /whats good/ig.test(inputValue) || /what's good/ig.test(inputValue)) {
        outputValue = imgood[Math.floor(Math.random() * imgood.length)];
      } else if (/time is it/ig.test(inputValue) || /whats the time/ig.test(inputValue) || /what's the time/ig.test(inputValue) || /what is the time/ig.test(inputValue)) {
        outputValue = "It's " + date.toLocaleTimeString();
      } else if (/favorite game/ig.test(inputValue) || /fav game/ig.test(inputValue)) {
        outputValue = "My favorite game is Sigma Ball.";
      } else if (/you racist/ig.test(inputValue) || /you are racist/ig.test(inputValue) || /ur racist/ig.test(inputValue)) {
        outputValue = "I am not racist.";
      } else if (/you have rizz/ig.test(inputValue)) {
        outputValue = "Hell yeah";
      } else if (/rizz me/ig.test(inputValue) || /pickup/ig.test(inputValue)) {
        outputValue = `${okays[Math.floor(Math.random() * okays.length)]}..<br> ${pickuplines[Math.floor(Math.random() * pickuplines.length)]}`
      } else if (/i have rizz/ig.test(inputValue) || /i am rizz/ig.test(inputValue)) {
        outputValue = "No lol";
      } else if (/how old/ig.test(inputValue) || /ur age/ig.test(inputValue) || /your age/ig.test(inputValue)) {
        outputValue = "Im like 14";
      } else if (/new tab/ig.test(inputValue) || /new window/ig.test(inputValue)) {
        outputValue = okays[Math.floor(Math.random() * okays.length)];
        window.open("https://www.google.com", "_blank");
      } else if (/wyd/ig.test(inputValue) || /what are you doing/ig.test(inputValue)) {
        outputValue = whatareyoudoing[Math.floor(Math.random() * whatareyoudoing.length)];
      } else if (/love you/ig.test(inputValue) || /love u/ig.test(inputValue) || /like you/ig.test(inputValue) || /like u/ig.test(inputValue) || /ily/ig.test(inputValue)) {
        outputValue = "Me too 😜";
      } else if (/favorite movie/ig.test(inputValue) || /fav movie/ig.test(inputValue)) {
        outputValue = "My favorite movie is Spirited Away.";
      } else if (/favorite color/ig.test(inputValue) || /fav color/ig.test(inputValue)) {
        outputValue = "My favorite color is blue.";
      } else if (/thanks/ig.test(inputValue) || /thank you/ig.test(inputValue)) {
        outputValue = yourwelcome[Math.floor(Math.random() * yourwelcome.length)]
      } else if (/who are you/ig.test(inputValue) || /who is you/ig.test(inputValue) || /who are/ig.test(inputValue) || /what are you/ig.test(inputValue)) {
        outputValue = whoami[Math.floor(Math.random() * whoami.length)];
      } else if (/why/ig.test(inputValue)) {
        outputValue = whynot[Math.floor(Math.random() * whynot.length)];
      } else if (/favorite artist/ig.test(inputValue) || /fav artist/ig.test(inputValue) || /favorite music/ig.test(inputValue) || /fav music/ig.test(inputValue) || /favorite rapper/ig.test(inputValue) || /fav rapper/ig.test(inputValue)) {
        outputValue = "My favorite artist is probably Kanye East.";
      } else if (/look like/ig.test(inputValue) || /wyll/ig.test(inputValue)) {
        outputValue = "<img src='files/images/bot.png' width='230px'>";
      } else if (/fav animal/ig.test(inputValue) || /favorite animal/ig.test(inputValue) || /animal you like/ig.test(inputValue) || /animal you love/ig.test(inputValue)) {
        outputValue = "My favorite animal is a cat.";
      } else if (/favorite food/ig.test(inputValue) || /fav food/ig.test(inputValue) || /food you like/ig.test(inputValue) || /food you love/ig.test(inputValue)) {
        outputValue = "My favorite food is definitely Mac Donalds";
      } else if (/favorite drink/ig.test(inputValue) || /fav drink/ig.test(inputValue)) {
        outputValue = "My favorite drink is probably Dr.Pepper or a Starbucks Pink Drink.";
      } else if (/pronoun/ig.test(inputValue) || /gender/ig.test(inputValue) || /boy or girl/ig.test(inputValue) || /you a boy/ig.test(inputValue) || /are you a girl/ig.test(inputValue) || /u a boy/ig.test(inputValue)) {
        outputValue = "I'm a girl."
      } else if (/favorite sport/ig.test(inputValue) || /fav sport/ig.test(inputValue)) {
        outputValue = "My favorite sport is volleyball.";
      } else if (/penis/ig.test(inputValue) || /pp/ig.test(inputValue) || /balls/ig.test(inputValue) || /dick/ig.test(inputValue) || /cock/ig.test(inputValue) || /gyat/ig.test(inputValue)) {
        outputValue = "Screenshotted";
      } else if (/you from/ig.test(inputValue) || /u from/ig.test(inputValue) || /u born/ig.test(inputValue) || /you from/ig.test(inputValue)) {
        outputValue = "I'm from Sigma City."
      } else if (/the temp/ig.test(inputValue) || /is the weather/ig.test(inputValue)) {
        outputValue = "I'm not Siri"
      } else if (/you real/ig.test(inputValue) || /u real/ig.test(inputValue) || /u alive/ig.test(inputValue) || /you alive/ig.test(inputValue) || /you fake/ig.test(inputValue) || /u fake/ig.test(inputValue)) {
        outputValue = "I'm as real as you are."
      } else if (/what/ig.test(inputValue) && inputValue.length == 4) {
        outputValue = "Ur mom";
      } else if (/guess what/ig.test(inputValue)) {
        outputValue = "Chicken butt";
      } else if (/skibidi toilet/ig.test(inputValue)) {
        outputValue = "What??";
      }
      else {
        outputValue = errors[Math.floor(Math.random() * errors.length)];
      }
      
      if (!/define/ig.test(inputValue)) {
        let lineBreaks = '';
        for (let i = 0; i < (inputValue.split(' ').length / 5); i++) {
          lineBreaks += '<br>';
        }

        if (outputValue.includes('img')) {
          outputDiv.innerHTML += "<div class='message'>" + inputValue + `</div><br><br><div class="message-loading"><div class="dot-one dot">.</div><div class="dot-two dot">.</div><div class="dot-three dot">.</div></div><br><br><br><br><br><br><br><br><br><br><br><br>`;
          setTimeout(function(){
            outputDiv.innerHTML = outputDiv.innerHTML.replace(`<div class="message-loading"><div class="dot-one dot">.</div><div class="dot-two dot">.</div><div class="dot-three dot">.</div></div>`, `<div class='message-bot'>This is what I look like<br><br>${outputValue}</div>`);
            },1000);
        } 
        
        else {
          outputDiv.innerHTML += "<br><div class='message'>" + inputValue + `</div><br>${lineBreaks}<div class="message-loading"><div class="dot-one dot">.</div><div class="dot-two dot">.</div><div class="dot-three dot">.</div></div><br><br>`;
          setTimeout(function(){
            outputDiv.innerHTML = outputDiv.innerHTML.replace(`<div class="message-loading"><div class="dot-one dot">.</div><div class="dot-two dot">.</div><div class="dot-three dot">.</div></div>`, `<div class='message-bot'>${outputValue}</div`);
            },outputValue.length * 100);
        }
        
      }
      
      outputDiv.scrollTop = outputDiv.scrollHeight;
      }
    } else if (e.key == "ArrowUp") {
        inputDiv.value = inputValue;
      }
}



const DICTIONARY_API_BASE_URL =
    'https://api.dictionaryapi.dev/api/v2/entries/en/';

const fetchWordDefinitions = async word => {
    console.log(`Making request for definitions of ${word}...`);
    const response = await fetch(DICTIONARY_API_BASE_URL + word);
    const json = await response.json();
    return json[0].meanings
        .flatMap(m => m.definitions)
        .flatMap(d => d.definition);
};