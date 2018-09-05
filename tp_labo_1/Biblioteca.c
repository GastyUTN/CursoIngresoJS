
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

float suma(float numeroUno, float numeroDos)
{

    float resultado;
    resultado = numeroUno + numeroDos;
    return resultado;

}

float resta(float numeroUno, float numeroDos)
{

    float resultado;
    resultado = numeroUno - numeroDos;
    return resultado;

}

float multiplicacion(float numeroUno, float numeroDos)
{

    float resultado;
    resultado = numeroUno * numeroDos;
    return resultado;

}

float division(float numeroUno, float numeroDos)
{

    float resultado;
    while (numeroDos == 0)
    {
        printf("No se puede dividir por 0. Ingrese un divisor mayor a 0: ");
        scanf("%f", &numeroDos);
    }
    resultado = (float) numeroUno / numeroDos;

    return resultado;

}
int calcularFactorial(int numeroUno)
{
    int factorial;
    if(numeroUno==0)
    {
        factorial=1;
    }
    else
    {
        factorial= numeroUno*calcularFactorial(numeroUno-1);

    }
    return factorial;
}

int calcularFactorialDos(int numeroDos)
{
    int factorial;
    if(numeroDos==0)
    {
        factorial=1;
    }
    else
    {
        factorial= numeroDos*calcularFactorial(numeroDos-1);

    }
    return factorial;
}

