package main

func reverseString(str string) string {
	letters := []rune(str)
	for i, j := 0, len(letters)-1; i < j; i, j = i+1, j-1 {
		letters[i], letters[j] = letters[j], letters[i]
	}
	return string(letters)
}

func main() {
	reverseString("go-lang")
}
