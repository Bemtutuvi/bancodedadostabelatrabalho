const listaAlunos = document.getElementById('lista-alunos')

const pegarAlunos = async () => {
    const response = await fetch('http://localhost:3000/alunos');
    if (!response.ok) {
        return alert('Erro ao buscar alunos!')
    }
    const alunos = (await response.json()).rows;  // Converte a resposta em JSON
    console.log('Alunos:', alunos);       // Exibe os dados no console
    listaAlunos.innerHTML = `
        <tr>
            <th>RA</th>
            <th>Nome</th>
            <th>Foto 3x4</th>
            <th>Data de Nascimento</th>
            <th>Idade</th>
            <th>CPF</th>
        </tr>      
    `

    alunos.map((aluno) => {
        const alunoDiv = document.createElement('tr')
        alunoDiv.className = 'aluno-tr'

        alunoDiv.innerHTML = `
           <td>  ${aluno.ra}   </td> 
            <td> ${aluno.nome} </td>
            <td><img src='${aluno.foto}'></img> </td>
            <td>${aluno.nascimento} </td>
            <td>${aluno.idade} </td>
           <td> ${aluno.cpf} </td>
    `
        listaAlunos.appendChild(alunoDiv)
    })

}
