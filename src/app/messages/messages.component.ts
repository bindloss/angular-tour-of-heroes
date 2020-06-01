import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
  // messageService MUST BE PUBLIC because you are going to bind it to the template
  // angular only binds to public component properties

  ngOnInit(): void {
  }
}
