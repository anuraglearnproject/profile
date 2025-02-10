import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

constructor(private render:Renderer2){

}

  ngOnInit(): void {
    this.render.setStyle(document.body,'background-image','url(\'/img/home.jpg\')');
  }

  ngOnDestroy(): void {
    this.render.removeStyle(document.body,'background-image');
  }
}
