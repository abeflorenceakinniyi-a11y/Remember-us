// =========================================
// REMEMBER US — GAME
// =========================================

const startButton =
    document.getElementById("startButton");

if (startButton) {

    startButton.addEventListener(
        "click",
        startGame
    );

}


// =========================================
// START GAME
// =========================================

function startGame() {

    document.body.innerHTML = `

        <main class="setup-screen">

            <div class="setup-heart">
                ❤️
            </div>

            <p class="eyebrow">
                BEFORE WE BEGIN
            </p>

            <h1>
                Meet the Players
            </h1>

            <p class="setup-text">
                This game is for two people.
                Choose your names so your story
                can begin.
            </p>

            <div class="player-box">

                <label for="playerOne">
                    Partner One
                </label>

                <input
                    id="playerOne"
                    type="text"
                    placeholder="Enter your name"
                    maxlength="30"
                >

            </div>

            <div class="player-box">

                <label for="playerTwo">
                    Partner Two
                </label>

                <input
                    id="playerTwo"
                    type="text"
                    placeholder="Enter your name"
                    maxlength="30"
                >

            </div>

            <button id="continueButton">
                CONTINUE
            </button>

            <p class="one-phone">
                📱 One phone. Stay together.
            </p>

        </main>

    `;


    const continueButton =
        document.getElementById(
            "continueButton"
        );


    continueButton.addEventListener(
        "click",
        continueToGame
    );

}


// =========================================
// CONTINUE TO FIRST ROUND
// =========================================

function continueToGame() {

    const playerOne =
        document
            .getElementById("playerOne")
            .value
            .trim();


    const playerTwo =
        document
            .getElementById("playerTwo")
            .value
            .trim();


    if (!playerOne || !playerTwo) {

        alert(
            "Both players need to enter a name."
        );

        return;
    }


    showQuestion(
        playerOne,
        playerTwo
    );

}


// =========================================
// QUESTION 1
// =========================================

function showQuestion(
    playerOne,
    playerTwo
) {

    document.body.innerHTML = `

        <main class="game-screen">

            <p class="eyebrow">
                OUR BEGINNING
            </p>

            <h1>
                Question 1
            </h1>

            <div class="question-card">

                <p class="question-label">
                    ${playerOne}, your turn
                </p>

                <h2>
                    Where did you first meet?
                </h2>

                <textarea
                    id="answerOne"
                    placeholder="Write your answer..."
                    maxlength="300"
                ></textarea>

                <button id="passButton">
                    PASS THE PHONE
                </button>

            </div>

            <p class="game-note">
                🤫 Don't let your partner see your answer.
            </p>

        </main>

    `;


    document
        .getElementById("passButton")
        .addEventListener(
            "click",
            () => showPartnerTwo(
                playerOne,
                playerTwo
            )
        );

}


// =========================================
// PARTNER TWO
// =========================================

function showPartnerTwo(
    playerOne,
    playerTwo
) {

    const answerOne =
        document
            .getElementById("answerOne")
            .value
            .trim();


    if (!answerOne) {

        alert(
            "Please enter an answer first."
        );

        return;
    }


    document.body.innerHTML = `

        <main class="game-screen">

            <p class="eyebrow">
                OUR BEGINNING
            </p>

            <h1>
                Question 1
            </h1>

            <div class="question-card">

                <p class="question-label">
                    ${playerTwo}, your turn
                </p>

                <h2>
                    Where did you first meet?
                </h2>

                <textarea
                    id="answerTwo"
                    placeholder="Write your answer..."
                    maxlength="300"
                ></textarea>

                <button id="revealButton">
                    REVEAL ANSWERS
                </button>

            </div>

            <p class="game-note">
                🤫 ${playerTwo}, don't look at ${playerOne}'s answer.
            </p>

        </main>

    `;


    document
        .getElementById("revealButton")
        .addEventListener(
            "click",
            () => revealAnswers(
                playerOne,
                playerTwo,
                answerOne
            )
        );

}


// =========================================
// REVEAL ANSWERS
// =========================================

function revealAnswers(
    playerOne,
    playerTwo,
    answerOne
) {

    const answerTwo =
        document
            .getElementById("answerTwo")
            .value
            .trim();


    if (!answerTwo) {

        alert(
            "Please enter an answer first."
        );

        return;
    }


    const match =
        answerOne.toLowerCase() ===
        answerTwo.toLowerCase();


    const resultMessage =
    match
        ? "❤️ YOUR FIRST MEMORY — You remembered the beginning of your story."
        : "💕 TWO MEMORIES, ONE STORY — You remembered the moment differently.";

    document.body.innerHTML = `

        <main class="game-screen">

            <p class="eyebrow">
                OUR BEGINNING
            </p>

            <h1>
                Your Answers
            </h1>

            <div class="answer-card">

                <p class="answer-name">
                    ${playerOne}
                </p>

                <p class="answer-text">
                    ${escapeHTML(answerOne)}
                </p>

            </div>


            <div class="answer-card">

                <p class="answer-name">
                    ${playerTwo}
                </p>

                <p class="answer-text">
                    ${escapeHTML(answerTwo)}
                </p>

            </div>


            <div class="result">
                ${resultMessage}
            </div>


            <p class="game-note">
    Take a moment to tell each other what you remember most about that day. ❤️
</p>
        </main>

    `;

}


// =========================================
// SAFE TEXT DISPLAY
// =========================================

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

            }
