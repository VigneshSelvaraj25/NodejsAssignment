var fs=require('fs'),
	array1=[],
	array2=[],
	array3=[],
	countryPosition=0,
	populationPosition=0,
	gdpPosition=0,
	purchasePosition=0,
	boolean=true;
	Data1='';

	var util = require('util'),
	crs=fs.createReadStream('lastdata.csv'),
	ws = fs.createWriteStream('last.json'),
	ws1 = fs.createWriteStream('last1.json'),
	ws2 = fs.createWriteStream('last2.json'),
	readline=require('readline').createInterface({
		input:crs
	});

function myColumns1(pop,cName){
	this.pop=pop;
	this.cName=cName;
};

function myColumns2(gdp,cName){
	this.gdp=gdp;
	this.cName=cName;
}

function myColumns3(purchase,cName){
	this.purchase=purchase;
	this.cName=cName;
}


readline.on('line',function(line){

	var all=line.split(',');

	for(var i=0;i<all.length;i++){
		if((all[i]!=='European Union')&&(all[i]!=='World')){
			if(all[i]==='Country Name'){
				countryPosition += i;
			}
			if(all[i]==='Population (Millions) - 2013'){
				populationPosition += i;
			}
			if(all[i]==='GDP Billions (US$) - 2013'){
				gdpPosition += i;
			}
			if(all[i]==='Purchasing Power in Billions ( Current International Dollar) - 2013'){
				purchasePosition += i;
			}
		}
	}

	for(var j=0;j<all.length;j++){
		if(all[countryPosition]!='European Union'&&all[countryPosition]!='World'){
			data1=new myColumns1(all[populationPosition],all[countryPosition]);
			data2=new myColumns2(all[gdpPosition],all[countryPosition]);
			data3=new myColumns3(all[purchasePosition],all[countryPosition]);
		}
	}
	array1.push(data1);
	array2.push(data2);
	array3.push(data3);
	data1=[];
	data2=[];
	data3=[];
	});

readline.on('close', function() {

		array1.splice(0, 1);
		array2.splice(0, 1);
		array3.splice(0, 1);

		for(var i=0;i<array1.length;i++){
			for(var j=i+1;j<array1.length-2;j++){

				if((parseFloat(array1[i].pop,10))>(parseFloat(array1[j].pop,10))){
					var temp=array1[i];
					array1[i]=array1[j];
					array1[j]=temp;
				}
			}
		}

		for(var i=0;i<array2.length;i++){
			for(var j=i+1;j<array2.length;j++){

				if((parseFloat(array2[i].gdp,10))>(parseFloat(array2[j].gdp,10))){
					var temp=array2[i];
					array2[i]=array2[j];
					array2[j]=temp;
				}
			}
		}

		for(var i=0;i<array3.length;i++){
			for(var j=i+1;j<array3.length;j++){

				if((parseFloat(array3[i].purchase,10))>(parseFloat(array3[j].purchase,10))){
					var temp=array3[i];
					array3[i]=array3[j];
					array3[j]=temp;
				}
			}
		}

		array1.splice(array1.length-2,array1.length);
		array2.splice(array2.length-2,array2.length);
		array3.splice(array3.length-2,array3.length);
		console.log(array1.reverse());
		console.log(array2.reverse());
		console.log(array3.reverse());

		ws.write(JSON.stringify(array1));
		ws1.write(JSON.stringify(array2));
		ws2.write(JSON.stringify(array3));
});
