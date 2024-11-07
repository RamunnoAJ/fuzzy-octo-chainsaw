#include <stdio.h>
#define MAX_ARREGLO

int puedeFormarse(int nums[MAX_ARREGLO], int n, int x);

int main() {
  int numeros[MAX_ARREGLO] = {1, 4, 3, 9}, numeros2[MAX_ARREGLO] = {1, 2, 4, 4},
      sumaRequerida = 8;

  printf("Solución con C utilizando while anidados:\n");
  printf("[1, 4, 3, 9] es %s\n",
         puedeFormarse(numeros, 4, sumaRequerida) ? "verdadero" : "falso");
  printf("[1, 2, 4, 4] es %s\n",
         puedeFormarse(numeros2, 4, sumaRequerida) ? "verdadero" : "falso");

  return 0;
}

int puedeFormarse(int nums[MAX_ARREGLO], int n, int x) {
  int i, j;

  i = 0;
  while (i < n) {
    j = 0;
    while (j < n) {
      if (i != j && nums[i] + nums[j] == x) {
        return 1;
      }
      j++;
    }
    i++;
  }

  return 0;
}
