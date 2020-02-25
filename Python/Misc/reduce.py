import functools


def reduce_array(array: [int], operator: str) -> int:
	def _sum(array: [int]) -> int:
		i = 0
		result = 0
		while i < len(array):
			result += array[i]
			i += 1

		return result
					

	def _difference(array: [int]) -> int:
		i = 0
		result = 0
		while i < len(array):
			result -= array[i]
			i += 1

		return result

	def _product(array: [int]) -> int:
		i = 0
		result = 1
		while i < len(array):
			result *= array[i]
			i += 1

		return result


	def _quotient(array: [int]) -> int:
		i = 0
		result = 1
		while i < len(array):
			result /= array[i]
			i += 1

		return result


	def output(operator: str) -> int:
		return {
			'+': _sum(array),
			'-': _difference(array),
			'*': _product(array),
			'/': _quotient(array)
		}[operator]

	print(output(operator))
	return output(operator)


if __name__ == "__main__":
	test = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
	reduce_array(test, "+")
	reduce_array(test, "-")
	reduce_array(test, "*")
	reduce_array(test, "/")
