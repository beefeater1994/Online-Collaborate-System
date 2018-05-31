import { Component, OnInit } from '@angular/core';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor: any;

  defaultContent = {
    'Java': 'public example Example { \n' +
    '    public static void main(String[] args) { \n' +
    '        //Type your code here\n' +
    '    }\n' +
    '}\n'
  }

  constructor() { }

  ngOnInit() {
    this.editor = ace.edit("editor");
    this.editor.setTheme("ace/theme/eclipse");
    this.editor.getSession().setMode("ace/mode/java");
    this.editor.setValue(this.defaultContent["Java"]);
    this.editor.$blockScrolling = Infinity;
  }

}