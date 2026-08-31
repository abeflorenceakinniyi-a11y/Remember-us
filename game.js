// =========================================
// REMEMBER US — GAME START
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


            <button
                id="continueButton"
            >
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
// CONTINUE TO GAME
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


    alert(
        `Welcome ${playerOne} and ${playerTwo}! ❤️`
    );

}
