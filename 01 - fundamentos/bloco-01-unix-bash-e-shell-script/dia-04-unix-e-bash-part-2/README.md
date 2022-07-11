Exercícios
Parte I - Comandos de Input e Output
Navegue até a pasta unix_tests;

Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal.nerd_face

Conte quantas linhas tem o arquivo skills2.txt.

Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

Crie um novo arquivo chamado phrases2.txt pelo o terminal e adicione algumas frases de suas escolha.

Conte o número de linhas que contêm as letras br.

Conte o número de linhas que não contêm as letras br.

Adicione dois nomes de países ao final do arquivo phrases2.txt.

Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

Ordene o arquivo bunch_of_things.txt.

Parte II - Permissões
Navegue até a pasta unix_tests;

Rode o comando ls -l e veja quais as permissões dos arquivos;

Mude a permissão do arquivo bunch_of_things.txt para que todos os usuários possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

Resultado esperado: -rw-rw-rw- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto com o comando ls -l;
Resultado esperado: -r--r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

Volte à permissão do arquivo bunch_of_things.txt para a listada inicialmente utilizando o comando chmod 644 bunch_of_things.txt.
Resultado esperado: -rw-r--r-- 1 ana ana 1860 ago 13 11:39 bunch_of_things.txt

Parte III - Processos & Jobs
Liste todos os processos;

Agora use o comando sleep 30 &;

Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo);

Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background;

Crie um processo em background que rode o comando sleep por 300 segundos.

Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente.

Você deve criá-los em foreground (sem usar o &) e suspendê-los (apertando ctrl+z) após cada um começar a executar.

Verifique que apenas o processo sleep 300 está em execução com o comando jobs. Suspenda a execução desse processo.
Você vai precisar trazer o processo para foreground ( fg ) e suspendê-lo ( ctrl+z ), ou enviar um sinal).

Retome a execução do processo sleep 100 em background com o comando bg.

Termine a execução de todos os processos sleep (mate os processos).
