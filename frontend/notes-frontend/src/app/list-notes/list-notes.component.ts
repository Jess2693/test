import  swal  from 'sweetalert2';
import { Component,OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css']
})
export class ListNotesComponent implements OnInit{
  notes:Note[];
  constructor(private noteService:NoteService,private router:Router){}
  
  ngOnInit():void{
    this.getNotes();
    }

    updateNote(id:number){
      this.router.navigate(['update-note',id]);
    }

    archivedNote(id:number,note:Note){
      note.isArchived=true;
      console.log(note.isArchived);
      this.noteService.updateNote(id,note).subscribe(data=>{
        console.log(data);
        this.getNotes()
      }
      )
    }

    deleteNote(id:number){
      Swal.fire({
        title: 'Are you sure want to remove this note?',
        text: 'You will not be able to recover this note!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      }).then((result)=>{
        if(result.value){
        
          this.noteService.deleteNote(id).subscribe(data=>{
            console.log(data);
            this.getNotes();
          })
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )

        }else if(result.dismiss === Swal.DismissReason.cancel){
          Swal.fire(
            'Cancelled',
            'Your noteis safe :)',
            'error'
          )
        }
      })
    }
    seeDetailsNote(id:number){
      console.log("aqui");
      this.router.navigate(['details-note',id]);
    }
  

    private getNotes(){
      this.noteService.getListNotes().subscribe(data => {
        this.notes=data;
      })
    }

}