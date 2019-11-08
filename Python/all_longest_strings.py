def all_longest_string() -> list:
  array = ["long", "longer", "longest",
           "short",  "shorter", "shortest", "testing"]
  longest_words = []

  for word in array:
    longestWord = max(array)
    if len(word) >= len(longestWord):
        longest_words.append(word)

  return longest_words


if __name__ == "__main__":
  print(all_longest_string())
