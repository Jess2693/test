package com.example.notes.Service;

import com.example.notes.Model.Note;

import java.util.List;
import java.util.Optional;

public interface NoteService {
    public List<Object> listNotes(boolean b);
    public Note save(Note note);
    public void delete(Note note);
    public Note findNote(Long id, Note note);

    public Optional<Note> findNotebyId(Long id);

}
