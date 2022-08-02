import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CatCardComponent } from './components/cat-card/cat-card.component';
import { HeaderComponent } from './components/header/header.component';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AsyncImagePipe } from './pipes/async-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatCardComponent,
    HeaderComponent,
    AsyncImagePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
