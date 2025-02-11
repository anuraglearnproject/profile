import { Component } from '@angular/core';
import { NgbAccordionCollapse, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  imports: [NgbAccordionModule, NgbAccordionCollapse],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
