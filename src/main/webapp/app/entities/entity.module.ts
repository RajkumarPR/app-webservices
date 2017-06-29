import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WebserviceChatRoomModule } from './chat-room/chat-room.module';
import { WebserviceMessageModule } from './message/message.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        WebserviceChatRoomModule,
        WebserviceMessageModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebserviceEntityModule {}
