module.exports = function toReadable(number) {
		str = String(number);
		if (str.length === 1) {
			switch (number) {
				case 0:
					return 'zero';
					break;
				case 1:
					return 'one';
					break;
				case 2:
					return 'two';
					break;
				case 3:
					return 'three';
					break;
				case 4:
					return 'four';
					break;
				case 5:
					return 'five';
					break;
				case 6:
					return 'six';
					break;
				case 7:
					return 'seven';
					break;
				case 8:
					return 'eight';
					break;
				case 9:
					return 'nine';
					break;
			}
		}
		if (str.length === 2) {
			let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
			let tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
			if (str[0] == 1) {
				let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
				if (str[1] == 0) {
					return tn[0];
				} else if (str[1] == 1) {
					return tn[1];
				} else if (str[1] == 2) {
					return tn[2];
				} else if (str[1] == 3) {
					return tn[3];
				} else if (str[1] == 4) {
					return tn[4];
				} else if (str[1] == 5) {
					return tn[5];
				} else if (str[1] == 6) {
					return tn[6];
				} else if (str[1] == 7) {
					return tn[7];
				} else if (str[1] == 8) {
					return tn[8];
				} else if (str[1] == 9) {
					return tn[9];
				}
			}
			if (str[0] == 2) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			if (str[0] == 3) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			if (str[0] == 4) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			if (str[0] == 5) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			if (str[0] == 6) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			if (str[0] == 7) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			if (str[0] == 8) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			if (str[0] == 8) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			if (str[0] == 9) {
				if (str[1] == 0) {
					return tw[(str[0] - 2)];
				} else {
					let result = tw[(str[0] - 2)] + ' ' + numberToWord(+str[1]);
					return result;
				}
			}
			function numberToWord(x) {
				switch (x) {
					case 1:
						return 'one';
						break;
					case 2:
						return 'two';
						break;
					case 3:
						return 'three';
						break;
					case 4:
						return 'four';
						break;
					case 5:
						return 'five';
						break;
					case 6:
						return 'six';
						break;
					case 7:
						return 'seven';
						break;
					case 8:
						return 'eight';
						break;
					case 9:
						return 'nine';
						break;
				}
			}
		}
		if (str.length === 3) {
			let dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
			let tw = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

			result = dg[(str[0])] + ' hundred ';
			if (str[1] == 0) {
				if (str[2] == 0) {
					return result;
				} else {
					result = result + numberToWord(+str[2]);
					return result;
				}
			} else {
				result = result + tw[(str[1] - 2)] + ' ' + numberToWord(+str[2]);
				return result;
			}
			function numberToWord(x) {
				switch (x) {
					case 1:
						return 'one';
						break;
					case 2:
						return 'two';
						break;
					case 3:
						return 'three';
						break;
					case 4:
						return 'four';
						break;
					case 5:
						return 'five';
						break;
					case 6:
						return 'six';
						break;
					case 7:
						return 'seven';
						break;
					case 8:
						return 'eight';
						break;
					case 9:
						return 'nine';
						break;
				}
			}
		}
	}
