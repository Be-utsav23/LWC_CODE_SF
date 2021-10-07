import {api, LightningElement } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    value=['Red']
    options=[
        {label:'Red Marker',value:'Red'},
        {label:'Blue Marker',value:'Blue'},
        {label:'Green Marker',value:'Green'},
        {label:'Black Marker',value:'Black'}
    ]
    
    @api
    selectCheckBox(checkboxvalue){
        const selectCheckBox = this.options.find(cb => {
            return cb.value===checkboxvalue;
        })

        if(selectCheckBox){
            this.value=selectCheckBox.value;
            return "Marker is selected !"
        }

        return "OOps Marker is not present"
    }
}