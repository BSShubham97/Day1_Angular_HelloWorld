import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "HelloWorld";
  imgUrl= "";
  url: string | URL | undefined;
  userName: string = "";
  nameError: string= "";

 ngOnInit(): void{
  this.title = 'HELLO FROM BRIDGELABZ'
  this.imgUrl = "assets/BridgeLabz-2.jpg"
  this.url="https://www.bridgelabz.com/";  
}
 onClick($event: any){
  console.log("SAVE BUTTON IS CLICKED",$event);
  window.open(this.url, "_blank");
}
 onInput($event:any){
  console.log("Change Event Occured!", $event.data);
  const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  console.log(nameRegex.test(this.userName));
  
  if(nameRegex.test(this.userName)){
    this.nameError = "";
    return; 
  }
  this.nameError = "NAME IS INCORRECT";
}
}
