package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println(jobScheduler(sayHi(), 1000))
	fmt.Println(jobScheduler(sayHi(), 2000))
	fmt.Println(jobScheduler(sayHi(), 3000))
	fmt.Println(typeof(jobScheduler))
}

func sayHi() string {
	return "Hi!"
}

func jobScheduler(job interface{}, jobTimer int) interface{} {
	time.Sleep(time.Duration(jobTimer) * time.Millisecond)
	return job
}

func typeof(v interface{}) string {
	return fmt.Sprintf("%T", v)
}

/*
	This problem was asked by Apple.
	Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/
