function numMaior(a, b){

for (var i = 0; i < b.length; i++) {
	if(a[i]>b[i]){
		return a[i];
	}else{
		return b[i];
	}
}
}

numMaior('3,2,5,9','12,1,1,1');
