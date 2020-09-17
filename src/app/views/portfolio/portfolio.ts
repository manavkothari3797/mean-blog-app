import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ContectDetails } from '../../core/models';

export class Portfolio {

    contectForm: any;

    constructor() {
        this.inItContectForm();
    }

    /**
     * Intialiing ContectFrom
     */
    inItContectForm() {
        this.contectForm = new FormGroup({
            name: new FormControl(''),
            email: new FormControl(''),
            message: new FormControl('')
        });
    }

    /**
     * Set the value of ContectForm
     * @param : contectDetails
     */
    setValueOfContectForm(contectDetails: ContectDetails) {
        this.contectForm.patchValue(contectDetails);
    }

    /**
     * Get contect form value
     */
    getContectFormValue(): ContectDetails {
        return this.contectForm.value;
    }

}
