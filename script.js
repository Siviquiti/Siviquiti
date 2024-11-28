const startButton = document.getElementById('startButton');
const gameContainer = document.getElementById('game');
const audioClip = document.getElementById('audioClip');
const submitButton = document.getElementById('submitButton');
const artistInput = document.getElementById('artistInput');
const songInput = document.getElementById('songInput');
const timer = document.getElementById('timer');
const resultContainer = document.getElementById('result');
const correctAnswerText = document.getElementById('correctAnswer');

let score = 1000;
let artistGuessedCorrectly = false;
let songGuessedCorrectly = false;
let correctArtist = "";
let correctSong = "";

// Liste des musiques avec artistes et titres
const musicList = [
    { artist: "Adele", song: "Someone Like You", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Adele%20-%20Someone%20Like%20You.mp3" },
    { artist: "Alexandra Stan", song: "Mr Saxobeat", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Alexandra%20Stan%20-%20Mr%20Saxobeat.mp3" },
    { artist: "Alicia Keys", song: "Fallin", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Alicia%20Keys%20-%20Fallin.mp3" },
    { artist: "Ariana Grande", song: "Dangerous Woman", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Ariana%20Grande%20-%20Dangerous%20Woman.mp3" },
    { artist: "Aurora", song: "Runaway", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Aurora%20-%20Runaway.mp3" },
    { artist: "Ava Max", song: "Sweet But Psycho", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Ava%20Max%20-%20Sweet%20But%20Psycho.mp3" },
    { artist: "Basshunter", song: "Now You're Gone", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Basshunter%20-%20Now%20You're%20Gone.mp3" },
    { artist: "Birdy", song: "Skinny Love", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Birdy%20-%20Skinny%20Love.mp3" },
    { artist: "Britney Spears", song: "Work Bitch", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Britney%20Spears%20-%20Work%20Bitch.mp3" },
    { artist: "Carly Rae Jepsen", song: "Call Me Maybe", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Carly%20Rae%20Jepsen%20-%20Call%20Me%20Maybe.mp3" },
    { artist: "Cascada", song: "Everytime We Touch", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Cascada%20-%20Everytime%20We%20Touch.mp3" },
    { artist: "Charli XCX", song: "Boom Clap", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Charli%20XCX%20-%20Boom%20Clap.mp3" },
    { artist: "Christina Aguilera", song: "Hurt", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Christina%20Aguilera%20-%20Hurt.mp3" },
    { artist: "Coeur de Pirate", song: "Comme des enfants", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Coeur%20de%20Pirate%20-%20Comme%20des%20enfants.mp3" },
    { artist: "Dr. Dre", song: "I Need A Doctor", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Dr.%20Dre%20-%20I%20Need%20A%20Doctor.mp3" },
    { artist: "DragonForce", song: "Through the Fire and Flames", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/DragonForce%20-%20Through%20the%20Fire%20and%20Flames.mp3" },
    { artist: "Ed Sheeran", song: "Shape of You", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Ed%20Sheeran%20-%20Shape%20of%20You.mp3" },
    { artist: "Eminem", song: "Lose Yourself", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Eminem%20-%20Lose%20Yourself.mp3" },
    { artist: "Eminem", song: "Not Afraid", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Eminem%20-%20Not%20Afraid.mp3" },
    { artist: "Fall Out Boy", song: "Dance Dance", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Fall%20Out%20Boy%20-%20Dance%20Dance.mp3" },
    { artist: "Fifth Harmony", song: "Work from Home", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Fifth%20Harmony%20-%20Work%20from%20Home.mp3" },
    { artist: "Indila", song: "Dernière Danse", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Indila%20-%20Dernière%20Danse.mp3" },
    { artist: "Inna", song: "Sun is Up", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Inna%20-%20Sun%20is%20Up.mp3" },
    { artist: "Jeff Buckley", song: "Hallelujah", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Jeff%20Buckley%20-%20Hallelujah.mp3" },
    { artist: "Jennifer Lopez", song: "Aint Your Mama", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Jennifer%20Lopez%20-%20Aint%20Your%20Mama.mp3" },
    { artist: "Jessie J", song: "Price Tag", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Jessie%20J%20-%20Price%20Tag.mp3" },
    { artist: "Jessie J", song: "Who You Are", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Jessie%20J%20-%20Who%20You%20Are.mp3" },
    { artist: "Jessie J", song: "Who's Laughing Now", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Jessie%20J%20-%20Who's%20Laughing%20Now.mp3" },
    { artist: "John Legend", song: "All of Me", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/John%20Legend%20-%20All%20of%20Me.mp3" },
    { artist: "Kanye West", song: "All Of The Lights", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Kanye%20West%20-%20All%20Of%20The%20Lights.mp3" },
    { artist: "Katy Perry", song: "The One That Got Away", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Katy%20Perry%20-%20The%20One%20That%20Got%20Away.mp3" },
    { artist: "Klaas", song: "Our Own Way", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Klaas%20-%20Our%20Own%20Way.mp3" },
    { artist: "Lady Gaga", song: "Perfect Illusion", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Lady%20Gaga%20-%20Perfect%20Illusion.mp3" },
    { artist: "Lana Del Rey", song: "Video Games", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Lana%20Del%20Rey%20-%20Video%20Games.mp3" },
    { artist: "Lykke Li", song: "I Follow Rivers", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Lykke%20Li%20-%20I%20Follow%20Rivers.mp3" },
    { artist: "M.I.A", song: "Paper Planes", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/M.I.A%20-%20Paper%20Planes.mp3" },
    { artist: "Mai Lan", song: "Gentiment Je T'immole", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Mai%20Lan%20-%20Gentiment%20Je%20T'immole.mp3" },
    { artist: "Maroon 5", song: "Girls Like You", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Maroon%205%20-%20Girls%20Like%20You.mp3" },
    { artist: "Martin Garrix & Dua Lipa", song: "Scared To Be Lonely", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Martin%20Garrix%20&%20Dua%20Lipa%20-%20Scared%20To%20Be%20Lonely.mp3" },
    { artist: "Nicki Minaj", song: "Fly", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Nicki%20Minaj%20-%20Fly.mp3" },
    { artist: "Nicki Minaj", song: "Super Bass", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Nicki%20Minaj%20-%20Super%20Bass.mp3" },
    { artist: "Nirvana", song: "Smells Like Teen Spirit", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Nirvana%20-%20Smells%20Like%20Teen%20Spirit.mp3" },
    { artist: "Olivia Rodrigo", song: "Good 4 u", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Olivia%20Rodrigo%20-%20Good%204%20u.mp3" },
    { artist: "Pitbull", song: "Timber", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Pitbull%20-%20Timber.mp3" },
    { artist: "Ram Jam", song: "Black Betty", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Ram%20Jam%20-%20Black%20Betty.mp3" },
    { artist: "Rihanna", song: "Unfaithful", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Rihanna%20-%20Unfaithful.mp3" },
    { artist: "Selena Gomez", song: "Bad Liar", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Selena%20Gomez%20-%20Bad%20Liar.mp3" },
    { artist: "Selena Gomez", song: "Good For You", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Selena%20Gomez%20-%20Good%20For%20You.mp3" },
    { artist: "Selena Gomez", song: "The Heart Wants What It Wants", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Selena%20Gomez%20-%20The%20Heart%20Wants%20What%20It%20Wants.mp3" },
    { artist: "Shakira", song: "Can't Remember to Forget You", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Shakira%20-%20Can't%20Remember%20to%20Forget%20You.mp3" },
    { artist: "Shania Twain", song: "Man ! I Feel Like A Woman", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Shania%20Twain%20-%20Man%20!%20I%20Feel%20Like%20A%20Woman.mp3" },
    { artist: "Sheryfa Luna", song: "Il avait les mots", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Sheryfa%20Luna%20-%20Il%20avait%20les%20mots.mp3" },
    { artist: "Sia", song: "Chandelier", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Sia%20-%20Chandelier.mp3" },
    { artist: "Slipknot", song: "Duality", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Slipknot%20-%20Duality.mp3" },
    { artist: "Spice Girls", song: "Wanna Be", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Spice%20Girls%20-%20Wanna%20Be.mp3" },
    { artist: "Stromae", song: "Papaoutai", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Stromae%20-%20Papaoutai.mp3" },
    { artist: "Taylor Swift", song: "Blank Space", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Taylor%20Swift%20-%20Blank%20Space.mp3" },
    { artist: "Taylor Swift", song: "I Knew You Were Trouble", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Taylor%20Swift%20-%20I%20Knew%20You%20Were%20Trouble.mp3" },
    { artist: "The Black Eyed Peas", song: "I Gotta Feeling", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Black%20Eyed%20Peas%20-%20I%20Gotta%20Feeling.mp3" },
    { artist: "The Black Eyed Peas", song: "Meet Me Halfway", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Black%20Eyed%20Peas%20-%20Meet%20Me%20Halfway.mp3" },
    { artist: "The Black Eyed Peas", song: "Pump It", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Black%20Eyed%20Peas%20-%20Pump%20It.mp3" },
    { artist: "The Buggles", song: "Video Killed the Radio Star", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Buggles%20-%20Video%20Killed%20the%20Radio%20Star.mp3" },
    { artist: "The Cranberries", song: "Zombie", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Cranberries%20-%20Zombie.mp3" },
    { artist: "The Fray", song: "You Found Me", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Fray%20-%20You%20Found%20Me.mp3" },
    { artist: "The Pretty Reckless", song: "Heaven Knows", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Pretty%20Reckless%20-%20Heaven%20Knows.mp3" },
    { artist: "The Pretty Reckless", song: "Make Me Wanna Die", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Pretty%20Reckless%20-%20Make%20Me%20Wanna%20Die.mp3" },
    { artist: "The Pretty Reckless", song: "Miss Nothing", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/The%20Pretty%20Reckless%20-%20Miss%20Nothing.mp3" },
    { artist: "Yiruma", song: "River Flows In You", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Yiruma%20-%20River%20Flows%20In%20You.mp3" },
    { artist: "Zara Larsson", song: "Ain't My Fault", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Zara%20Larsson%20-%20Ain't%20My%20Fault.mp3" },
    { artist: "Zara Larsson", song: "Lush Life", file: "file:///E:/Documents/Dev/Guess%20The%20Top/Musiques/Zara%20Larsson%20-%20Lush%20Life.mp3" }
];

// Fonction pour obtenir l'index de la musique du jour de manière aléatoire
function getMusicForToday() {
    const today = new Date();

    // Utiliser la date actuelle pour générer un nombre aléatoire
    const randomSeed = today.getDate() + today.getMonth() + today.getFullYear(); // Combine le jour, mois et année pour une base stable
    const randomIndex = Math.floor(randomSeed % musicList.length); // Utiliser le modulo pour obtenir un index valide dans la liste

    return musicList[randomIndex];
}

// Fonction de démarrage du jeu
startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    gameContainer.style.display = 'block';
    startGame();
});

function startGame() {
    score = 1000;
    artistGuessedCorrectly = false;
    songGuessedCorrectly = false;
    resultContainer.style.display = 'none';
    artistInput.value = '';
    songInput.value = '';
    artistInput.placeholder = "Entrez l'artiste"; // Réinitialiser le placeholder
    songInput.placeholder = "Entrez le titre"; // Réinitialiser le placeholder

    // Définit la musique du jour
    const musicOfTheDay = getMusicForToday();
    audioClip.src = musicOfTheDay.file;
    correctArtist = musicOfTheDay.artist;
    correctSong = musicOfTheDay.song;

    audioClip.play();
    audioClip.volume = 0.2;
    timer.textContent = `Score : ${score}`;
    timer.style.fontSize = '20px'; // Restaure la taille du score
    startTimer();
}

// Soumettre les réponses de l'utilisateur
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut (rechargement de la page ou autre action)

    const userArtist = normalizeString(artistInput.value.trim());
    const userSong = normalizeString(songInput.value.trim());

    let message = "";

    const isArtistCorrect = userArtist === normalizeString(correctArtist);
    const isSongCorrect = userSong === normalizeString(correctSong);

    if (isArtistCorrect && isSongCorrect) {
        message = `"${correctArtist}" - "${correctSong}" est correct !`;
        showResult(message, true);
        stopTimer();
        timer.style.fontSize = '30px';
        correctAnswerText.style.fontSize = '24px';
        artistInput.style.backgroundColor = 'green';
        songInput.style.backgroundColor = 'green';
        artistInput.disabled = true;
        songInput.disabled = true;
        artistInput.value = "";
        songInput.value = "";
        artistInput.placeholder = "";
        songInput.placeholder = "";

        // Cache les boutons seulement si les deux réponses sont correctes
        submitButton.style.display = 'none';
        abortButton.style.display = 'none';
    } else {
        // Si l'artiste est correct mais pas la chanson
        if (isArtistCorrect && !artistGuessedCorrectly) {
            artistGuessedCorrectly = true;
            message = `"${correctArtist}" est correct !`;
            artistInput.style.backgroundColor = 'green';
            artistInput.disabled = true;
            artistInput.value = "";
            artistInput.placeholder = "";

            // Cacher les boutons si la chanson est aussi correcte après
            if (isSongCorrect) {
                submitButton.style.display = 'none';
                abortButton.style.display = 'none';
            }
        }

        // Si la chanson est correcte mais pas l'artiste
        if (isSongCorrect && !songGuessedCorrectly) {
            songGuessedCorrectly = true;
            message = `"${correctSong}" est correct !`;
            songInput.style.backgroundColor = 'green';
            songInput.disabled = true;
            songInput.value = "";
            songInput.placeholder = "";

            // Cacher les boutons si l'artiste est aussi correct après
            if (isArtistCorrect) {
                submitButton.style.display = 'none';
                abortButton.style.display = 'none';
            }
        }

        // Si ni l'artiste ni la chanson ne sont corrects
        if (!isArtistCorrect && !isSongCorrect) {
            message = "Essayez encore !";
        }

        resultContainer.style.display = 'block';
        correctAnswerText.textContent = message;

        if (artistGuessedCorrectly) {
            artistInput.disabled = true;
        } else {
            artistInput.disabled = false;
        }

        if (songGuessedCorrectly) {
            songInput.disabled = true;
        } else {
            songInput.disabled = false;
        }

        // Si les deux réponses sont correctes après
        if (artistGuessedCorrectly && songGuessedCorrectly) {
            showResult(`Félicitations ! C'était bien ${correctArtist} - ${correctSong} !\nRevenez demain pour un autre extrait !`, true);
            stopTimer();
            timer.style.fontSize = '30px';
            // Cacher les boutons si les deux réponses sont correctes
            submitButton.style.display = 'none';
            abortButton.style.display = 'none';
        }
    }
});

// Fonction pour soumettre les réponses lorsque l'on appuie sur "Entrée"
artistInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Empêche l'action par défaut du "Enter"
        submitButton.click(); // Simule un clic sur le bouton de soumission
    }
});

songInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Empêche l'action par défaut du "Enter"
        submitButton.click(); // Simule un clic sur le bouton de soumission
    }
});

// Fonction pour normaliser les chaînes de caractères et accepter les accents
function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function showResult(message, keepAudio) {
    resultContainer.style.display = 'block';
    correctAnswerText.textContent = message;

    if (!keepAudio) {
        gameContainer.style.display = 'none';
    }
}

const abortButton = document.getElementById('abortButton'); // Bouton abandonner

abortButton.addEventListener('click', function() {
    stopTimer();
    score = 0;
    timer.textContent = 'Score : ' + score;
    resultContainer.style.display = 'block';
    correctAnswerText.innerHTML = `Dommage ! C'était ${correctArtist} - ${correctSong} la bonne réponse ! <br> Revenez demain pour un autre extrait !`;

    artistInput.disabled = true;
    songInput.disabled = true;

    artistInput.value = correctArtist;
    songInput.value = correctSong;

    // Cacher les boutons "Abandonner" et "Soumettre" après un clic sur "Abandonner"
    abortButton.style.display = 'none';
    submitButton.style.display = 'none';
});

// Timer qui diminue le score visuellement de 1 à la fois
let timerInterval;
function startTimer() {
    let actualScore = score;  // Valeur initiale du score
    timerInterval = setInterval(() => {
        if (actualScore > 0) {
            actualScore -= 1;  // Diminue le score de 1 à chaque intervalle
            timer.textContent = 'Score : ' + actualScore;  // Affiche le score mis à jour
        }
    }, 100); // Intervalle de 100 ms pour une mise à jour fréquente du score
}

// Fonction pour arrêter le timer
function stopTimer() {
    clearInterval(timerInterval);
}
