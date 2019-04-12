package main

import "fmt"

func fibonacci(n int) int {
	fibNMinusTwo := 0
	fibNMinusOne := 1
	fibN := 2
	for i := 3; i < n; i++ {
		fibNMinusTwo = i - 2
		fibNMinusOne = i - 1
		fibN = fibNMinusTwo + fibNMinusOne
	}
	return fibN
}

func main() {
	fmt.Println(fibonacci(100))
}
