
#include <stdio.h>
#include <stdlib.h>
#include "Biblioteca.h"



int main()
{
    int opcion;
    float numeroUno;
    float numeroDos;
    float resultado;




    do{

        system("cls");
        printf("Menu");
        printf("\n1- Ingresar primer numero(A= %.2f)", numeroUno);
        printf("\n2- Ingresar segundo numero(B= %.2f)", numeroDos);
        printf("\n3- Sumar(A+B).");
        printf("\n4- Restar(A-B).");
        printf("\n5- Multiplicar(A*B).");
        printf("\n6- Dividir(A/B).");
        printf("\n7- Factorial(A!).");
        printf("\n8- Factorial(B!).");
        printf("\n9- Salir.");
        printf("\nSeleccione opcion: ");
        scanf("%d", &opcion);

        switch(opcion)
        {
            case 1:
                printf("Ingrese el primer numero\n");
                scanf("%f", &numeroUno);
                break;

            case 2:
                printf("Ingrese el segundo numero\n");
                scanf("%f", &numeroDos);
                break;

            case 3:
                resultado = suma(numeroUno, numeroDos);
                printf("\nEl resultado de la suma es %.2f\n\n", resultado);
                break;

            case 4:
                resultado = resta(numeroUno, numeroDos);
                printf("\nEl resultado de la resta es %.2f\n\n", resultado);
                break;

            case 5:
                resultado = multiplicacion(numeroUno, numeroDos);
                printf("\nEl resultado de la multiplicacion es %.2f\n\n", resultado);
                break;

            case 6:
                resultado = division(numeroUno, numeroDos);
                printf("\nEl resultado de la division es %.2f\n\n", resultado);
                break;

            case 7:
                resultado=calcularFactorial(numeroUno);
                printf("\n El de A es %.2f\n\n" , resultado);
                break;

            case 8:
                resultado=calcularFactorialDos(numeroDos);
                printf("\n El de B es %.2f\n\n" , resultado);
                break;

            default:
                printf("\nOpcion incorrecta. Las opciones disponibles van desde el 1 al 8.\n\n");
                break;
        }
        system("pause");
    }while(opcion != 8);

    return 0;

    }

