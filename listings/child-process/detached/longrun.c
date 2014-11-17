#include <unistd.h>
#include <stdio.h>

int main () {
  printf("going to sleep for 20 seconds\n");
  fflush(stdout);

  sleep(20);
  printf("finished sleeping\n");
  fprintf(stderr, "error output!\n");
  return 0;
}
