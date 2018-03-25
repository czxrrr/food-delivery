import { Component, OnInit, Inject } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import { Problem} from '../../models/problem.model';


@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem;
  constructor(
    private route: ActivatedRoute,
    @Inject("data") private data
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.problem = this.data.getProblem(+params['id'])

    })
  }

}
