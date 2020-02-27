import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-history',
  templateUrl: './note-history.component.html',
  styleUrls: ['./note-history.component.css']
})
export class NoteHistoryComponent implements OnInit {

  notes = [
    {
      description: "Personal note function may look like this. (High priority checked)",
      date: "February 6, 2020",
      highPriority: true
    },
    {
      description: "Example of another note.",
      date: "January 26, 2020",
      highPriority: false
    },
    {
      description: "Something else is needed for this emply space.",
      date: "January 20, 2020",
      highPriority: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
