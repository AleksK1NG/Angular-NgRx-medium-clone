import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  constructor() {}

  @Input() totalCount: number
  @Input() limit: number
  @Input() url: string
  @Input() currentPage: number

  ngOnInit(): void {}
}
