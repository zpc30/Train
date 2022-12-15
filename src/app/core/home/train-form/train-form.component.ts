import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ticket } from 'src/app/model/ticket.model';
import { Train } from 'src/app/model/train.model';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'tr-train-form',
  templateUrl: './train-form.component.html',
  styleUrls: ['./train-form.component.css']
})
export class TrainFormComponent implements OnInit {
  train: Train = new Train()
  form: FormGroup = new FormGroup({
    number: new FormControl({value: '',disabled: true}),
    from: new FormControl({value: '',disabled: true}),
    departure: new FormControl({value: '',disabled: true}),
    to: new FormControl({value: '',disabled: true}),
    arrival: new FormControl({value: '',disabled: true}),
    price: new FormControl({value: '',disabled: true}),
    name: new FormControl('',Validators.required),
    birthDate: new FormControl('',Validators.required)

  })
  constructor(private route: ActivatedRoute,private trainService: TrainService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.trainService.getTrain(params['id']).subscribe({
        next: (response: Train) => {
          this.train = response
          this.form.patchValue(this.train)

        }
      })
    })
  }
  onBuy() {
    let ticket = new Ticket(this.train)
    ticket.name = this.form.value.name
    ticket.birthDate = this.form.value.birthDate
    this.trainService.postTicket(ticket).subscribe({
      next: (response: any) => {
        this.form.reset()
        this.ngOnInit()
      },
      error: (err: any) => console.log(err)
    })
  }

}
