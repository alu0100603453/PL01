function calculate(){
	var result = "ERROR!!";
	var temp=inp.value;
	var regexp = /([-+]?\d+(?:\.\d*)?)\s*([FfcC])/
	var m = temp.match(regexp)
	if (m){
		var num = m[1];
		var type = m[2];	
		num = parseFloat(num);
		
		if (type == 'c' || type == 'C'){
			result = (num * 9/5)+32;
			result = result.toFixed(1)+" Farenheit"; 		
		}
		else if(type == 'f' || type == 'F'){
			result = (num - 32)*5/9;
			result = result.toFixed(1)+" Celsius";
		}
		converted.innerHTML = result;
	}

}