def interleave(arr1, arr2):
  i = 0
  interloven = []
  while i < len(arr1):
    interloven.append(arr1[i])
    interloven.append(arr2[i])
    i+=1

  print(interloven)

if __name__ == "__main__":
    interleave(["a", "b", "c"], ["d", "e", "f"])