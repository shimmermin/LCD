module.exports = function main(num) {
	 var str=num.toString();
	var array=new Array();
	 for(let i=0;i<str.length;i++){
		 switch(str[i]){
			 case "0":
			 	array[i]=["._.",
						  "|.|",
						  "|_|"
							 ];
				break;
			 case "1":
			 	array[i]=["...",
						   "..|",
						   "..|"
							 ];
				break;
			 case "2":
			 	carray[i]=["._.",
							 "._|",
							 "|_."
							 ];
				break;
			 case "3":
			 	array[i]=["._.",
						   "._|",
						   "._|"
							 ];
				break;
			 case "4":
			 	array[i]=["...",
							"|_|",
							"..|"
							 ];
				break;
			 case "5":
			 	array[i]=["._.",
						   "|_.",
						   "._|"
							 ];
				break;
			 case "6":
			 	array[i]=["._.",
						   "|_.",
						   "|_|"
							 ];
				break;
			 case "7":
			 	array[i]=["._.",
						    "..|",
						   "..|"
							 ];
				break;
			 case "8":
			 	array[i]=["._.",
						  "|_|",
						  "|_|"
							 ];
				break;
			 case "9":
			 	array[i]=["._.",
						  "|_|",
						  "..|"
							 ];
				break;
			 }
	 }
	 for(let i=0;i<str.length;i++)
	{
		for(let j=0;j<3;j++)
		{
			console.log(array[j][i]);
			}
			console.log("\n");
		}
};