import { Component, Input, OnInit } from '@angular/core'
import { UtilsService } from '../../../../services/utils.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  pagesCount = 0
  pages: number[]

  @Input() totalCount: number
  @Input() limit: number
  @Input() url: string
  @Input() currentPage: number

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalCount / this.limit)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
