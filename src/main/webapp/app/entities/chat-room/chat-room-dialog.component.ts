import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ChatRoom } from './chat-room.model';
import { ChatRoomPopupService } from './chat-room-popup.service';
import { ChatRoomService } from './chat-room.service';

@Component({
    selector: 'jhi-chat-room-dialog',
    templateUrl: './chat-room-dialog.component.html'
})
export class ChatRoomDialogComponent implements OnInit {

    chatRoom: ChatRoom;
    authorities: any[];
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private chatRoomService: ChatRoomService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.chatRoom.id !== undefined) {
            this.subscribeToSaveResponse(
                this.chatRoomService.update(this.chatRoom), false);
        } else {
            this.subscribeToSaveResponse(
                this.chatRoomService.create(this.chatRoom), true);
        }
    }

    private subscribeToSaveResponse(result: Observable<ChatRoom>, isCreated: boolean) {
        result.subscribe((res: ChatRoom) =>
            this.onSaveSuccess(res, isCreated), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: ChatRoom, isCreated: boolean) {
        this.alertService.success(
            isCreated ? 'webserviceApp.chatRoom.created'
            : 'webserviceApp.chatRoom.updated',
            { param : result.id }, null);

        this.eventManager.broadcast({ name: 'chatRoomListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-chat-room-popup',
    template: ''
})
export class ChatRoomPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private chatRoomPopupService: ChatRoomPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.modalRef = this.chatRoomPopupService
                    .open(ChatRoomDialogComponent, params['id']);
            } else {
                this.modalRef = this.chatRoomPopupService
                    .open(ChatRoomDialogComponent);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
