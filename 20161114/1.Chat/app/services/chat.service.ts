import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import * as io from 'socket.io-client';

export class ChatService {

    private socket: any; 
    private url: string = "http://192.168.3.1:8000";

    sendMessage(message:string){
        this.socket.emit("add-message", message);
    }

    getMessages(){
        let observable = new Observable((observer:any) => {
            this.socket = io(this.url);
            this.socket.on("message", (data:any) => {
                observer.next(data);
            });

            return () => {
                this.socket.disconnect();
            }
        });

        return observable;
    }

}