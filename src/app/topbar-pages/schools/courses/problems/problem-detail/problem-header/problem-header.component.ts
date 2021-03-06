import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Problem} from "../../shared/problem.model";

@Component({
  selector: 'app-problem-header',
  templateUrl: './problem-header.component.html',
  styleUrls: ['./problem-header.component.sass'],
  encapsulation: ViewEncapsulation.Native
})
export class ProblemHeaderComponent{
  @Input() problem: Problem;
  constructor() { }

}
