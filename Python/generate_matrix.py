def generate_matrix(height: int, width: int) -> list:
	matrix = []

	def generate_rows(height: int) -> None:
		for _ in range(height):
			matrix.append([])

	def generate_columns(height: int, width: int) -> None:
		for i in range(height):
			while(len(matrix[i]) < width):
				matrix[i].append(i)

	generate_rows(height)
	generate_columns(height, width)

	print_matrix(matrix)
	return matrix


def print_matrix(matrix: [int]) -> None:
	for i in range(len(matrix)):
		print(matrix[i])


matrix = generate_matrix(3, 3)
