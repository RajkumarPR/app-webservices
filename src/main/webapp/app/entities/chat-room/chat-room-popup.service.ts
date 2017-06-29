import { Injectable, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ChatRoom } from './chat-room.model';
import { ChatRoomService } from './chat-room.service';

@Injectable()
export class ChatRoomPopupService {
    private isOpen = false;
    constructor(
        private modalService: NgbModal,
        private router: Router,
        private chatRoomService: ChatRoomService

    ) {}

    open(component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.chatRoomService.find(id).subscribe((chatRoom) => {
                this.chatRoomModalRef(component, chatRoom);
            });
        } else {
            return this.chatRoomModalRef(component, new ChatRoom());
        }
    }

    chatRoomModalRef(component: Component, chatRoom: ChatRoom): NgbModalRef {
        const modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.chatRoom = chatRoom;
        modalRef.result.then((result) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        }, (reason) => {
            this.router.navigate([{ outlets: { popup: null }}], { replaceUrl: true });
            this.isOpen = false;
        });
        return modalRef;
    }
}
