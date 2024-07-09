import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { SubscriberCardComponent } from './subscriber-card/subscriber-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgForOf,
    SvgIconComponent,
    SubscriberCardComponent,
    RouterLink,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  public menuItems=[
    {
      label: 'Home',
      icon: 'home',
      link:""
    },
    {
      label: 'Chats',
      icon: 'chats',
      link:"chats"
    },
    {
      label: 'Search',
      icon: 'search',
      link:"search"
    }
  ]
}
