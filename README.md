<h1 align = "center"> ✨ LAMA  ✨ </h1 >   

  


<div align = "center">
<img src="https://user-images.githubusercontent.com/31759644/178175911-5328d197-5705-4b41-be8b-1b64532b1282.png"  width="450" height="150" /> 
</div>
<div align = "center">Sejam bem vindos ao LAMA (Labenu Music Award), um festival  com várias bandas famosas para a formatura da turma noturna Joy  da Labenu. </div>

</br>

    🚨 Sobre 
</br>

Este é um projeto elaborado em equipe  que busca reproduzir as  funcionalidades de um sistema para o gerenciamento completo de shows musicais. Consistindo basicamente no desenvolvimento de um backend voltado para  um padrão de arquitetura de microserviços e integrado com o banco de dados MySql. 

</BR>

**- status concluído** ✅

</BR>


    TIME
</div>
<ul>      
<a href="https://github.com/karlanatany"><li>Karla Natany Gonçalves Bolzoni</li></a>
<a href ="https://github.com/laismedrado"><li>Laís Medrado Soares da Silva</li></a>
<a href ="https://github.com/LTxai"><li>Lucas Txai Medeiros da Fonceca</li></a>
</ul>
</BR>
 

     🖋 Funcionalidades

</BR>

-  **Cadastro :**  Para se cadastrar, é necessário passar um email, um nome e uma senha, e também uma função dentro do sistema. Você pode ser um cliente (usuário normal) ou um administrador do sistema (admin). O usuário deve poder se logar automaticamente após o cadastro. 
</BR>

-  **Login:** Para realizar o login, basta informar seu e-mail e a sua senha. E o retorno contém  um token de autenticação do usuário.
</BR>

-  **Endpoint de registrar banda:** registro de  todas as bandas que participarão dos três dias de shows. Para isto é necessário as seguintes informações: nome, gênero musical principal a qual ela se identifica e o nome de um responsável (que pode ser qualquer membro dela). Não podem existir duas bandas com o mesmo nome. Somente administradores podem registrar bandas.
</BR>

- **Endpoint de visualização de detalhes sobre a banda:** Esse endpoint recebe  o id ou o nome da banda e retornar as todas as informações salvas sobre ela.
</BR>

- **Endpoint de adicionar um show a um dia:**  Para cadastrar um show, precisa do id da banda, o dia (sexta, sábado ou domingo) e o horário em que ela irá se apresentar. Havendo uma validação para indicar se o horário é válido (ou seja, se está entre 08h e 23h). Caso já exista um show marcado para o dia e o horário em questão, retorna-se  um erro. </BR>
</BR>

- **Endpoint de pegar todos os shows de uma data:**  Recebe um dia e retorna todos os shows daquela data , mostrando somente o nome da banda e o gênero musical principal. 



</BR>
 </BR>  

     🔧 Ferramentas:



- Knex
- MySql
- Typescript
- Express
- Node.js 
- Cors


___
