import { Component, OnInit } from '@angular/core';
import axios from 'axios';
//TODO - gitting.
@Component({
  selector: 'app-draft-area',
  templateUrl: './draft-area.component.html',
  styleUrls: ['./draft-area.component.css']
})
export class DraftAreaComponent implements OnInit {

  constructor() { }
  //http://10.28.76.130:80/xpedient/kitchen/orderSubmission

  ngOnInit() {
    console.log("Checking problem with the docuemnt.getElement - from ngInit");
    let checkMe1 = document.getElementById("myId1");
    console.log("checkMe1 = ", checkMe1);
    console.log("After adding ngIf ? - it's return null " );
    this.doAllExecutiion();
  }

  ngAfterViewChecked(){
    // console.log("Checking problem with the docuemnt.getElement - from ngAfterViewChecked");
    // let checkMe2 = document.getElementById("myId2");
    // console.log("checkMe2 = ", checkMe2);
    // console.log("After adding ngIf (ngAfterViewChecked)? - it's return Good! " );
    console.log("ngAfterViewChecked - Happen in each change on the view")
  }

  postSomethingWithAxios():any {
   let  http = axios.create({ timeout: 2500 });
    return http.post("http://10.28.76.130:80/xpedient/kitchen/orderSubmission", {a:"stupidData"});

  }

  function1():Promise<any>{
    console.log("function number 1");
    return Promise.resolve("Function 1 succeed");
  }

  function2(num){
    console.log("function number 2");
    if (num % 2 ==0 )return Promise.resolve("function 2 succeed");
    else return Promise.reject("function 2 succeed");
  }
  function3(){
    console.log("function number 3 without promise ? can I do then also ? -YES (but for timeout U probaly will need Promise.");


  }

  function4(){
    console.log("function number 4");

  }

  doAllExecutiion(){
    this.postSomethingWithAxios()
      .then((res)=>
      {
        console.log("post success", res);
        return this.function1();
          // .then(()=>{
          //   console.log("function1  succeed");
          //   this.function2();
          // })
          // .catch(()=>{
          //   console.log("function1  failed");
          //   this.function2();
          // });

      })
      .catch(()=>{
          console.log("post failed");
          return this.function1()

          ;
        }
      ).then((res)=>{
        console.log("here ? ", res)
      return this.function2(2);
    })
      .then((res)=>{
        console.log("continuing catch")
        this.function3();
      })
      .catch((res)=>{
        console.log("continuing catch")
        this.function3();

      })
      .then(()=>{
        console.log("continuing without promise - then ");
        this.function4();
        }
      )
      .catch(()=>{
        console.log("continuing without promise - Catch ");
        this.function4();

      }
    )

  }

}
