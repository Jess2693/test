
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { NoteService } from './../note.service';
import swal  from 'sweetalert2';


@Component({
  selector: 'app-details-note',
  templateUrl: './details-note.component.html',
  styleUrls: ['./details-note.component.css']
})
export class DetailsNoteComponent implements OnInit  {
  id:number;
  note:Note;
  constructor(private route:ActivatedRoute,private noteService:NoteService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.note = new Note();
    this.noteService.getNoteById(this.id).subscribe(dato => {
    this.note = dato;
    });
  }

}
