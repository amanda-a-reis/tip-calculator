O projeto pode ser visualizado no site: https://bityli.com/fbqVZ
Além disso, ele está disponível em: https://amanda-a-reis.github.io/tip-calculator/

A ideia era criar uma calculadora de gorjetas, que recebe o valor total da conta, uma porcentagem para a gorjeta e o número de amigos envolvidos.
A calculadora retorna o total de gorjeta que será dado por cada amigo e também o valor total por pessoa.

O design e proposta foram fornecidos pelo site Front End Mentor.

Para esse projeto foi utilizado o conceito de responsividade.

Abaixo, uma imagem do projeto concluído:

min-width: 768px

![01](https://user-images.githubusercontent.com/92919925/156383157-75576ef0-b021-43bf-92df-8f308ea6f017.png)

max-width: 768px

![02](https://user-images.githubusercontent.com/92919925/156383510-93b57839-3d55-4910-8778-686959f9b78e.png)

Os botões da calculadora são bloqueados, ou seja, só pode ser selecionado um botão de cada vez, e para selecionar outro botão é preciso desativar o que foi ativado primeiro.
Há também uma adaptação da visualização dos resultados. Quando o valor é grande, ele é arrastado para a esquerda ou tem sua fonte diminuída, com intuito de não ultrapassar as margens da caixa.

O usuário também pode entrar com um valor customizado de gorjeta digitando a quantidade desejada em "Custom".

![03](https://user-images.githubusercontent.com/92919925/156384060-8e440d2b-3dae-408b-9b90-61c0e00eb3ca.png)

Caso o usuário deseje recomeçar os cálculos, ele pode apertar o botão "Reset", que fará com que todos os campos sejam zerados (com exceção do botão, que precisa ser desativado manualmente).

Se o usuário tentar entrar com um valor que seja diferente de números ou o ponto "." para operações decimais, terá sua ação limitada pelo programa, que não permite tais caracteres.
