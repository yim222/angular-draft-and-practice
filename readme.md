U can see here 
full project : 

https://github.com/jhades/angular2-rxjs-observable-data-services

The main place that Using subject :
https://github.com/jhades/angular2-rxjs-observable-data-services/blob/master/src/state/TodoStore.ts

The extended tutorial : 

https://blog.angular-university.io/how-to-build-angular2-apps-using-rxjs-observable-data-services-pitfalls-to-avoid/#RxJs%20Subject%20and%20how%20to%20use%20it

<h1>Description of all commits :</h1>
<p>See the logs I have 2 test subscirption functions.</p>
<h2>Try1</h2>
Wrote on the commit message also - Try1- not working well. It's pass on the next - the Observable values, not the returned
<h2>Try2 </h2>
Try2- Now it's work with regualr subscribe of the osbservable to the subject that turn on its subscribers.
<h2>Try3</h2>
This way U try to wrap the subject next to this - not working.Next still will do "undefined". The subscribe is working and success to subscribe it to the subscribers. 
<h2>TRY 4 </h2>
This type of implementation 
this.subj1.subscribe({
  // next: this.getData3ForSubject
  // // next: this.obs1,
  next: (()=>{
    this.test();
  })
})

is the same as 
this.nbaService.subj1.subscribe(this.test2);
This won’t solve the problem. 
Ok, anyway – the simple use of subscribe(subject) is gave the desire result. In basic way . U can subscribe many functions to one subject, then just subscribe it to the wanted observable. 
<h2>TRY5 –</h2>
 It's now working by next from isnide the subscriber
<h2>TRY6 – </h2>
 Actually it's the same as previous, only in short way
<h2>TRY7 – </h2>
Try7- Basic use of behavior subject. Call the subscribe without next too
