import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Train } from 'src/app/model/train.model';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'tr-train-info',
  templateUrl: './train-info.component.html',
  styleUrls: ['./train-info.component.css']
})
export class TrainInfoComponent implements OnInit {
  train: Train = new Train()
  constructor(private route: ActivatedRoute,private trainService: TrainService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      console.log(params['id'])
      this.trainService.getTrain(params['id']).subscribe({
        next: (response: Train) => this.train = response
      })
    })
  }
}
