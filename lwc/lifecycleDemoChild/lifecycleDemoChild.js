import { LightningElement } from 'lwc';

export default class LifecycleDemoChild extends LightningElement {
    simpleText;

    constructor(){
        super();
        console.log("Child Constructor is called");
        this.simpleText='default value';

    }
    
    changeHandler(evt){
        this.simpleText=evt.target.value;
    }

    connectedCallback(){
        console.log('Connected Callback invoked...!')
        throw new Error('OOps Error is Find')
    }

    renderedCallback(){
        console.log('rendered Callback invoked...!')
    }

    disconnectedCallback(){
        console.log('Discconed callback invoked..!')
    }
}