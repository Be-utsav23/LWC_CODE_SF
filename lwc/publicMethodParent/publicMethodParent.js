import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value='Red';
    onInputChangeHandler(evt){
        this.value=evt.target.value;
    }

    checkBoxSelectHandler(){
        const childCmp=this.template.querySelector('c-public-method-child');
        const msg=childCmp.selectCheckBox(this.value);
        console.log(msg);
    }
}