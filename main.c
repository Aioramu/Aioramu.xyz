#include <stdio.h>
 int main()
 {
     printf("What do you want me to solve?\n");
     int stack[200];
     int top = 0;
     int c = getchar();
     while ( c!= EOF ) {
         switch (c) {
             case  ' ':
             case '\n':
                 break;
             case '=':
                 printf("Result = %d\n", stack[top - 1]);  top--;
                 break;
             case '+':
                stack[top-2] = stack[top-2] + stack[top-1];  top--;
                break;
             case '-':
                stack[top-2] = stack[top-2] - stack[top-1];  top--;
                break;
             case '*':
                stack[top-2] = stack[top-1] * stack[top-2];  top--;
                break;
             case '/':
               stack[top-2] = stack[top-2] / stack[top-1];   top--;
                break;
             default:
                 ungetc (c, stdin);
                 if (scanf("%d", &c) != 1) {
                     printf("There is a mistake in your input\n");
                     return -1;
                 } else {
                     stack[top] = c;
                     top++;
                 }
         }
      c = getchar();
     }
     printf("Result = %d\n",stack[top-1]);
     return 0;
 }
