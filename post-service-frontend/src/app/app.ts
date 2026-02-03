import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostList } from "./components/post-list/post-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostList],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true,
})
export class App {

}
