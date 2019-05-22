import React, { Component } from 'react';
import Monaco from 'react-monaco-editor';

export default class MonacoEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          code: '// type your code...',
        }
      }
      editorDidMount(editor, monaco) {
        console.log('editorDidMount', editor);
        editor.focus();
      }
      onChange(newValue, e) {
        console.log('onChange', newValue, e);
      }
      render() {
        const code = this.state.code;
        const options = {
          selectOnLineNumbers: true
        };
        return (
          <Monaco
            width="800"
            height="600"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
          />
        );
      }
}