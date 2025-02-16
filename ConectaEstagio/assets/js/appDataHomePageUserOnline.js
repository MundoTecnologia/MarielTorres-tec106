function DataHomePageUserOnline() {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { users, online } = workLinkBD

    ListUsersHomePage( users, online )

}



function ListUsersHomePage( allUsers, userOnline ) {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )
    const { users, online, recruits, entreprises } = workLinkBD
    const listAddConection = document.querySelector('#list-add-conection')
    

    let fourPosition = []

        for (let index = 0; index < allUsers.length; index++) {
            fourPosition[index] = allUsers[index]

            fourPosition = fourPosition.sort( function() {
                return 0.5 - Math.random()
            })
            
        }
        
    allUsers.forEach((user) => {

        let auxNews = userOnline.notification.some(obj => obj.id == user.id)

        let myConnection = userOnline.conection.accept.some(id => id == user.id)

        
        if ( user.id !== userOnline.id && !auxNews && !myConnection ) {

            let textButton = userOnline.conection.await.includes(user.id) ? 'Pendente' : 'Conectar-se'

            let li = document.createElement('li')

            li.setAttribute("class", "anime-left")
            
            for (let index = 0; index < 4; index++) {
                 
                if(user.id == fourPosition[index].id){
                    
                    
                    li.innerHTML = `
                        <div class="card-img-conection">
                            <div class="img-conection">
                                ${fourPosition[index].firstName[0]}${fourPosition[index].lastName[0]}
                            </div>
                        </div>
                        <div class="card-content-conection">
                            <strong>${fourPosition[index].firstName} ${fourPosition[index].lastName}</strong>
                            <small>${fourPosition[index].contact.email}</small>
                            <button onclick="Conected(${fourPosition[index].id})">${textButton}</button>
                        </div>
                    `
                    
                    listAddConection.appendChild(li)
               }
            }   
        }

        
    });

    const listaPublications = document.querySelector('#section-content-home')
    
    console.log(recruits)
    for (let index = recruits.length - 1; index >= 0; index--) {
           
        entreprises.forEach(empresa => {
            if(empresa.id == recruits[index].EntreprisId){
             
            let article = document.createElement('article')
            article.innerHTML = `
            
            <article class="card-post anime-left">
                <div class="card-img-post">
                    <div class="img-post">${empresa.fullName[0]}${empresa.fullName[1]}${empresa.fullName[2]}</div>
                </div>
                <div class="card-desc-post">
                    <strong>${empresa.fullName}</strong>
                    <small class="date-post">
                    ${recruits[index].date}
                    </small>
                    
                    <ul>
                        <li>
                            <i class="bi bi-award"></i>_ <span>${recruits[index].hability}</span>
                        </li>

                        <li>
                            <i class="bi bi-mortarboard"></i>_ <span>${recruits[index].skills}</span>
                        </li>

                        <li>
                            <i class="bi bi-lamp"></i>_ <span>${recruits[index].description}</span>
                        </li>
                    </ul>

                    <div class="card-btn-react-post">
                        <div>
                            <button>
                                <i class="bi bi-heart"></i>
                                <span>Gosto</span>
                            </button>
                            <button>
                                <i class="bi bi-chat"></i>
                                <span>Comentario</span>
                            </button>
                        </div>
                        <button>
                            <i class="bi bi-briefcase"></i>
                            <span>Candidata-se</span>
                        </button>
                    </div>

                </div>
            </article>
            `
            listaPublications.appendChild(article)
            }
        })
        
    }

}

function Conected( id ) {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { users, online } = workLinkBD

    if (!online.conection.await.includes(id)) {

        online.conection.await.push(id)
        News(id, online, workLinkBD, true)
        UpdateDataBase(online, workLinkBD)

    } else {

        let index = online.conection.await.findIndex((idUSer) => idUSer === id )
        online.conection.await.pop(index)
        News(id, online, workLinkBD, false)
        UpdateDataBase(online, workLinkBD)

    }
    
}

function News(id, online, workLinkBD, state) {

    if (state) {

        let news = {
            id: online.id,
            type: 'new connection',
            state: false
        }
    
        workLinkBD.users.forEach((user) => {
            if (user.id === id)
                return user.notification.push(news)
        })

    } else {

        workLinkBD.users.forEach((user) => {

            if (user.id === id) {
                let index = user.notification.findIndex((obj) => obj.id === online.id )
                user.notification.pop(index)
            }
                
        })

    }


    UpdateDataBase(online, workLinkBD)

}

function UpdateDataBase(online, workLinkBD) {

    const index = workLinkBD.users.findIndex( (user) => user.id === online.id )
    workLinkBD.users[index] = online
    
    localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
    window.location.reload()                                                                                                                                                      

}