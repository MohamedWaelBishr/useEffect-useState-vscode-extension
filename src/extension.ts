"use strict";

import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const capitalize = ([first, ...rest]: any) =>
    first.toUpperCase() + rest.join("");

  let disposable = vscode.commands.registerCommand(
    "inserteffect-react-useeffect-snippet.addUseEffect",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (editor) {
        const selection = editor.selection;
        const selectedText = editor.document.getText(selection);

        if (selectedText) {
          const currentLine = selection.end.line;
          const newPosition = new vscode.Position(currentLine + 1, 0); // Move to one line below

          const fileName = vscode.window.activeTextEditor?.document.fileName;
          const lineNumber = currentLine + 1; // Adding 1 because the line numbers are 1-indexed

          const newText =
            `\n\n\nuseEffect(() => {` +
            `console.log(` +
            `"` +
            `📌 - [${
              fileName?.split("\\")[fileName?.split("\\")?.length - 1]
            }] - Line [${lineNumber + 4}] - ${selectedText} ` +
            `=> ` +
            `"` +
            `+` +
            `${selectedText}` +
            ")" +
            `}, [${selectedText}]);\n\n`;

          editor.edit((editBuilder) => {
            editBuilder.insert(newPosition, newText);
            editor.selection = new vscode.Selection(newPosition, newPosition);
          });
        }
      }
    }
  );

  let c = vscode.commands.registerCommand(
    "inserteffect-react-useeffect-snippet.addUseState",
    async () => {
      const searchQuery = await vscode.window.showInputBox({
        placeHolder: "Enter a variable name to generate useState hook",
        prompt: "Enter a variable name",
        value: "",
      });
      if (searchQuery === "") {
        console.log(searchQuery);
        vscode.window.showErrorMessage(
          "A search query is mandatory to execute this action"
        );
      }
      if (searchQuery !== undefined) {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
          console.log();
          console.log(editor.selection.active.character);
          const currentLine = editor.selection.active.line;
          const newPosition = new vscode.Position(currentLine + 1, 0);
          const newText = `\nconst [${searchQuery}, set${capitalize(
            searchQuery
          )}] = useState('');\n`;
          editor.edit((editBuilder) => {
            editBuilder.insert(newPosition, newText);
            editor.selection = new vscode.Selection(newPosition, newPosition);
          });
        }
      }
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(c);
}

export function deactivate() {
  // Deactivation code here
}
