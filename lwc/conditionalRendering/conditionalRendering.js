import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    showDiv=false;
    cityList = ["Pune","Vadodara","Ahmedabad","Hyderabad"]
    showDivHandler(evt){
        this.showDiv=evt.target.checked;
    }
}