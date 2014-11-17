#include <unistd.h>
#include <stdio.h>
#include <sys/socket.h>
#include <string.h>

int main () {
  char buffer[80];
  int rc;

  while (rc = recv(3, buffer, sizeof(buffer), 0)) {
    printf("child received: %s", buffer);
    send(3, buffer, rc, 0);
    memset(buffer, 0, sizeof(buffer));
  }
}
