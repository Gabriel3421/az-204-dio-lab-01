import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function validaCpf(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    try {
        let data;
        try {
            data = (await request.json()) as { cpf: string }
        } catch (error) {
            data = null
        }
        if (!data) {
            return {
                status: 400,
                body: "Informe o cpf.",
            };
        }
        if (validarCPF(data.cpf)) {
            return {
                status: 200,
                body: "cpf valido",
            };
        } else {
            return {
                status: 422,
                body: "cpf invalido",
            };
        }

    } catch (error) {
        context.error('An error occurred:', error);
        return {
            status: 500,
            body: 'Internal server error.',
        };
    }
};

function validarCPF(cpf: string): boolean {
    // Remove caracteres não numéricos
    const sanitizedCPF = cpf.replace(/\D/g, '');

    // Validações básicas de tamanho e sequência repetida
    if (sanitizedCPF.length !== 11 || /^(\d)\1+$/.test(sanitizedCPF)) {
        return false;
    }

    // Função para calcular o dígito verificador
    const calcularDigito = (cpfArray: number[], pesoInicial: number): number => {
        const soma = cpfArray.reduce((acum, num, index) => acum + num * (pesoInicial - index), 0);
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    // Converte o CPF para um array de números
    const cpfNumeros = sanitizedCPF.split('').map(Number);

    // Calcula e valida o primeiro dígito verificador
    const primeiroDigito = calcularDigito(cpfNumeros.slice(0, 9), 10);
    if (primeiroDigito !== cpfNumeros[9]) {
        return false;
    }

    // Calcula e valida o segundo dígito verificador
    const segundoDigito = calcularDigito(cpfNumeros.slice(0, 10), 11);
    return segundoDigito === cpfNumeros[10];
}

app.http('validaCpf', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: validaCpf
});
