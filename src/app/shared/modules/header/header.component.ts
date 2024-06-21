import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export default class HeaderComponent {
  constructor(private authService:AuthService){}

  logout(event:Event){
    event.preventDefault
    this.authService.logout()
  }
}
