# /
# 	Given a string and an integer k 
# 	you need to reverse the first k characters for every 2k characters counting from the start of the string. 
# 	If there are less than k characters left, reverse all of them. 
# 	If there are less than 2k but greater than or equal to k characters, 
# 	then reverse the first k characters and left the other as original. 
# /

# def reverseString(string: str, k: int) -> str:
# 	array = list(string)
# 	for i in range(0, len(array), k*2):
# 		array[i:i+k] = reversed(array[i:i+k])

# 	return array

# /
# Write a function that reverses a string. The input string is given as an array of characters char[].
# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
# You may assume all the characters consist of printable ascii characters.
# /

def reverseStr(strArr: [str]) -> str:
	strArr[:]=strArr[::-1]
	return strArr
