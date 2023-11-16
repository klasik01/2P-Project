import {Component, HostListener} from '@angular/core';
import {NgbCollapse, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink, RouterModule} from "@angular/router";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    NgbCollapse,
    RouterLink,
    NgClass,
    NgForOf,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    RouterModule
  ],
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  isNavbarCollapsed = true;

  menuItems = [
    {name: 'Link 1', link: '/link1'},
    {name: 'Link 2', link: '/link2'},
    {name: 'Link 3', link: '/link3'},
    {name: 'Link 4', link: '/link4'},
    {name: 'Link 5', link: '/link5'}
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 0;
  }

  toggleNavbarCollapse() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
