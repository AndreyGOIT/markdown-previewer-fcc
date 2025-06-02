import { useState } from "react";
import { marked } from "marked";
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

marked.setOptions({
  breaks: true,
});

function App() {
  const [editorText, setEditorText] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setEditorText(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Markdown Previewer</h1>
      <div className="row">
        <div className="col-md-6 mb-3">
          <h5 className="mb-3">Editor</h5>
          <div className="border p-3 bg-light">
            <textarea
              id="editor"
              className="form-control"
              rows="20"
              value={editorText}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <h5 className="mb-3">Preview</h5>
          <div
            id="preview"
            className="border p-3 bg-light"
            dangerouslySetInnerHTML={{ __html: marked(editorText) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
