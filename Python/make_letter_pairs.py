def make_letter_pairs(input_array: list) -> list:
    letter_pairs_array = []

    for string in input_array:
        letter_pairs = []
        for i in range(len(string) - 1):
            letter_pairs.append(string[i:i+2])
        letter_pairs_array.append(letter_pairs)

    return letter_pairs_array


if __name__ == "__main__":
    print(make_letter_pairs(
        ["badr", "sophie", "youssef", "yassin", "dounia", "noor"]))
