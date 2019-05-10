const currySumThree = (x) => (y) => (z) => x + y + z

currySumThree(currySumThree(2)(2)(2))/*?*/;;
