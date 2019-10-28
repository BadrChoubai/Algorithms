class RotateArray {
	public static void main(String[] args) {
		int[] x = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
		solution(x, -3);

	}

	private static int[] solution(int[] input, int rotation) {
		// assign the length of the input array to a variable length;
		int length = input.length;

		// If this condition is true return the input, there is no need to rotate it.
		if (length == 0 || rotation % length == 0)
			return input;

		// limit and make positive;
		rotation = ((rotation % length) + length) % length; 

		int[] dest = new int[length];
		
		for (int i = 0; i < length; i++) {
			int index = (i + rotation) % length;
			dest[index] = input[i];
		}

		return dest;
	}
}