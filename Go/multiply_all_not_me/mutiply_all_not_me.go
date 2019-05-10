package main

func getProductOfArray(input []int) int {
	product := 1
	for _, num := range input {
		product *= num
	}
	return product
}

func multiplyAllNotMe(input []int) []int {
	product := getProductOfArray(input)
	for i := 0; i < len(input); i++ {
		input[i] = product / input[i]
	}
	return input
}

func main() {
	multiplyAllNotMe([]int{1, 2, 3, 4, 5}) // [120, 60, 40, 30, 24];
	multiplyAllNotMe([]int{3, 2, 1})       // [2, 3, 6]; // [2, 3, 6];
}

/*
	This problem was part of the Daily Coding Problem newsletter - problem number 2
	Given an array of integers, return a new array such that each element at index i of the new array
	is the product of all the numbers in the original array except the one at i.

	For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
	If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/
