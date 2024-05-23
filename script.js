function fibonacci(num) {
// your code here
	if (num<=1) {
		return 0;
	}
	if (num==2) {
		return 1;
	}
	let fibo;
	let oldno=0;
	let newno=1;
	while(num>2){
		fibo=oldno+newno;
		oldno=newno;
		newno=fibo;
		num--;
	}
	return fibo;
}

module.exports = fibonacci;
