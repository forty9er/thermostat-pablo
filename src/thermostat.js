function Thermostat() {
	this.temp = 20; 
}

Thermostat.prototype.temperature = function() {
	return this.temp;
}; 

Thermostat.prototype.up = function() {
	this.temp += 1;
};