import { LightningElement } from 'lwc';

export default class LifecycleDemoParent extends LightningElement {
    show;
    constructor(){
        super();
        console.log('Parent Component constructor is invoked..!')
        this.show=false;
    }

    handleChange(evt){
        this.show=evt.detail.checked;
    }

    connectedCallback(){
        console.log('Parent Components Connected Callback invoked ...!')
    }

    renderedCallback(){
        console.log('Parent Components Render Callback invoked ...!')
    }

    disconnectedCallback(){
        console.log('Parent Components disconnected Callback invoked ...!')
    }

    errorCallback(error,stack){
        console.log('error')
        console.log(error)
        console.log('stack')
        console.log(stack)
        throw error
    }
}