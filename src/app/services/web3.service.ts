import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Web3 from 'web3';

@Injectable({
  providedIn: 'root'
})
export class Web3Service {
  public web3: Web3;
  constructor() {
    this.web3 = new Web3('HTTP://127.0.0.1:7545');
   }

  getAccounts(): Observable<any>{
  	return new Observable((observer) => {
  	  this.web3.eth.getAccounts((err, accs) => {
  	    if (err != null) {
  	      observer.error('There was an error fetching your accounts.')
  	    }

  	    if (accs.length === 0) {
  	      observer.error('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.')
  	    }

  	    observer.next(accs)
  	    observer.complete()
  	  });
  	})
  }
}
