import { Component } from '@angular/core';
interface MenuItem {
  title: string,
  route: string,
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  public reactiveMenu: MenuItem[] = [
    { title: 'Home', route: './' },
    { title: 'Frases', route: './frases' },
    { title: 'Lista', route: './list' },
    { title: 'Adivinar', route: './guess' },
    // { title: 'Modal', route: './modal' }
  ];

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth' }
  ]
}
