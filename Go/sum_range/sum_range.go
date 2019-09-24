package main

import "fmt"

func sumRange(x int, y int) int {
	p := 0
	for i := x; i <= y+1; i++ {
		fmt.Println(p)
		p += i
	}
	return p
}

func main() {
	sumRange(10, 20)
}
