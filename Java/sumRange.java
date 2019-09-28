class SumRange {
    public static void main(String[] args) {
        System.out.println(sumRange(22, 30));
    }

    public static int sumRange(int x, int y) {
        int p = 0;

        for (int i = x; i <= y+1; i++) {
            p += i;
        }

        return p;
    }    
}
