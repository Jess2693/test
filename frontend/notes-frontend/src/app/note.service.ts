import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  //get list notes from backend

  constructor(private httpClient:HttpClient) { }

  //get List notes
  getListNotes():Observable<Note[]>{
    return this.httpClient.get<Note[]>('/api/notes');
  }
  getListNotesA():Observable<Note[]>{
    return this.httpClient.get<Note[]>('/api/notesa');
  }
  updateNote(id:number, note:Note): Observable<Object>{
    console.log(note)
    return this.httpClient.put('/api/notes/'+`${id}`,note);
  }

  deleteNote(id:number):Observable<Object>{
return this.httpClient.delete('/api/notes/'+`${id}`);
  }

  getNoteById(id:number):Observable<Note>{
    console.log("aquui")
    return this.httpClient.get<Note>('/api/notes/'+`${id}`);
  }

  //add new note
  addNote(note:Note) : Observable<Object>{
    return this.httpClient.post('/api/notes',note);
    
  }
}
