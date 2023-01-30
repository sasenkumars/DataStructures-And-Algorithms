// arr = [2,3,7,8,10]
// sum = 5
// search for any subset exist if we add that subset so get sum as 5

let arr = [2,3,7,8,10];
let sum = 2;
let n = arr.length;

let matrix = []
for(let i = 0; i < n+1; i++){
		matrix[i] = []
}

//intiliazation
for(let i = 0; i< n+1; i++){
	for(let j = 0; j< sum+1; j++){
		if(j == 0){
			matrix[i][j] = true;
		}else if(i == 0){
			matrix[i][j] = false;
		}
	}
}

// Choice Digram
for(let i = 1; i< n+1; i++){
	for(let j = 1; j< sum+1; j++){
		if(arr[i-1] <= j){
			matrix[i][j] = matrix[i-1][j-arr[i-1]] || matrix[i-1][j]; 
		}else {
			matrix[i][j] = matrix[i-1][j]
		}
	}
}

console.table(matrix);
console.log(matrix[n][sum])