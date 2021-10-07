import { LightningElement } from 'lwc';
import pic from '@salesforce/resourceUrl/ProfilePic'
export default class HelloWorldLwc extends LightningElement {
    profilePic=pic;
    greeting="Utsav";
    inputChangeHandler(evt){
        this.greeting=evt.target.value;
    }
}