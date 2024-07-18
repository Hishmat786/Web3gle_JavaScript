(function() {
	var localVar = 'This is a local variable';
	console.log(localVar); 
})();

////////////////////////////////////////////////
var counter = (function() {
	var count = 0;
	return {
		increment: function() {
			count++;
		},
		decrement: function() {
			count--;
		},
		getCount: function() {
			return count;
		}
	};
})();

counter.increment();
counter.increment();

console.log(counter.getCount());

// Trying to access the private count variable directly
console.log(counter.count); 
