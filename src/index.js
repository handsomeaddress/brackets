module.exports = function check(str, bracketsConfig) {
	bracketsConfig = bracketsConfig.map((x)=> x.join(''));
	for (let i = 0; i < bracketsConfig.length;){
		if(str.includes(bracketsConfig[i])){
			str = str.split(bracketsConfig[i]).join('');
			i = 0;
			continue;
		}
		i++;
	}
	return str ? false : true;
}