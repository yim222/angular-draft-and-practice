import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit , AfterViewChecked, AfterViewInit {

  constructor() { }
  //http://10.28.76.130:80/xpedient/kitchen/orderSubmission

  ngOnInit() {
    console.log("Checking problem with the docuemnt.getElement - from ngInit");
    let checkMe1 = document.getElementById("myId1");
    console.log("checkMe1 = ", checkMe1);
    console.log("After adding ngIf ? - it's return null " );
    this.doAllExecutiion();



  }
  //one time  after all uploaded
  ngAfterViewInit(){

    // var x =  this.useAsync();
    // console.log("x = ", x)
    this.useAsync() .then(()=>console.log("???"));

    const result = this.myAwesomeFunction();


    result.then(res => {
      console.log("lingar result = " ,res);
    });
    this.myAwesomeFunction2().then(res=>{
      console.log("what??", res);
    });
    let pro = this.functionDoIt1();
    pro.then(res=>{
      console.log("res ? ", res);

    })
    let proNot = this.functionDoIt1Not();
    console.log("proNot = ", proNot);

    this.try4();
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

  async myAsync(sec){

    setTimeout(()=>{
      console.log("I finished now after " + sec + "seconds");
      return Promise.resolve("finish");
    }, sec*1000);


  }

  async myAsync2(sec){

    setTimeout(()=>{
      console.log(" Async 2 I finished now after " + sec + "seconds");
      return Promise.resolve("finish");
    }, sec*1000);


  }
  async useAsync(){
    await this.myAsync(2);
    await this.myAsync2(1);
    console.log("do me only after the above complete");
    this.function4();
    return ;
  }
  async  myAwesomeFunction() {
    setTimeout(() => {}, 2500, "foo");

  }
  async  myAwesomeFunction2() {
    await this.myAwesomeFunction();
    console.log(     "now I can return ");
    return "now I can return "
  }

  async asyncReturn1(x:number ){
    console.log("x = ", x)
    setTimeout(() => {
      console.log("asyncReturn1 ")
    }, 3000);
    return 2 + x;
  }

  async  asyncReturn2 (x: number) {
    console.log("x = ", x)

    setTimeout(() => {
      console.log("asyncReturn2 ")

    }, 1000);
    return 3 + x;
  }

  async functionDoIt1(){
    let num :number = 6;
    num = await this.asyncReturn1(num);
    num = await this.asyncReturn2(num);
    return num;

  }


  asyncReturn1Not(x:number ){
    console.log("x = ", x)
    setTimeout(() => {}, 3000);
    return 2 + x;
  }

  asyncReturn2Not (x: number) {
    console.log("x = ", x)

    setTimeout(() => {}, 1000);
    return 3 + x;
  }

  functionDoIt1Not(){
    let num :number = 6;
    num = this.asyncReturn1Not(num);
    num =  this.asyncReturn2Not(num);
    return num;

  }

  async try6PAsyncWithTimeout() {//not working solution
    console.log("try6PAsyncWithTimeout() - not working well, so u need to return promise")
    return
    setTimeout(()=>{
      return Promise.resolve("Try 6 - without new promsie Now I finished"); //won't work
    }, 5000);

    //this will work while u put it as resolve function
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve("Now try6PAsyncWithTimeout  finished")
    //   }, 5000)
    // })
  }

  async try51PromiseWithTimeout(){

    return new Promise(resolve =>
      setTimeout(()=>{
        resolve("Now I finished")
      }, 5000));
  }




  async try4(){
    console.log("try4 ... ");

    await this.try51PromiseWithTimeout();
    try{
      await this.try5();

    }catch (e) {
      console.log("try 5 finished with error (axios ) " , e)
    }

    await this.try6PAsyncWithTimeout();

    console.log("I have waiting... ");
  }
  async try5(){
    console.log("Now some axios");
    let  http = axios.create({ timeout: 4500 });
    return http.post("http://10.28.76.130:80/xpedient/kitchen/orderSubmission", {a:"stupidData"});
  }


// returns Promise { undefined }



}//end of the class
