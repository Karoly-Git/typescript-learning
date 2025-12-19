// ==============================
// TYPESCRIPT PRACTICE — ENUMS (STATE MACHINE)
// ==============================
//
// SCENARIO:
// You are building a video player.
// The player can be in different states and only certain transitions are allowed.
//
// PLAYER STATES:
// - Idle
// - Loading
// - Playing
// - Paused
// - Stopped
//
// TASK 1: CREATE PLAYER STATE ENUM
// --------------------------------
// 1. Create an enum called PlayerState
// 2. Use string values for each state
// 3. States:
//    - Idle
//    - Loading
//    - Playing
//    - Paused
//    - Stopped

enum PlayerState {
    Idle = "IDLE",
    Loading = "LOADING",
    Playing = "PLAYING",
    Paused = "PAUSED",
    Stopped = "STOPPED"
}

// TASK 2: INITIAL STATE
// ---------------------
// 1. Create a variable called currentState
// 2. Type it as PlayerState
// 3. Initialize it to Idle

let currentState: PlayerState = PlayerState.Idle;

// TASK 3: STATE TRANSITION FUNCTION
// ---------------------------------
// Scenario:
// The player can only move between certain states.
//
// Allowed transitions:
// - Idle      → Loading *
// - Loading   → Playing *
// - Playing   → Paused
// - Paused    → Playing *
// - Playing   → Stopped
//
// 1. Create a function called getNextState
// 2. It accepts:
//    - current: PlayerState
//    - action: string
// 3. It returns PlayerState
// 4. If the transition is not allowed, return the current state
//
// Example actions:
// - "LOAD"
// - "PLAY"
// - "PAUSE"
// - "STOP"
//
// Example behavior:
// getNextState(PlayerState.Idle, "LOAD") → PlayerState.Loading
// getNextState(PlayerState.Playing, "PAUSE") → PlayerState.Paused
// getNextState(PlayerState.Loading, "STOP") → PlayerState.Loading

function getNextState(current: PlayerState, action: string): PlayerState {
    switch (current) {
        case PlayerState.Idle:
            if (action === "LOAD") {
                return PlayerState.Loading;
            }
            break;

        case PlayerState.Loading:
            if (action === "PLAY") {
                return PlayerState.Playing;
            }
            break;

        case PlayerState.Playing:
            if (action === "PAUSE") {
                return PlayerState.Paused;
            }
            if (action === "STOP") {
                return PlayerState.Stopped;
            }
            break;

        case PlayerState.Paused:
            if (action === "PLAY") {
                return PlayerState.Playing;
            }
            break;
    }
    return current;
}

// TASK 4: STATE HISTORY
// ---------------------
// Scenario:
// You want to track previous states.
//
// 1. Create an array called stateHistory
// 2. It should only accept PlayerState values
// 3. Push each state change into the array

const stateHistory: PlayerState[] = [];

stateHistory.push(PlayerState.Idle);
stateHistory.push(PlayerState.Loading);
stateHistory.push(PlayerState.Playing);
stateHistory.push(PlayerState.Paused);
stateHistory.push(PlayerState.Stopped);

// TASK 5: INVALID USAGE CHECK
// ---------------------------`
// Scenario:
// Someone tries to push a string into stateHistory.
//
// Example:
// stateHistory.push("Playing");
//
// 1. Explain (in a comment) why TypeScript should reject this
// 2. Fix it using the enum properly

stateHistory.push(PlayerState.Playing);