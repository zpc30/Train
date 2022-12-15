import { Component, OnInit } from '@angular/core';
import { Station, TrainList } from 'src/app/model/train.model';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'tr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  trains: TrainList = new TrainList()
  stations: Station[] = [];
  constructor(private trainService: TrainService) { }

  params= {
    filter: {
      from: '',
      to: ''
    }
  }

  ngOnInit(): void {
    this.getTrains()
    this.trainService.getStation().subscribe({
      next: (response: Station[]) => this.stations = response
    })
  }

  getTrains() {
    this.trainService.getAll(this.params).subscribe({
      next: (response: TrainList)=> this.trains = response
    })
  }

  fromSelChange(event: any) {
    this.params.filter.from = event.target.value
    this.getTrains()
  }
  toSelChange(event:any) {
    this.params.filter.to = event.target.value
    this.getTrains()
  }
}
