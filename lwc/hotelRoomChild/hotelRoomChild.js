import { api, LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation'
export default class HotelRoomChild extends LightningElement {
    @api
    hotelRoomInfo = {roomName:'A01',roomCapacity:2};
    @api
    showHotelInfo = false;
    @wire(CurrentPageReference) pageReference
    tileClickHandler(){
        const tileclickEvent = new CustomEvent('tileclick',{detail:this.hotelRoomInfo,bubbles:true});
        this.dispatchEvent(tileclickEvent);

        fireEvent(this.pageReference,'pubsubtileclick',this.hotelRoomInfo);
    }
}
