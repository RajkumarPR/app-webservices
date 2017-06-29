import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ChatRoomComponent } from './chat-room.component';
import { ChatRoomDetailComponent } from './chat-room-detail.component';
import { ChatRoomPopupComponent } from './chat-room-dialog.component';
import { ChatRoomDeletePopupComponent } from './chat-room-delete-dialog.component';

import { Principal } from '../../shared';

export const chatRoomRoute: Routes = [
    {
        path: 'chat-room',
        component: ChatRoomComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'webserviceApp.chatRoom.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'chat-room/:id',
        component: ChatRoomDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'webserviceApp.chatRoom.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const chatRoomPopupRoute: Routes = [
    {
        path: 'chat-room-new',
        component: ChatRoomPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'webserviceApp.chatRoom.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'chat-room/:id/edit',
        component: ChatRoomPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'webserviceApp.chatRoom.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'chat-room/:id/delete',
        component: ChatRoomDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'webserviceApp.chatRoom.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
