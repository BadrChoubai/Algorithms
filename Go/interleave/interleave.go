package main

func interleave(arr1 []string, arr2 []string) []string {
	interweave := make([]string, 0)

	i := 0
	for i < len(arr1) {
		interweave = append(interweave[:], arr1[i], arr2[i])
		i++
	}

	return interweave
}

func main() {
	interleave([]string{"A", "B", "C"}, []string{"d", "e", "f"})
}
