import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ArchivedNotesComponent } from './archived-notes/archived-notes.component';
import { DetailsNoteComponent } from './details-note/details-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    ArchivedNotesComponent,
    DetailsNoteComponent,
    UpdateNoteComponent,
    ListNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
