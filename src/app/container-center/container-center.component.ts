import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControl, Validator, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-container-center',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './container-center.component.html',
  styleUrl: './container-center.component.scss'
})
export class ContainerCenterComponent {

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.MortgageAcount.value);
    
  }

  MortgageAcount = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$') ]);
  MortgageTeam = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$') ]);
  InterestRate = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$') ]);

  repayment = new FormControl('', Validators.required);
  interestOnly = new FormControl('', Validators.required);

  selectedOption: string | null = null;
  showWarning = false;

  validation() {
    if (!this.selectedOption) {
      this.showWarning = true;
    } else {
      this.showWarning = false;
      // Lógica para calcular el repayment u otra acción
      console.log("Opción seleccionada: ", this.selectedOption);
    }
  }
}
