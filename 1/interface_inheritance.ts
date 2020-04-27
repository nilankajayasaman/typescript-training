interface Log {
  dateTime: Date;
  message: string;
}

class Account implements Log {
  dateTime: Date;
  message: string;

  printLogMessage(msg: string) {
    this.dateTime = new Date();
    console.log(msg + " logged at " + this.dateTime);
  }
}

var acc = new Account();
acc.printLogMessage("Account Created Successfully");
