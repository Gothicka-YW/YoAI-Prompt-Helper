# YoAI Prompt Helper (Community Edition)

A lightweight Chrome Extension (Manifest V3) that helps YoWorld players generate consistent, high-quality AI prompts for avatars and backgrounds.

## Features

- **Avi Presets**: One-click, detailed avatar prompts (copy/paste into your AI).
- **BG Presets**: Background prompt presets for common scenes.
- **Creator**: Build a custom prompt by selecting style, proportions, accessories, lighting, background transparency, etc.
- **My Presets**: Save your own avatar/BG prompts and import them into the dropdowns.
- **Import/Export**: Export all saved presets to JSON and import them back later.
- **Themes (v2.0)**: Change the UI theme from the **Resources** tab (applies across the entire popup).

## Install (Load Unpacked)

1. Download/clone this repo.
2. In Chrome, open `chrome://extensions`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the `YoAI-Prompt-Helper/` folder.

## Usage

- Open the extension popup.
- **Avi Presets**: pick a preset → click **Copy Preset Prompt**.
- **Creator**: choose options → click **Assemble Prompt** → **Copy Prompt**.
- **My Presets**: save your own prompts and optionally import them into Avi/BG dropdowns.
- **Resources**: includes helpful links and the **Theme** selector.

## Theme Notes

- Theme is stored in `localStorage` under `yoprompt_theme`.
- Themes are defined via CSS variables in `theme.css` and applied via `data-theme` on the document root.

Built-in themes: Dark, Valentine’s, Gothicka, Elven, Cats, Calico.

## Development

- No build step (plain HTML/CSS/JS).
- After changes, reload the extension in `chrome://extensions`.

## Privacy

See [PRIVACY_POLICY.md](PRIVACY_POLICY.md).

## Credits

Community Edition — Created by Gothicka
