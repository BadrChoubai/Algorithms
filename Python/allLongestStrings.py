def allLongestStr():
  array = ["long", "longer", "longest",
           "short",  "shorter", "shortest", "testing"]
  longestWords = []

  for word in array:
    longestWord = max(array)
    if len(word) >= len(longestWord):
        longestWords.append(word)

  return longestWords


if __name__ == "__main__":
  print(allLongestStr())
