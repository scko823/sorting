//merge sort
function mergeSort (array){
	if (array.length<2){
		return array
	}
	let middle = Math.floor(array.length/2)
	let left = array.slice(0,middle)
	let right = array.slice(middle)
	return merge( mergeSort(left), mergeSort(right) )

	function merge(arr1, arr2) {
		const results = []
		while(arr1.length && arr2.length){
			arr1[0]<arr2[0]?results.push(arr1.shift()):results.push(arr2.shift())
		}

		return results.concat(arr1, arr2)
	}
}

//bubble sort
function bubbleSort(array){
	for (let i=array.length;i>=0;i--){
		for (let j=0; j<i-1; j++){
			if (array[j]>array[j+1]){
				let temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
			}
		}
	}
	return array
}
