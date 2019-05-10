package main

import "fmt"

// frogJump - Problem - Given three integers X,Y,D returns the minimal number of jumps from position x to position equal to or greater than y
func frogJump(X int, Y int, D int) int {
	var count int

	for X < Y {
		X += D
		count++
	}

	return count
}

func main() {
	fmt.Println(frogJump(33, 66, 3))
}
