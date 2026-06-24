# 🌈 Rainbow Flow

![HTML5](https://img.shields.io/badge/HTML5-structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-neon%20styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-game%20logic-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)
![No Dependencies](https://img.shields.io/badge/Dependencies-none-77F75C?style=for-the-badge)

**A neon color-memory browser game where players watch a glowing sequence and repeat it back.**

> A calm, playful focus challenge designed to make memory practice feel bright, kind, and rewarding.

Rainbow Flow is a polished, self-contained mini browser game built for a child-friendly emotional wellness experience. The current in-game title is **Rainbow Focus**. Players watch a sequence of colorful glowing tiles, then tap the same pattern back from memory. The game includes friendly feedback, scoring, streaks, Web Audio sound effects, a saved best score, a one-retry-per-round rule, and a mobile-friendly neon interface.

---

## 📋 Table of Contents

- [✨ Key Features](#-key-features)
- [🎮 Gameplay](#-gameplay)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Repository Structure](#-repository-structure)
- [🚀 Installation](#-installation)
- [🕹️ How to Play](#️-how-to-play)
- [🧠 Game Architecture](#-game-architecture)
- [🎛️ Controls](#️-controls)
- [📸 Screenshots](#-screenshots)
- [🌐 Live Demo](#-live-demo)
- [⚠️ Limitations & Future Work](#️-limitations--future-work)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [👨‍💻 Authors](#-authors)
- [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Key Features

- Six colorful memory tiles with CSS-only glowing orb visuals.
- Progressive sequence gameplay that grows from 2 colors up to 12 colors.
- One retry per round: the first mistake replays the same sequence once, and a second mistake ends the game.
- Score, round, streak, and best score tracking.
- Best score persistence through `localStorage`.
- Positive, child-friendly status messages and game-over copy.
- Web Audio API sound effects with a Sound On/Off toggle.
- Reusable confetti pool, reduced particle count, and reduced-motion support for smoother mobile performance.

---

## 🎮 Gameplay

The objective is simple: watch the rainbow sequence, remember the order, and tap the color pads in the same order.

Each new game starts with a two-color sequence. When the player repeats the full pattern correctly, the score increases, the streak grows, and the next round adds another color. The game continues until the player completes the full 12-color challenge or misses the pattern twice in the same round.

If the player taps the wrong color for the first time in a round, the game stays encouraging and replays the same sequence once. If the player taps the wrong color again during that same round, the game shows a friendly Game Over screen with the final score, round reached, streak, and best score.

---

## 🛠️ Tech Stack

This game runs directly in the browser. There is no `package.json`, no build tool, and no external dependency.

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure and semantic controls |
| CSS3 | Neon UI, layout, responsiveness, animations, reduced-motion support |
| Vanilla JavaScript | Game state, sequence logic, scoring, input handling, and UI updates |
| Web Audio API | Lightweight generated sound effects |
| `localStorage` | Saving the best score in the player’s browser |

Not used: Canvas, Three.js, GSAP, React, Vite, p5.js, or external image/font libraries.

---

## 📂 Repository Structure

```txt
rainbow-flow/
│
├── index.html
├── README.md
└── New folder/
```

Hidden/internal folders such as `.git/` and `.agents/` are not shown above.

| Path | Description |
|------|-------------|
| `index.html` | Complete self-contained game, including HTML, CSS, JavaScript, animations, and sounds |
| `README.md` | Project documentation for setup, gameplay, architecture, and publishing |
| `New folder/` | Empty placeholder folder currently present in the project |

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/[username]/rainbow-flow.git
cd rainbow-flow
```

Run the game:

- Open `index.html` directly in a modern browser, or
- Use a local server such as VS Code Live Server.

No dependency installation is required.

---

## 🕹️ How to Play

1. Press **Start Game**.
2. Watch the glowing color sequence.
3. Repeat the sequence by tapping the color pads in the same order.
4. Complete a round correctly to grow the sequence and increase your score.
5. If you make one mistake, watch the same sequence one more time.
6. If you make a second mistake in the same round, review your final score and press **Play Again**.

---

## 🎛️ Controls

| Action | Control |
|--------|---------|
| Start game | **Start Game** button |
| Repeat pattern | Tap/click the color tiles |
| Toggle sound | **Sound On/Off** button |
| Reset game | **Reset Game** button |
| Play again | **Play Again** button on the win or game-over screen |
| Keyboard navigation | Use `Tab` to focus controls and `Enter`/`Space` to activate buttons |

---

## 🧠 Game Architecture

### Game initialization

The JavaScript initializes score values, reads the saved best score from `localStorage`, collects the six color pad buttons, prepares reusable confetti elements, and wires up click handlers.

### Round generation

`generateNextRound()` resets the round retry counter, adds a new random color to the sequence, updates score display state, and starts sequence playback.

### Sequence playback

`playSequence()` disables player input, flashes each tile in order, plays matching tones, then enables the pads for the player’s turn.

### Player input handling

Each tile click is checked against the current sequence position. Correct taps advance progress. A completed sequence triggers scoring, celebration, and the next round.

### Retry and game-over logic

Each round allows exactly one retry. The first wrong tap replays the current sequence. A second wrong tap in the same round opens the Game Over screen and saves the best score if needed.

### Scoring and persistence

Score increases based on sequence length and streak. The best score is stored locally with `localStorage`, so it remains available in the same browser between sessions.

### Performance and accessibility

The interface uses CSS transforms for smooth motion, a small reusable confetti pool, reduced particle counts, focus-visible outlines, ARIA labels, and `prefers-reduced-motion` handling.

---

## 📸 Screenshots

<img width="905" height="847" alt="Rainbow Flow Screenshot" src="https://github.com/user-attachments/assets/f10cc6e7-2f1b-49b5-a6a8-22d77d6588f2" />

---

## 🌐 Live Demo

[Play Rainbow Flow here](https://YOUR_USERNAME.github.io/rainbow-flow/)

---


## ⚠️ Limitations & Future Work

- Add a published GitHub Pages demo link.
- Add real screenshots or a short gameplay GIF.
- Consider optional difficulty modes for shorter or longer sequences.
- Add optional leaderboard support if a backend is introduced later.
- Add more accessibility testing across screen readers and mobile browsers.
- Rename the in-game title from Rainbow Focus to Rainbow Flow if the public project name should be consistent everywhere.

---

## 🤝 Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make focused, readable changes.
4. Test the game in a desktop and mobile-sized browser.
5. Open a pull request with a clear summary of what changed.

Please keep the game self-contained unless the project intentionally adds a build system later.

---

## 📜 License

This project is intended to use the **MIT License**.

If you publish this repository, add a `LICENSE` file with the MIT License text or update this section if you choose a different license.

---

## 👨‍💻 Authors

| Name | GitHub |
|------|--------|
| Hriday Shah | [@Hridayshah18](https://github.com/Hridayshah18) |
| Mokshesh Sheth | [@shethmokshesh08-jpg](https://github.com/shethmokshesh08-jpg) |

---

## 🙏 Acknowledgments

- HTML, CSS, and JavaScript browser APIs.
- Web Audio API for generated sound effects.
- `localStorage` for lightweight best-score persistence.
- The ExpressIt wellness-game concept and the idea of making focus practice feel playful, positive, and approachable.
