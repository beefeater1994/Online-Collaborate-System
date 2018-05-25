import {Component, Inject, OnInit} from '@angular/core';
import { Problem } from '../../models/problem.model';
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  problems: Problem[] = [];
  sunscriptionProblems: Subscription;

  constructor(@Inject('data') private data) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(): void {
    this.sunscriptionProblems = this.data.getProblems()
      .subscribe(problems => this.problems = problems);
  }
}
