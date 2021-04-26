import { Component, OnInit } from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../Services/contact.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  load: boolean;
  constructor(private conService: ContactService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.contact = new Contact();
    this.load = false;
  }

  submite(): void
  {
    this.load = true;
    this.conService.createContact(this.contact).subscribe(value => {
      this.toastr.success( ' Message envoyé avec succès' , 'SUCCÉS' );
      this.contact = new Contact();
      this.load = false;
    }, error => {
      this.toastr.error('Réessayer Ultérieurement', 'ERREUR');
      console.log(error.message);
      this.load = false;
      });
  }

}
