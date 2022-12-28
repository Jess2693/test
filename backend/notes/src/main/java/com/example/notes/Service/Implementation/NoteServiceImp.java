package com.example.notes.Service.Implementation;

import com.example.notes.Model.Note;
import com.example.notes.Repository.NoteRepository;
import com.example.notes.Service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class NoteServiceImp implements NoteService {
    @Autowired
    private NoteRepository noteRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Object> listNotes(boolean IsArchived ) {
        return noteRepository.findByIsArchived(IsArchived);
    }

    @Override
    @Transactional
    public Note save(Note note) {
        return  noteRepository.save(note);
    }

    @Override
    @Transactional
    public void delete(Note note) {
        noteRepository.delete(note);
    }



    @Override
    @Transactional(readOnly = true)
    public Note findNote(Long id, Note note) {
        return noteRepository.findById(note.getId()).orElse(null);
    }

    @Override
    public Optional<Note> findNotebyId(Long id) {
        return noteRepository.findById(id);
    }

}
