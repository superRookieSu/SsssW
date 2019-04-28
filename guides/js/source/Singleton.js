  /* jshint esversion: 6 */ 

var Singleton = (function (){
    //SingletonObject
    var SingletonObject = (function (){
        var _instance;

        var _private_var = "[SingletonObject] i am log: ";

        function private_init() {
            return {
                publicMethod: function (logContext){
                    console.log(`${_private_var} ${logContext}`);
                },
                publicProperty: "public property"
            };
        }

        return {
            getInstance: function() {
                    if(_instance === undefined) {
                        _instance = private_init();
                    }
                    return _instance;
             }
        };
    })();


    //SingletonClass
    var SingletonClass = (function (){

        //constructor
        function _Singleton(args) {
            //private
            var _private_var = "i am log: ";

            //public
            this.name = "SingletonClass";
            this.args = args;
            this.publicMethod = function (){
                console.log(`[${this.name}]  ${_private_var} ${this.args}`);
            };
        }

        var _instance;

        var _static = {
            getInstance: function (args){
                if(_instance === undefined) {
                    _instance = new _Singleton(args);
                }
                return _instance;
            }
        };

        return _static;
    })();


    return {
        test: function (){
            //SingletonObject useage
            console.log(SingletonObject.getInstance() === SingletonObject.getInstance());    //true
            SingletonObject.getInstance().publicMethod(SingletonObject.getInstance().publicProperty);    //i am log:  public property

            //SingletonClass useage:
            console.log(SingletonClass.getInstance("SingletonClass") === SingletonClass.getInstance());    //true
            SingletonClass.getInstance().publicMethod();    //[singleton]  i am log:  123

        }
    };

})();




