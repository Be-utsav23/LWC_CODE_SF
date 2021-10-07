import { LightningElement } from 'lwc';

export default class HotelRoomsParent extends LightningElement {

    selectedHotelRoom;
    hotelRoomsInfo;
    constructor(){
        super();
        this.selectedHotelRoom={}
        this.hotelRoomsInfo = [{roomName:'A01',roomCapacity:4},
        {roomName:'A02',roomCapacity:2},
        {roomName:'B01',roomCapacity:4},
        {roomName:'B02',roomCapacity:2},
        {roomName:'C01',roomCapacity:4},
        {roomName:'C02',roomCapacity:2},]

        this.template.addEventListener('tileclick',this.onTileClickHnadler)
    }

    onTileClickHnadler=(evt)=>{
        this.selectedHotelRoom=evt.detail;
        console.log(this.selectedHotelRoom.roomName+' '+this.selectedHotelRoom.roomCapacity);
    }

}