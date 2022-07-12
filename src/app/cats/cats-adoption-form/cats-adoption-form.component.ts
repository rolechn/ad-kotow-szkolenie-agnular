import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-cats-adoption-form',
  templateUrl: './cats-adoption-form.component.html',
  styleUrls: ['./cats-adoption-form.component.scss']
})
export class CatsAdoptionFormComponent implements OnInit {

  @Input()
  catsName: string;

  @Output()
  closeMe = new EventEmitter<boolean>();

  adoptionForm!: FormGroup;
  private readonly PHONE_REGEX = /^[0-9\-\s]+$/;

  constructor() {
  }

  ngOnInit(): void {
    this.setUpForm();
  }

  get name() {
    return this.adoptionForm.get('name')!;
  }

  get phone() {
    return this.adoptionForm.get('phone')!;
  }

  submit(): void {
    this.closeMe.emit(true);
  }

  cancelAdoptionForm(): void {
    this.closeMe.emit(false);
  }

  private setUpForm() {
    this.adoptionForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      phone: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(7),
          this.validatePhone()
        ], updateOn: 'blur'
      })
    });
  }

  private validatePhone(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const val: string = control.value;

      if (!val) {
        return {required: true};
      } else if (!val.match(this.PHONE_REGEX)) {
        return {pattern: true};
      }
      return null;
    };
  };

}
