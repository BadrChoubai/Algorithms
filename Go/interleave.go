package main

// This algorithm will assume that both arrays being passed in are the same length
func interleave(arr1 []string, arr2 []string) []string {
	interweave := make([]string, 0)

	i := 0
	for i < len(arr1) {
		slice := interweave[:]
		interweave = append(slice, arr1[i], arr2[i])
		i++
	}

	return interweave
}

func main() {
	arr1 := []string{"a", "b", "c"}
	arr2 := []string{"d", "e", "f"}
	interleave(arr1, arr2)
}
