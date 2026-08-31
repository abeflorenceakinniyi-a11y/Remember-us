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


    document
        .getElementById("continueButton")
        .addEventListener(
            "click",
            continueToGame
        );

}


// =========================================
// CONTINUE
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


    showQuestionOne(
        playerOne,
        playerTwo
    );

}


// =========================================
// QUESTION 1
// =========================================

function showQuestionOne(
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
                    ${escapeHTML(playerOne)}, your turn
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
            () => showPartnerTwoQuestionOne(
                playerOne,
                playerTwo
            )
        );

}


// =========================================
// PARTNER TWO — QUESTION 1
// =========================================

function showPartnerTwoQuestionOne(
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
                    ${escapeHTML(playerTwo)}, your turn
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
                🤫 Don't look at ${escapeHTML(playerOne)}'s answer.
            </p>

        </main>

    `;


    document
        .getElementById("revealButton")
        .addEventListener(
            "click",
            () => revealQuestionOne(
                playerOne,
                playerTwo,
                answerOne
            )
        );

}


// =========================================
// REVEAL QUESTION 1
// =========================================

function revealQuestionOne(
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
                    ${escapeHTML(playerOne)}
                </p>

                <p class="answer-text">
                    ${escapeHTML(answerOne)}
                </p>

            </div>

            <div class="answer-card">

                <p class="answer-name">
                    ${escapeHTML(playerTwo)}
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

            <button
                id="nextButton"
                class="next-button"
            >
                NEXT
            </button>

        </main>

    `;


    document
        .getElementById("nextButton")
        .addEventListener(
            "click",
            () => showQuestionTwo(
                playerOne,
                playerTwo
            )
        );

}


// =========================================
// QUESTION 2
// =========================================

function showQuestionTwo(
    playerOne,
    playerTwo
) {

    document.body.innerHTML = `

        <main class="game-screen">

            <p class="eyebrow">
                OUR BEGINNING
            </p>

            <h1>
                Question 2
            </h1>

            <div class="question-card">

                <p class="question-label">
                    ${escapeHTML(playerOne)}, your turn
                </p>

                <h2>
                    What was your first impression of me?
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
            () => showPartnerTwoQuestionTwo(
                playerOne,
                playerTwo
            )
        );

}


// =========================================
// PARTNER TWO — QUESTION 2
// =========================================

function showPartnerTwoQuestionTwo(
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
                Question 2
            </h1>

            <div class="question-card">

                <p class="question-label">
                    ${escapeHTML(playerTwo)}, your turn
                </p>

                <h2>
                    What was your first impression of me?
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
                🤫 Don't look at ${escapeHTML(playerOne)}'s answer.
            </p>

        </main>

    `;


    document
        .getElementById("revealButton")
        .addEventListener(
            "click",
            () => revealQuestionTwo(
                playerOne,
                playerTwo,
                answerOne
            )
        );

}


// =========================================
// REVEAL QUESTION 2
// =========================================

function revealQuestionTwo(
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


    document.body.innerHTML = `

        <main class="game-screen">

            <p class="eyebrow">
                OUR BEGINNING
            </p>

            <h1>
                Your First Impressions
            </h1>

            <div class="answer-card">

                <p class="answer-name">
                    ${escapeHTML(playerOne)}
                </p>

                <p class="answer-text">
                    ${escapeHTML(answerOne)}
                </p>

            </div>

            <div class="answer-card">

                <p class="answer-name">
                    ${escapeHTML(playerTwo)}
                </p>

                <p class="answer-text">
                    ${escapeHTML(answerTwo)}
                </p>

            </div>

            <div class="result">
                ❤️ TWO FIRST IMPRESSIONS — Now discover what changed.
            </div>

            <p class="game-note">
                Tell each other what you think about those first impressions today. ❤️
            </p>

            <button
                id="nextButton"
                class="next-button"
            >
                NEXT
            </button>

        </main>

    `;


    document
        .getElementById("nextButton")
        .addEventListener(
            "click",
            () => showQuestionThree(
                playerOne,
                playerTwo
            )
        );

}


// =========================================
// QUESTION 3 PLACEHOLDER
// =========================================

function showQuestionThree(
    playerOne,
    playerTwo
) {

    document.body.innerHTML = `

        <main class="game-screen">

            <p class="eyebrow">
                COMING NEXT
            </p>

            <h1>
                A New Chapter
            </h1>

            <p class="setup-text">
                The next part of Remember Us
                will introduce wishes, promises,
                memories and real couple challenges.
            </p>

            <button
                class="next-button"
                onclick="location.reload()"
            >
                BACK TO START
            </button>

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
