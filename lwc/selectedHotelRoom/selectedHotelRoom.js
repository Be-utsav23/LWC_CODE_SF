import { wire,LightningElement } from 'lwc';
import { registerListener,unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation'
export default class SelectedHotelRoom extends LightningElement {
    sHotelRoom={};

    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener('pubsubtileclick',this.hotelRoomSelectHandler,this)
    }

    hotelRoomSelectHandler(payload){
        console.log(payload);
        this.sHotelRoom=payload;
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
}