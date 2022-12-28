import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ArchivedNotesComponent } from './archived-notes/archived-notes.component';
import { DetailsNoteComponent } from './details-note/details-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';


const routes: Routes=[
  {path:'notes',component:ListNotesComponent},
  {path:'',redirectTo:'notes',pathMatch:'full'},
  {path:'add-note',component:AddNoteComponent},
  {path:'archived-notes',component:ArchivedNotesComponent},
  {path: 'details-note/:id',component:DetailsNoteComponent},
  {path:'update-note/:id',component:UpdateNoteComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }