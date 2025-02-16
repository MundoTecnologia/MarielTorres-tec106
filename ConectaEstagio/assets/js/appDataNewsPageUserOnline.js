function DataNewsPageUserOnline() {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { users, online } = workLinkBD

    // console.log(online);

    // list News Connections

    // const userForConnected = 


    online.notification.forEach( objNew => {

        if (objNew.type === "new connection") {

            ListNewsConnection(objNew)

        }

    });


    function ListNewsConnection( objNew ) {

        // foundUsers

        const newsUserForConnected = users.filter( (user) => user.id === objNew.id ) 

        if (!newsUserForConnected) 
            return console.log('Nenhum usuario novo!');

        const listNewsConection = document.querySelector('#list-news-conection')

        newsUserForConnected.forEach( (newUser) => {

            const li = document.createElement('li')

            li.setAttribute("class", "anime-bottom")

            li.innerHTML = `
                <div class="card-img-news-conection">
                    <div>${newUser.firstName[0]}${newUser.lastName[0]}</div>
                </div>

                <div class="card-content-news-user-conection">
                    <strong>${newUser.firstName} ${newUser.lastName}</strong>

                    <small>${newUser.contact.email}</small>

                    <p class="description-user-news-contact">
                        ${newUser.firstName} quer criar uma conexão consigo
                    </p>

                    <div class="card-buttons-user-news-conection">
                        <button class="btn-acept-connection" id="${newUser.id}">Aceitar</button>
                        <button class="delete-notification" id="${newUser.id}" onclick="deleteNotification()">Cancelar</button>
                    </div>
                </div>
            `

            listNewsConection.appendChild(li)

        } )



    }

    function AceptConnection( id ) {

        users.forEach(user => {
            if (user.id == id) {

                let indexId = user.conection.await.findIndex((id, index) => id == online.id )

                user.conection.await.pop(indexId)
                user.conection.accept.push(online.id)

            }
        })

        let indexNew = online.notification.findIndex( (objNew) => objNew.id == id )

        online.notification.pop(indexNew)
        online.conection.accept.push(id)

        UpDateDataBase()

    }

    const btnAceptConnection = document.querySelectorAll(".btn-acept-connection")

    btnAceptConnection.forEach(Element => {
        Element.addEventListener("click", ({target}) => {
            AceptConnection(target.id);
        })
    })


    function UpDateDataBase() {

        users.forEach((user, index) => {
            if (user.id === online.id)
                users[index] = online
        })   

        localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
        window.location.reload()

    }

}

function deleteNotification(){

    const workLinkBD = JSON.parse(localStorage.getItem('workLinkBD'))
    const { entreprises, users, online } = workLinkBD
    let btns = document.querySelectorAll(".delete-notification")
    let obj

    btns.forEach(btn =>{

        btn.addEventListener("click",() => {

            obj = btn.id

            users.forEach(user =>{
        
                if( user.id == obj){
                    if(user.conection.await.includes(online.id)){

                        const indexUser = online.notification.findIndex( (notification) => notification.id === user.id )

                        online.conection.declined.push(user.id)
                        online.notification.splice(indexUser,1)
                      
                        UpdateDataBase(online,workLinkBD)
                      
                    }
                }
            })  
        })
    })  
    
  
}
