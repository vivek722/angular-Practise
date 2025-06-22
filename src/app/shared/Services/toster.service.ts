import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TosterMessageService {

  constructor(private totster_service:ToastrService) { }

  public Success(message:any){
     this.totster_service.success(message);
  }
  public warning(message:any){
    this.totster_service.warning(message);
  }
  public danger(message:any){
    this.totster_service.error(message);
  }
  public information(message:any){
    this.totster_service.info(message);
  }
}
