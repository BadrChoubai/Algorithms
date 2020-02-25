#
# 	Given a string and an integer k
# 	you need to reverse the first k characters for every 2k characters counting from the start of the string.
# 	If there are less than k characters left, reverse all of them.
# 	If there are less than 2k but greater than or equal to k characters,
# 	then reverse the first k characters and left the other as original.
#


def reverse_string_one(string: str, k: int) -> str:
	string_as_array = list(string)
	for i in range(0, len(string_as_array), k*2):
		string_as_array[i:i+k] = reversed(string_as_array[i:i+k])

	return ''.join(string_as_array)

#
# Write a function that reverses a string.
#


def reverse_string_two(string: str) -> str:
	return string[::-1]


if __name__ == "__main__":
	reversed_one = reverse_string_one("Badr Choubai", 4)
	reversed_two = reverse_string_two("Badr Choubai")
	print(reversed_one, reversed_two)
