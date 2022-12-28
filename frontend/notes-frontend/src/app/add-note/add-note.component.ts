import { Component, OnInit} from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],

})
export class AddNoteComponent {
  note:Note =new Note();
  constructor(private noteService:NoteService,private rourter:Router){}

  saveNote(){
    this.noteService.addNote(this.note).subscribe(data => {console.log(data); 
      this.goListNotes();},error=>console.error(error));
  }

  
  ngOnInit():void{
    console.log(this.note);
    }

  goListNotes(){
    this.rourter.navigate(['/notes']);
  }

onSubmit(){
  this.saveNote();
}


}
