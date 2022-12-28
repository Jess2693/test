import { Component,OnInit  } from '@angular/core';
import { Note } from '../note';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {

  id:number;
  note:Note = new Note();
  constructor(private noteService:NoteService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.noteService.getNoteById(this.id).subscribe(data =>{
      this.note=data;
    },error => console.log(error));
  }

  goToNotesList(){
    this.router.navigate(['/notes']);

  }
  onSubmit(){
    this.noteService.updateNote(this.id,this.note).subscribe(dato => {
      this.goToNotesList();
    },error => console.log(error));
  }


}