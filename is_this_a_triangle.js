function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}

isTriangle(0,5,6);