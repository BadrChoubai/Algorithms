class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b);
  }
}

var sif = new SmallestIntegerFinder();

sif.findSmallestInt([1, -23, 23, 53, -10])