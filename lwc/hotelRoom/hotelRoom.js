import { api, LightningElement } from 'lwc';

export default class HotelRoom extends LightningElement {
    @api
    hotelRoomInfo = {roomName:'A01',capacity:2};
    @api
    showHotelInfo = false;
}