module.exports = function toReadable (number) {
  str = String(number);
  if (str.length == 1){
	switch(number){
		case 0:
			return zero;
			break;
		case 1:
			return one;
			break;
		case 2:
			return two;
			break;
		case 3:
			return three;
			break;
		case 4:
			return four;
			break;
		case 5:
			return five;
			break;
		case 0:
			return zero;
			break;
		case 0:
			return zero;
			break;
	}
  }
}
