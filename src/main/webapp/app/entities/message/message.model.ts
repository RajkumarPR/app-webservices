import { BaseEntity, User } from './../../shared';

export class Message implements BaseEntity {
    constructor(
        public id?: number,
        public message?: any,
        public createdAt?: any,
        public chatRoom?: BaseEntity,
        public user?: User,
    ) {
    }
}
