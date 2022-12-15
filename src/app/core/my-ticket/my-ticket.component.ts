import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TicketList } from 'src/app/model/ticket.model';
import { TrainList } from 'src/app/model/train.model';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'tr-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.css']
})
export class MyTicketComponent implements OnInit {
  tickets: TicketList = new TicketList()
  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.trainService.getTicket().subscribe({
      next: (response: TicketList) => this.tickets = response
    })
  }

  onCancel(id: number) {
    this.trainService.deleteTicket(id).subscribe({
      next: (response: any) => this.ngOnInit(),
      error: (err: any) => console.log(err)
    })
  }
}
