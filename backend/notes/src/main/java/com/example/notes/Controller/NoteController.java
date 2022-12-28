package com.example.notes.Controller;
import com.example.notes.Model.Note;
import com.example.notes.Service.NoteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200/")
public class NoteController {

    @Autowired
    NoteService noteService;

    @GetMapping("/notesa")
    public List<Object> getNotes() {
        return noteService.listNotes(true);
    }

    @GetMapping("/notes")
    public List<Object> getNotesArchived() {
        return noteService.listNotes(false);
    }
    @PostMapping("/notes")
    public Note saveNote(@RequestBody Note note){
        note.setDate(LocalDate.now());
        note.setIsArchived(false);
        return noteService.save(note);
    }

    @GetMapping("/notes/{id}")
    public ResponseEntity<Note> getNoteById(@PathVariable Long id){
        Note note = noteService.findNotebyId(id).orElseThrow(null);
        return ResponseEntity.ok(note);
    }
    @PutMapping("/notes/{id}")
    public ResponseEntity<Note> updateNote(@PathVariable Long id,@RequestBody Note dataNote){
        Note note = noteService.findNote(id,dataNote);
        note.setTitle(dataNote.getTitle());
        note.setDescription(dataNote.getDescription());
        note.setDate(LocalDate.now());
        note.setIsArchived(dataNote.getIsArchived());
        Note updateNote = noteService.save(note);
        return ResponseEntity.ok(updateNote);
    }

    @GetMapping("/")
    public LocalDate initial() throws ParseException {
        return LocalDate.now();
    }

    @DeleteMapping("/notes/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteNoteById(@PathVariable Long id){
        Note note = noteService.findNotebyId(id).orElseThrow(null);
        noteService.delete(note);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

}
