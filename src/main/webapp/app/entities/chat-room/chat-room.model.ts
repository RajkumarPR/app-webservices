import { BaseEntity } from './../../shared';

export class ChatRoom implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public messages?: BaseEntity[],
    ) {
    }
}
