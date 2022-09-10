const Modal = {
    open(){
        // Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close(){
        // fechar o modal
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

//objetos

const transactions = [
    {
        id:1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2023',
    },

    {
        id:1,
        description: 'website',
        amount: 20000,
        date: '23/01/2023',
    },

    {
        id:1,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2023',
    },
]


const Transaction = {
    incomes() {
        // Somar entradas
    },
    expenses() {
        // somar saídas
    },
    total() {
        // entradas - saídas
    }
}