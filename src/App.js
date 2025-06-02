import { useState } from "react";
import "./App.css";

const defaultMarkdown = `
# Welcome to my Markdown Previewer!

## This is a sub-heading

Here is a [link to FreeCodeCamp](https://www.freecodecamp.org).

\`inline code\`

\`\`\`
function example() {
  return "This is a code block";
}
\`\`\`

- List item 1
- List item 2

> This is a blockquote.

**This text is bold**

![FreeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [editorText, setEditorText] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setEditorText(e.target.value);
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        value={editorText}
        onChange={handleChange}
      ></textarea>
      <div id="preview">{editorText}</div>
    </div>
  );
}

export default App;
