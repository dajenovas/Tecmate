import { Component } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-organisers',
  templateUrl: './organisers.component.html',
  styleUrl: './organisers.component.scss'
})
export class OrganisersComponent {
  phone = faPhone;
}
