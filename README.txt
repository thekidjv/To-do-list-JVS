PROJETO: TO DO LIST (Lista de afazeres)


Considerações Iniciais: Este foi um projeto que agregou muito à mim, achei um ótimo desafio (Por ser meu primeiro projeto). Não sabia nada à respeito de HTML, CSS e JavaScript e nesses dias pude aprender bastante. Infelizmente não consegui cumprir todos os itens pedidos no roteiro do projeto, mas apresentarei o que fiz/entendi. 
Não achei que seria interessante aprender com cursos do básico ao avançado, por conta do tempo hábil, então este projeto foi feito baseado em pesquisas, olhando fóruns, vídeos e conversando e perguntando à devs mais experientes, então vamos lá.



0: Este projeto foi feito somente com HTML, CSS e JavaScript, mapeando a página web com HTML, estilizando com CSS e dando funções com JavaScript.


1 - HTML (index.html)
Para começar, utilizei uma estrutura de HTML básico para mapear as tags da aplicação web.

1.1 - Ícone na aba do navegador:
Seguindo, criei um folder na aba explorador do VSC (Visual Studio Code) para abrigar uma imagem como icon da aba do navegador. Este icon está mapeado na linha 8.

1.2 Título:
Título simples feito dentro do cabeçalho "<head> e <title> (linha 10) para mudar, basta mudar o conteúdo entre as tags <title>.
 

1.3 - Ícones gerais e link com CSS (styles.css):
Para poder linkar o arquivo de CSS com o escopo principal do HTML fiz um link, colocando o endereço do arquivo dentro da tag <link>

Para os ícones que utilizaria usei Font-Awesome 6.1.2, basta colocar "Font-Awesome 6.1.2 cdnjs" no google, copiar a tag destacada em laranja e colá-la abaixo do título. Assim, você poderá usar os ícones sempre que quiser via CSS, utilizando o "id" das tags.

1.4 - Link com JavaScript:
Na linha 19, fiz o link com o arquivo scripts.js de JavaScript. Usei a função defer para que o arquivo scripts.js seja executado somente após o arquivo index.html, diminuindo assim a chance de bugs na aplicação. 

1.5 - Construção da página com tags:
Da linha 20 em diante, fiz a construção da página via <head> e <body>2.
Procurei seguir um padrão, colocando tags de formulários <form> e pontuando-os através das "id", para que possamos usá-los mais à frente com CSS e JS. Perceba que a cada classe que criamos, estamos criando também objetos na página do browser (via tag <div), então você pode se guiar por isso, "id" para identificarmos os objetos logo à frente, classes para nomear <div>, estes que criarão objetos, <input> para lermos o que o usuário digitará e <button> para criarmos os botões que o usuário irá interagir. Logo abaixo (linha 65). Vamos ter um objeto para categorizar as atividades criadas, então usei a tag <select> para criar este menu e <options> para a opção dos mesmos; Este foi a árvore criada em HTML.

---------------------------------------------------------------------------------

2 - CSS:  

2.1 - Geral:
O primeiro objeto foi para definir a fonte geral do projeto e a cor. Em seguida colocamos a imagem de fundo. Existe um folder na aba explorador que tem uma cópia da imagem de fundo. Então basta copiar uma nova foto e endereçá-la no objeto "body" para mudar (linha 10). 
Utlizamos a pseudo-classe "hover" para dar uma animação de mudança de cor para quando o usuário passar o mouse sobre o ícone. 
O objeto input e select, são as fontes que aparecerão quando o usuário digitar no formulário e no menu e nas opções;
Daí em diante, as configurações dos objetos, seguem os mesmo padrão, mas há de se prestar atenção que cada objeto representa um objeto da página, mapeado pelo HTML (via classe) e, acessando essa classe conseguimos acessar detalhes da classe. Ex: #toDoList_form(<div: class) p (<p> - paragrafo dessa classe).

3 - JavaScript: 
OBS: Essa parte foi a parte onde mais tive dificuldades (pois foi meu primeiro contato com JavaScript) e onde mais pesquisei em fóruns e vídeos e perguntei para devs com mais experiência. Em algumas funções, mesmo com a função funcionando na aplicação, tive dúvidas com relação à sintaxe da mesma. Então peço perdão caso não consiga ser totalmente claro nesta parte. 

3.1 - Element Selection:
Primeiro, busquei dar acessar os objetos da página, selecionando-os via id, no DOM (Document Object Model) do projeto; via "querySelector". Usei constantes pois os dados não mudariam, independente do que houvessa na aplicação.

3.2 - Functions (for Renderization)
Mais uma vez, trabalhando em elementos do DOM, fui criando elementos de acordo com cada objeto visual presente na página, como um formulário ou botão, por exemplo; Imagine que nós, com HTML, mapeamos no sentido de escolher uma identificação para acessarmos depois; Em seguida estilizamos o espaço visual que havíamos trabalhado em HTML via CSS; Agora, estamos criando uma "alma" para estes objetos, adicionando objetos funcionais dentro dos objetos visuais, através do DOM, algo que vai fazê-los "funcionar".

O padrão utilizado foi de: 
Criar constantes e colocar elementos do DOM dentro das mesmas; mapear classes nesta DOM  através do "id" (HTML), e criar uma reação ("inner HTML) para quando um evento ocorresse; em seguida, adicionamos tudo isso no DOM utilizando método appendChild. 

Daqui em diante, para eventos mais específicos e para o LocalStorage, tive bastante dificuldades e não consegui entender, mesmo pesquisando e perguntando para outros devs; fui replicando códigos que vi em vídeos e fóruns e ia vendo por tentativa e erro, o que funcionava e buscava replicar o padrão feito deles; 

4 - Considerações Finais: 
Fazer o meu primeiro projeto foi algo incrível, me ensinou muito sobre resiliência e me deixou mais faminto por estudar desenvolvimento web e ganhar experiência tentando refazer este projeto e fazer novos; Fico triste por não ter feito e entendido algumas coisas, mas a felicidade por ter feito as partes que entendi e por ter me desafiado, e me ter feito correr atrás é absolutamente maior; estou humilde e confiante que logo vou saber como fazer e entender. Obrigado! 



 














