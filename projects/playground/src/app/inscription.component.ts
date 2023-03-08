import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Angular Avancé !</h1>
    
      <!-- Event Binding -> (submit)="" -->
      <form>
        <!--       <form ngNoForm (submit)="onSubmit($event)">  -->
        <!-- La directive NgForm se greffe à tous les <form> qui n'ont pas l'attribut ngNoForm -->
        <input
          required
          bannedEmail="test@test.com"
          email
          ngModel
        
          name="email"
          type="email"
          id="email"
          class="form-control mb-2"
          placeholder="Votre adresse email"
        />
      
      
     
       
          <input
            required
            minlength="3"
            ngModel
           
            type="password"
            name="password"
            id="password"
            class="form-control mb-2"
            placeholder="Mot de passe"
          />
        
          <input
            required
            minlength="3"
            ngModel
           
            type="password"
            name="confirm"
            id="confirm"
            class="form-control mb-2"
            placeholder="Confirmation du mot de passe"
          />
         
  
        <button class="btn btn-success">Inscription</button>
      </form>
    </div>
  `,
  styles: [],
})
export class AppComponentInscription {
  @ViewChild('email') //chercher variable dans le HTML
  emailInput?: ElementRef<HTMLInputElement>;

  title = 'playground';

  onSubmit(form: NgForm) {
    //event.preventDefault(); //eviter le rechargement de la page donc le comportement par défaut est annulé //The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

    if (form.invalid) {
      return;
    }
    console.log(form.value);
  }
}
