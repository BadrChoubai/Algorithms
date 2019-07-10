def sumArr(arr=[1, 2, 3, 4, 5]):
    i = 0
    result = 0
    while i < len(arr):
        result += arr[i]
        i += 1
    print(result)


if __name__ == "__main__":
	sumArr()
