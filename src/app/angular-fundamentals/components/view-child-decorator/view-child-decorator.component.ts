import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-view-child-decorator',
  templateUrl: './view-child-decorator.component.html',
  styleUrls: ['./view-child-decorator.component.css']
})
export class ViewChildDecoratorComponent implements OnInit, AfterViewInit {
  @ViewChild('regJsAccess', {read: ElementRef})//actually U can work with any and it will work too.
  regJsAccess2:ElementRef;
  showMe = "nothing";

  @ViewChild('localHtml1')
  localHtml1: ElementRef;

  @ViewChild('localHtml2', {static: true})
  localHtml2: ElementRef;
  constructor() { }

  ngOnInit(): void {
    let ivl =  setInterval(()=>{//
      console.log("regJsAccess = ", this.regJsAccess2,  "value = ", this.regJsAccess2.nativeElement.innerHTML);
      console.log("Testing with static true - after changes :  - " , this.localHtml2.nativeElement.innerHTML);


      this.showMe =  this.regJsAccess2.nativeElement.innerHTML;
    }, 2000);

    setTimeout(()=>{
      console.log("Change the value of regJS  = ");
      document.getElementById('regJs').innerHTML = "after change";

      document.getElementById('localHtml2Id').innerHTML = "after change again ";


    }, 3000);

    setTimeout(()=>{
      console.log("sht down the interval - DOES working ");
      window.clearInterval(ivl);
    }, 10000);

  }
  ngAfterViewInit(): void {
    console.log("Elements after view init. ")
    console.log("Element before listener added - " , this.localHtml1);

    // this.localHtml1.nativeElement.addEventListener("click", this.jsFunc());
    // document.getElementById("localHtml1").addEventListener("click", this.jsFunc);
    console.log("Element after listener added - " , this.localHtml1);

    // this.localHtml1.nativeElement.querySelector('localClass1')
    //   .addEventListener('click',  this.jsFunc);
    this.localHtml1.nativeElement.addEventListener('click',  this.jsFunc);

    console.log("Testing with static true :  - " , this.localHtml2.nativeElement.innerHtml);
  }


  jsFunc(event){
    alert("Js function");
  }

}
