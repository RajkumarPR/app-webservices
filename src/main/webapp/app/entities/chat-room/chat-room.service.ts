import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ChatRoom } from './chat-room.model';
import { ResponseWrapper, createRequestOption } from '../../shared';

@Injectable()
export class ChatRoomService {

    private resourceUrl = 'api/chat-rooms';

    constructor(private http: Http) { }

    create(chatRoom: ChatRoom): Observable<ChatRoom> {
        const copy = this.convert(chatRoom);
        return this.http.post(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    update(chatRoom: ChatRoom): Observable<ChatRoom> {
        const copy = this.convert(chatRoom);
        return this.http.put(this.resourceUrl, copy).map((res: Response) => {
            return res.json();
        });
    }

    find(id: number): Observable<ChatRoom> {
        return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
            return res.json();
        });
    }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }

    private convert(chatRoom: ChatRoom): ChatRoom {
        const copy: ChatRoom = Object.assign({}, chatRoom);
        return copy;
    }
}
