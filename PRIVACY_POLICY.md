# Privacy Policy — YoAI Prompt Helper (Community Edition)

**Effective date:** 2026-01-29

YoAI Prompt Helper is a Chrome Extension (Manifest V3) that helps users draft and manage AI prompt text (e.g., avatar/background prompts) inside the extension popup.

## Summary
- The extension does **not** collect, transmit, sell, or share personal data.
- All user-entered content (such as prompts and presets) is stored **locally in your browser**.
- There are **no analytics**, **no tracking**, and **no external servers** used by this extension.

## Information the extension may store
The extension may store the following information **on your device** to provide its features:
- **Saved prompts/presets** you create in the UI (text content you enter).
- **Imported preset data** if you use Import/Export.
- **UI preferences**, such as theme selection.

Where this is stored:
- `chrome.storage.local` / `chrome.storage.sync` (depending on implementation) for saved presets and settings.
- `localStorage` for certain UI preferences (e.g., theme key such as `yoprompt_theme`).

## Information the extension does not collect
The extension does not collect:
- Your name, email address, or account identifiers.
- Your browsing history.
- Your location.
- Payment information.
- Device identifiers.
- Any analytics/telemetry events.

## How information is used
Any stored information is used only to:
- Remember your saved prompts and presets.
- Preserve your UI preferences between sessions.
- Enable import/export of your data on demand.

## Data sharing
The extension does not share data with third parties.

## Network access
The extension does not require external network access to function and does not send your prompt data to any server.

## Permissions
- **storage**: used to save your presets and settings in Chrome storage.

## Data retention and deletion
- You can delete saved data by using the extension’s UI controls (where available).
- You can remove all stored extension data by uninstalling the extension, or by clearing the extension’s storage from `chrome://extensions` → Details → Extension storage.

## Children’s privacy
This extension is not directed to children under 13 and does not knowingly collect personal information from children.

## Changes to this policy
If this policy changes, the updated version will be published in this repository.

## Contact
For questions or concerns, please open an issue on the GitHub repository where you obtained this extension or email gothicka.ywa@gmail.com.
