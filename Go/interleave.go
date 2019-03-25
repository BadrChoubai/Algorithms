package main

// This algorithm will assume that both arrays being passed in are the same length
func interleave(arr1 []string, arr2 []string) []string {
	interweave := make([]string, 0)

	i := 0
	for i < len(arr1) {
		interweave = append(interweave[:], arr1[i], arr2[i])
		i++
	}

	return interweave
}
