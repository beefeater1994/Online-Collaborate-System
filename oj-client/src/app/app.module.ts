import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProblemListComponent } from './components/problem-list/problem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';
import { EditorComponent } from './components/editor/editor.component';
import { DataService } from './services/data.service';
import {AuthService} from "./services/auth.service";
import { routing } from './app.routes'
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent,
    ProblemDetailComponent,
    NewProblemComponent,
    NavbarComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [{
   provide: 'data',
   useClass: DataService
  },
    {
      provide: 'auth',
      useClass: AuthService
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
