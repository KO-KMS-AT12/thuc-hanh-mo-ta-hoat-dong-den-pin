const LOG = console.log;

let Battery = function () {

    this.setEnegry = function (enegry) {
        this.enegry = enegry;
    };
    this.getEnegry = function () {
        return this.enegry;
    }
    this.decreaseEnegry = function () {
        if (this.enegry > 0) {
            this.enegry--;
        }
    }
};

let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    };

    this.getBatteryInfo = function () {
        return this.battery.getEnegry();
    };

    this.light = function () {
        if (this.status) {
            LOG("Lighting");
        } else {
            LOG("Not lighting");
        }
    };

    this.turnOn = function () {
        this.status = true;
    };

    this.turnOff = function () {
        this.status = false;
    }
};

var battery = new Battery();
battery.setEnegry(80);

var flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

LOG("Battery info:" + flashLamp.getBatteryInfo());
flashLamp.light();

LOG("Turn on : ")
flashLamp.turnOn();
flashLamp.light();
LOG("Battery info:" + flashLamp.getBatteryInfo());

LOG("Turn off :")
flashLamp.turnOff();
flashLamp.light();