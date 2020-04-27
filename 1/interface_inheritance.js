var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.printLogMessage = function (msg) {
        this.dateTime = new Date();
        console.log(msg + " logged at " + this.dateTime);
    };
    return Account;
}());
var acc = new Account();
acc.printLogMessage("Account Created Successfully");
