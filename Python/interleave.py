def interleave(arr1, arr2):
  i = 0
  interwoven = []
  while i < len(arr1):
    interwoven.append(arr1[i])
    interwoven.append(arr2[i])
    i+=1

  print(interwoven)

if __name__ == "__main__":
    interleave(["a", "b", "c"], ["d", "e", "f"])