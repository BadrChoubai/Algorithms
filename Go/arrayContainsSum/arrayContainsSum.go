package main

import "fmt"

func arrayContainsSum(array []int, target int) bool {
	for i, j := 0, len(array)-1; i < j; i, j = i+1, j-1 {
		if array[i]+array[j] == target {
			return true
		}
	}
	return false
}

func main() {
	fmt.Println(arrayContainsSum([]int{10, 15, 3, 7}, 17))
}

/*
	This problem was part of the Daily Coding Problem newsletter - 04.10.19
	Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
	For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/
