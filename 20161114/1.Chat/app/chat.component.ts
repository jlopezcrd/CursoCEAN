import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from './services/chat.service';

@Component({
    selector: 'send-message',
    template: `<input type="text" [(ngModel)]="message" placeholder="Mete mens" 
                (keyup.enter)="sendMessage()">
                <h3>Messages</h3>
                <div *ngFor="let message of messages">
                    {{message.text}}
                </div>`
})
export class ChatComponent implements OnInit, OnDestroy {
    
    message: string;
    connection: any;
    messages: any = [];

    constructor(private chatService:ChatService){

    }

    sendMessage(event: any) {
        console.log(this.message);
        this.chatService.sendMessage(this.message);
        this.message = '';
    }

    ngOnInit(){
        this.connection = this.chatService.getMessages().subscribe((message) => {
            console.log(message);
            this.messages.push(message);
        });
    }

    ngOnDestroy(){
        this.connection.unsubscribe();
    }
}