const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}
function wishMe() {
    var day = new Date();
    var hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evening Sir...");
    }
}
window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};
btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});
function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    }else if (message.includes('how are you') ) {
        speak("Hello Sir, I'm good,How May I Help You?");
    } else if (message.includes('introduce yourself') ) {
        speak("I'm jarvis, personal A I assistant avatar of piyush jha . I'm here to help you in all ways you required. you can ask and command me. Thank you!!");
    } else if (message.includes('do you know me') ) {
        speak("yes, you are piyush and you have created me");
    }  else if (message.includes('open your source code')) {
        window.open("https://github.com/PiyuushJha/AI-Jarvis");
        speak("here is my source code....");
    }  else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else if (message.includes('whatsapp')) {
        window.open('whatsapp:///');
        const finalText = "Opening whatsapp";
        speak(finalText);
    }
        else if (message.includes('instagram')) {
        window.open("https://www.instagram.com/");
        const finalText = "Opening Instagram";
        speak(finalText);
    }else if (message.includes('vs code')) {
        window.open('visual Studio:///');
        const finalText = "Opening visual studio";
        speak(finalText);
    }    else if (message.includes('photos')) {
        window.open('Photos:///');
        const finalText = "Opening Photos";
        speak(finalText);
    }    else if (message.includes('settings')) {
        window.open('Settings:///');
        const finalText = "Opening Settings";
        speak(finalText);
    }    else if (message.includes('camera')) {
        window.open('camera:///');
        const finalText = "Opening camera";
        speak(finalText);
    }    else if (message.includes('disney plus')|| (message.includes('hotstar') ) {
        window.open("https://www.hotstar.com/in/home?ref=%2Fin");
        const finalText = "Opening Disney+";
        speak(finalText);
    }    else if (message.includes('whatsapp')) {
        window.open('whatsapp:///');
        const finalText = "Opening whatsapp";
        speak(finalText);
    }  else if (message.includes('microsoft store')) {
        window.open('microsoft store:///');
        const finalText = "Opening microsoft store";
        speak(finalText);
    } else if (message.includes('brave')) {
        window.open('Brave:///');
        const finalText = "Opening brave";
        speak(finalText);
    }else if (message.includes('gmail')) {
        window.open("https://mail.google.com/mail/u/0/#inbox");
        const finalText = "Opening gmail";
        speak(finalText);
    }else if (message.includes('map')) {
        window.open('Maps:///');
        const finalText = "Opening map";
        speak(finalText);
    }else if (message.includes('spotify')) {
        window.open('Spotify:///');
        const finalText = "Opening spotify";
        speak(finalText);
    }
            
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
