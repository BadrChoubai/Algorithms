package main

import "fmt"

func permutateArray(input []string, permutation []int) []string {
	mutation := make([]string, len(input))
	for i := 0; i < len(input); i++ {
		mutation[i] = input[permutation[i]]
	}
	return mutation
}

func main() {
	fmt.Println(permutateArray([]string{"A", "B", "C", "D", "E", "F"}, []int{0, 2, 1, 3, 5, 4}))
}
