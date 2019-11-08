def sum_array(arr: list) -> int:
    i = 0
    result = 0
    while i < len(arr):
        result += arr[i]
        i += 1

    return result


if __name__ == "__main__":
	sum_array([1, 2, 3, 4, 5])
