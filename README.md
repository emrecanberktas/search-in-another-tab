# Search in Another Tab 🔍



## ✨ Features

- 🎯 **Smart Positioning** - Button appears above or below selected text, never goes off-screen
- 🚀 **One-Click Search** - Instantly search selected text on Google in a new tab
- 🎨 **Clean Design** - Modern, minimalist button that works on any website
- 🛡️ **Privacy First** - No data collection, no tracking, completely local
- ⌨️ **Keyboard Support** - Press ESC to hide the button
- 🌐 **Works Everywhere** - Compatible with all websites

## 🎮 How to Use

1. Select any text on a webpage
2. A "Search" button will appear near your selection
3. Click the button
4. Google search opens in a new tab with your selected text

**Pro Tips:**
- Press `ESC` to hide the button
- Click anywhere outside to dismiss
- The button auto-hides when scrolling

## 🔒 Privacy & Security

This extension is built with privacy in mind:

- ✅ **No data collection** - We don't collect any user data
- ✅ **No tracking** - No analytics or third-party services
- ✅ **No servers** - Everything runs locally in your browser
- ✅ **Minimal permissions** - Only uses `activeTab` permission
- ✅ **Open source** - Full source code available for review

## 🛠️ Technical Details

### Built With

- **Manifest V3** - Latest Chrome extension standard
- **Vanilla JavaScript** - No dependencies, lightweight
- **CSS3** - Modern styling with isolation

### Project Structure

```
search-in-another-tab/
├── manifest.json       # Extension configuration (Manifest V3)
├── content.js          # Main logic: selection detection and button management
├── styles.css          # Button styles with CSS isolation
├── PRIVACY_POLICY.md   # Privacy policy
└── README.md           # This file
```

### Permissions

- **activeTab** - Required to display the search button on the current webpage

## 🚀 Development

### Prerequisites

- Google Chrome (v88+)
- Basic understanding of Chrome Extensions

### Local Development

1. Clone the repository
2. Make your changes
3. Load the extension in Chrome (see Manual Installation)
4. Refresh the extension after making changes

### Testing

1. Load the extension in Chrome
2. Visit any webpage (e.g., Wikipedia)
3. Select some text
4. Verify the button appears and works correctly

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions

- [ ] Icon design
- [ ] Multiple search engine options (DuckDuckGo, Bing, etc.)
- [ ] Customizable keyboard shortcuts
- [ ] Settings page
- [ ] Multi-language support
- [ ] Custom search URL templates

## 🙏 Acknowledgments

- Inspired by the need for quick text searches while browsing
- Built with modern web standards and best practices

## ⭐ Show Your Support

If you find this extension useful, please consider:

- Giving it a ⭐ on GitHub
- Sharing it with others
- Contributing to the project

---

<p align="center">Made with ❤️ by Emre Can Berktaş</p>
