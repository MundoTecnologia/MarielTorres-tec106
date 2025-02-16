function TolkingManager() {
    const workLinkBD = JSON.parse(localStorage.getItem('workLinkBD'))

    const { users, online } = workLinkBD
    const { conection } = online
    const { accept } = conection
    const ul = document.querySelector(".list-my-connection-chat")

    ul.innerHTML = ''

    users.forEach((user) => {
        accept.forEach((accepted) => {
            if (accepted == user.id) {
                const li = document.createElement('li')
                li.setAttribute("class", "anime-left")
                li.innerHTML = `
                    <div class="card-img-user-chat">
                        <div>
                            <span>${user.firstName[0]}${user.lastName[0]}</span>
                        </div>
                    </div>
                    <div class="card-content-user-chat">
                        <strong>${user.firstName} ${user.lastName}</strong>
                        <small>
                            <i class="bi bi-award"></i>
                            ${user.career.title}
                        </small>
                        <button onclick="AppendHeaderUserConnected(this)">
                            <i class="bi bi-chat"></i>
                            <span>Puxar assunto</span>
                        </button>
                    </div>
                `
                ul.appendChild(li)
                li.setAttribute('data-id', user.id)
            }
        })
    })

}

function AppendHeaderUserConnected(button) {
    const li = button.closest('li')
    const userId = li.getAttribute('data-id')
    localStorage.setItem('selectedUserId', userId)
    ListarMensagensDoUsuarioClicado(userId)
    const workLinkBD = JSON.parse(localStorage.getItem('workLinkBD'))
    const { users } = workLinkBD
    const cardUserConected = document.querySelector(".card-user-conected")
    const CardUserLeft = document.querySelector(".img-profile-user-chat")
    const HeaderConnected = document.querySelector("#header-user-online")
    const userFirstName = document.querySelector(".user-firstname")
    const userLastName = document.querySelector(".user-lastname")
    const listCareer = document.querySelector(".list-career")
    const descUserConnected = document.querySelector(".desc-user-online")
    const countConnectedUser = document.querySelector(".count-conection-user-online")

    users.forEach((user) => {
        if (user.id == userId) {
            cardUserConected.innerHTML = `${user.firstName[0]}${user.lastName[0]}`
            CardUserLeft.innerHTML = `${user.firstName[0]}${user.lastName[0]}`
            HeaderConnected.innerHTML = `${user.firstName} ${user.lastName}`
            HeaderConnected.setAttribute('data-id', user.id)
            userFirstName.innerHTML = `${user.firstName}`
            userLastName.innerHTML = `${user.lastName}`
            listCareer.innerHTML = `${user.career.title}`
            descUserConnected.innerHTML = `${user.description}`
            countConnectedUser.innerHTML = `${user.conection.accept.length}`
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    TolkingManager()
    const savedUserId = localStorage.getItem('selectedUserId')
    if (savedUserId) {
        const savedButton = document.querySelector(`li[data-id="${savedUserId}"] button`)
        if (savedButton) {
            AppendHeaderUserConnected(savedButton)
        }
    }
})
function MessagesContent() {
    const contentChat = document.querySelector('.content-chat')
    const workLinkBD = JSON.parse(localStorage.getItem('workLinkBD'))
    const { users, online } = workLinkBD
    
    const messageTextArea = document.querySelector('#messageTextArea')
    const messageContent = messageTextArea.value.trim()

    if (messageContent === '') {
        return alert('Digite uma mensagem')
    }

    const selectedUserId = localStorage.getItem('selectedUserId')
    if (!selectedUserId) {
        contentChat.innerHTML = `
            <div class="card-content-user-chat">
                <img src="../../Users/Baobabay/Downloads/worlinkJPG.jpg" alt="Imagem do Worklink">
                <small>
                    <i class="bi bi-award"></i>
                    As mensagens serão listadas aqui
                </small>
            </div>
        `
    } else {
        const message = {
            senderId: online.id,
            receiverId: selectedUserId,
            content: messageContent,
            timestamp: `${new Date().getHours()}:${new Date().getMinutes()}`
        }

        
        if (!online.message) {
            online.message = []
        }
        online.message.push(message)

        
        const receiverUser = users.find(user => user.id == selectedUserId)
        if (receiverUser) {
            if (!receiverUser.message) {
                receiverUser.message = []
            }
            receiverUser.message.push(message)
        } else {
            return alert('Usuário receptor não encontrado')
        }

       
        workLinkBD.online = online

        
        const index = users.findIndex(user => user.id == selectedUserId)
        users[index] = receiverUser
        const inde = workLinkBD.users.findIndex( (user) => user.id == online.id )
        workLinkBD.users[inde] = online
        
        localStorage.setItem('workLinkBD', JSON.stringify(workLinkBD))

        
        ListarMensagensDoUsuarioClicado(selectedUserId)

        
        messageTextArea.value = ''
    }
}function ListarMensagensDoUsuarioClicado(selectedUserId) {
    const workLinkBD = JSON.parse(localStorage.getItem('workLinkBD'))
    const { users, online } = workLinkBD
   const ul = document.createElement('ul')
    const contentChat = document.querySelector('.content-chat')
    ul.id = 'list-chat'
    contentChat.innerHTML = ''

    contentChat.appendChild(ul)
    
    const selectedUser = users.find(user => user.id == selectedUserId)
    

    selectedUser.message.forEach(message => {
        
        const li = document.createElement('li')
        if (message.senderId == online.id) {
            
            li.classList.add('emissor', 'anime-bottom')
        } else {
            
            li.classList.add('receptor', 'anime-bottom')
        }
       
        li.innerHTML = `
           ${message.content}
            <span class="data">${message.timestamp}</span>
        `
        console.log(li)
        ul.appendChild(li)
    })
    
}
