package com.example.notes.Repository;

import com.example.notes.Model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoteRepository extends JpaRepository<Note,Long> {
    List<Object> findByIsArchived(boolean IsArchived);
}
