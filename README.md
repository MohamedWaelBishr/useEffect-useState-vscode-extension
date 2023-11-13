# useEffect-useState-vscode-extension

## Overview

The `useEffect-useState-vscode-extension` is a Visual Studio Code extension that simplifies React development by providing convenient commands for adding `useEffect` and `useState` snippets to your code. With just a few keystrokes, you can enhance your React components with structured and optimized code.

## Features

- **Add useEffect Snippet:** Automatically adds a `useEffect` snippet with a console log statement for the selected variable, including file name and line number.

- **Add useState Snippet:** Generates a `useState` hook declaration with a prompt for variable name input.

## How to Use

1. **Add useEffect Snippet:**

   - Select a variable in your code.
   - Trigger the extension using the predefined shortcut (`Ctrl+Shift+P` > "Add useEffect Snippet").

2. **Add useState Snippet:**
   - Place the cursor where you want to add the `useState` hook.
   - Trigger the extension using the predefined shortcut (`Ctrl+Shift+P` > "Add useState Snippet").
   - Enter the variable name in the prompted input box.

## Configuration

By default, the extension uses the following shortcuts:

- **Add useEffect Snippet:** `Ctrl+Shift+E`
- **Add useState Snippet:** `Ctrl+Shift+U`

You can customize these shortcuts in the Visual Studio Code keyboard shortcuts settings.

## Commands

- **Add UseEffect:** `inserteffect-react-useeffect-snippet.addUseEffect`
- **Add UseState:** `inserteffect-react-useeffect-snippet.addUseState`

## Examples

### Add useEffect Snippet

Before:

```javascript
const myVariable = "Hello, React!";
```

After triggering the extension:

```javascript
const myVariable = "Hello, React!";

useEffect(() => {
  console.log(
    "📌 - [your-file-name.js] - Line [your-line-number] - Hello, React! =>",
    myVariable
  );
}, [myVariable]);
```

### Add useState Snippet

Before:

```javascript
// Your existing code
```

After triggering the extension and entering "exampleState" as the variable name:

```javascript
// Your existing code

const [exampleState, setExampleState] = useState("");
```

## License

This extension is licensed under the [MIT License](https://opensource.org/license/mit).

## Issues and Contributions

Feel free to open issues and contribute to the development of this extension on [GitHub](https://github.com/MohamedWaelBishr/useEffect-useState-vscode-extension).

---

**Happy coding!** 🚀
