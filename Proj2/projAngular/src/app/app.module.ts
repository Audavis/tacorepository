import { AppBootstrapModule } from './modules/app-bootstrap/app-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { MiddleComponent } from './components/middle/middle.component';
import { BottomComponent } from './components/bottom/bottom.component';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MiddleComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
