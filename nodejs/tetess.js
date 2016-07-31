var fs=require('fs'),
	array1=[],
	array2=[],
	array3=[],
	countryPosition=0,
	populationPosition=0,
	gdpPosition=0,
	purchasePosition=0,
	Data1='',
	Data2='',
	Data3='';

var util = require('util'),
	crs=fs.createReadStream('mydata.csv'),
	ws = fs.createWriteStream('first7.json'),
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

	for(var j=0;j<all.length;j++){
		
		data1=new myColumns1(all[populationPosition],all[countryPosition]);
		data2=new myColumns2(all[gdpPosition],all[countryPosition]);
		data3=new myColumns3(all[purchasePosition],all[countryPosition]);
	}
	array1.push(data1);
	array2.push(data2);
	array3.push(data3);
	});
	
readline.on('close', function() {
				
		array1.splice(0, 1);
		array2.splice(0, 1);
		array3.splice(0, 1);
		for(var i=0;i<array1.length;i++){
			for(var j=i+1;j<array1.length-1;j++){
				
				if((parseFloat(array1[i].pop,10))>(parseFloat(array1[j].pop,10))){
					var temp=array1[i];
					array1[i]=array1[j];
					array1[j]=temp;
				}
			}
		}
		
		for(var i=0;i<array2.length;i++){
			for(var j=i+1;j<array2.length-1;j++){
				
				if((parseFloat(array2[i].gdp,10))>(parseFloat(array2[j].gdp,10))){
					var temp=array2[i];
					array2[i]=array2[j];
					array2[j]=temp;
				}
			}
		}
		
		for(var i=0;i<array3.length;i++){
			for(var j=i+1;j<array3.length-1;j++){
				
				if((parseFloat(array3[i].purchase,10))>(parseFloat(array3[j].purchase,10))){
					var temp=array3[i];
					array3[i]=array3[j];
					array3[j]=temp;
				}
			}
		}
		console.log(array1.reverse());
		//console.log(array2.reverse());
		//console.log(array3.reverse());
				
});
