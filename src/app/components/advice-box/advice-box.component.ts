import { AdviceService } from '../../services/advice.service';
import { Component, OnInit } from '@angular/core';
import { adviceResponse } from '../../model/adviceResponse';
import { catchError, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-advice-box',
  templateUrl: './advice-box.component.html',
  styleUrls: ['./advice-box.component.scss']
})
export class AdviceBoxComponent implements OnInit {
  request: Subscription;
  haveResponse: Promise<boolean>;
  adviceObject: adviceResponse;

  constructor(private adviceService: AdviceService){}

  ngOnInit(): void {
    this.getAdviceToShow();
  }

  public getAdviceToShow(): void{
    this.request = this.adviceService.getAdvice()
    .pipe(catchError(error => {
      console.log(error);
      alert('It happened a problem to show an advice, please check your connection and try again.');

      return of();
    }))
    .subscribe((data: adviceResponse) => {
      this.adviceObject = data;
      this.haveResponse = Promise.resolve(true);

      this.request.unsubscribe();
    });
  }

  public onChangeAdvice(): void{
    this.getAdviceToShow();
  }
}
