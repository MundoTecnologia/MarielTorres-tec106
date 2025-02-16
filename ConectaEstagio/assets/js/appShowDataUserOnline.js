function ShowDataUserOnline() {
    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { online, careers, users,entreprises, recruits} = workLinkBD

    
    const firstUserOnline = document.querySelectorAll(".first-user-online")
    const lastUserOnline = document.querySelectorAll(".last-user-online")
    const emailUserOnline = document.querySelectorAll(".email-user-online")
    const numberUserOnline = document.querySelectorAll(".number-user-online")
    const descUserOnline = document.querySelectorAll(".desc-user-online")
    const countConectionUserOnline = document.querySelectorAll(".count-conection-user-online")
    const countPostUserOnline = document.querySelectorAll(".count-post-user-online")
    const countViewUserOnline = document.querySelectorAll(".count-view-user-online")
    const imgProfileUserOnline = document.querySelectorAll('.img-profile-user-online')  
    const gpsUserOnline = document.querySelectorAll('.gps-user-online')  
    const newsUserOnline = document.querySelector('#news-user-online')  
    const listLangUserOnline = document.querySelector('#list-lang-user-online') 
    const listExpUserOnline = document.querySelector('#list-exp-user-online')
    const listConnectionUserOnline = document.querySelector('#list-connection-profil')
    const careeruUserOnline = document.querySelectorAll('.career-user-online') 
    const selectCareerUserOnlineToUpdate = document.querySelector('#select-career-user-online-to-update') 

    
    

    firstUserOnline.forEach( (firstName) => {
        firstName.innerHTML = online.firstName
    })

    lastUserOnline.forEach( (lastName) => {
        lastName.innerHTML = online.lastName
    })

    emailUserOnline.forEach( (email) => {
        email.innerHTML = online.contact.email
    })
    
    numberUserOnline.forEach( (number) => {
        number.innerHTML = online.contact.phone
    })

    descUserOnline.forEach( (description) => {
        description.innerHTML = online.description
    })

    countConectionUserOnline.forEach( (conection) => {
        conection.innerHTML = online.conection.accept.length
    })

    countPostUserOnline.forEach( (post) => {
        post.innerHTML = online.post.length
    })

    countViewUserOnline.forEach( (view) => {
        view.innerHTML = online.view.length
    })

    imgProfileUserOnline.forEach( (imgProfile) => {
        imgProfile.innerHTML = `${online.firstName[0]}${online.lastName[0]}`
    })

    online.notification.length !== 0 ? newsUserOnline.setAttribute('style', 'color: var(--first-color)') : newsUserOnline.setAttribute('style', 'color: #fff')

    gpsUserOnline.forEach( (gps) => {
        gps.innerHTML = online.gps
    })

    if (listLangUserOnline !== null) {

        if (online.lang.length === 0) {
    
            let li = document.createElement("li")
    
            li.innerHTML = `Nenhuma lingua definida`
    
            listLangUserOnline.appendChild(li)
    
        } else {
    
            online.lang.forEach(lang => {
    
                let li = document.createElement("li")
                
                li.innerHTML = lang
    
                listLangUserOnline.appendChild(li)
    
            })
    
        }

    }

    if (careeruUserOnline.length !== 0) {

        careeruUserOnline.forEach( (career) => {
            career.innerHTML = `_${online.career.title}`
        })        

    }

    if (selectCareerUserOnlineToUpdate) {

        careers.forEach(career => {

            let option = document.createElement("option")
            
            option.setAttribute('value', career.id)
            option.innerHTML = `_${career.title}`
    
            selectCareerUserOnlineToUpdate.appendChild(option)

        })



        selectCareerUserOnlineToUpdate.addEventListener("change", ({target}) => {

            const formToListExpUserOnlineToUpdate = document.querySelector('#form-to-list-exp-user-online-to-update') 

            if (target.value != 0) {

                const career = careers.find(career => career.id == target.value)
            
                const { skills } = career

                while (formToListExpUserOnlineToUpdate.firstChild) {
                    formToListExpUserOnlineToUpdate.removeChild(formToListExpUserOnlineToUpdate.firstChild);
                }
                
                skills.forEach(skill => {

                    let label = document.createElement("label")

                    label.setAttribute('for', skill)
                    label.setAttribute('class', "anime-left")

                    label.innerHTML = `
                        <input 
                            class="input-career"
                            type="checkbox"
                            name=""
                            id="${skill}"
                            ${online.career.skills.includes(skill) ? "checked" : ""}
                        />
                        <label for="${skill}">${skill}</label>
                    `

                    formToListExpUserOnlineToUpdate.appendChild(label)

            })

            } else {
                while (formToListExpUserOnlineToUpdate.firstChild) {
                    formToListExpUserOnlineToUpdate.removeChild(formToListExpUserOnlineToUpdate.firstChild);
                }
            }
            

        })

    }

    if (listExpUserOnline !== null) {


        if (online.career.skills.length === 0) {
            let li = document.createElement("li")
            li.innerHTML = `Nenhuma experiência profissional definida`
            listExpUserOnline.appendChild(li)
        } else {
            online.career.skills.forEach(skill => {
                let li = document.createElement("li")
                li.innerHTML = skill
                listExpUserOnline.appendChild(li)
            })
        }


    }


    if (listConnectionUserOnline !== null) {
        
        if (online.conection.accept) {
            
            online.conection.accept.forEach(idConnection => {

                users.forEach(user => {

                    if (user.id == idConnection) {
                      
                        let li = document.createElement("li")

                        li.setAttribute("class", "anime-left")

                        li.innerHTML = `
                            <div class="card-circle-img-profile-connection-profile">
                                <div class="circle-black">
                                    ${user.firstName[0]}${user.lastName[0]}
                                </div>
                            </div>
                            <div class="content">

                                <strong>${user.firstName} ${user.lastName}</strong>

                                <div>
                                    <i class="bi bi-award"></i>
                                    <span>_${user.career.title}</span>
                                </div>

                                <small>
                                    ${user.description.slice(0, 60)}...
                                </small>

                                <div class="card-button">
                                    <button>
                                        <i class="bi bi-chat"></i>
                                        <span>Puxar</span>
                                    </button>

                                    <button>
                                        <i class="bi bi-trash"></i>
                                        <span>Desconectar</span>
                                    </button>
                                </div>

                            </div>
                        `
                        listConnectionUserOnline.appendChild(li)

                    }

                })

            })

        }
    }

    

    const dropbox = document.querySelector('#list-entrepris')
     if(dropbox!=null){
        
        let receiveAllusers = []
        let listFourEntreprise = []
        let count=0

        for (let index = 0; index < entreprises.length; index++) {
            receiveAllusers[index] = entreprises[index]
    
           listFourEntreprise = receiveAllusers.sort(function(){ return 0.5 - Math.random()})
        }
        console.log(listFourEntreprise)
        listFourEntreprise.forEach((empresa) => {
             
                if (count <= 4 && entreprises.length <= 4 || count <= 4 && entreprises.length >= 4 ) {
                        
                        let li = document.createElement('li')
                       
                        li.innerHTML = `
                        
                        <li>
                        <div class=" anime-bottom">
                            <div class="cardemps">
                                <div class="imgemp">${empresa.fullName[0]}${empresa.fullName[1]}${empresa.fullName[2]}</div>
                            </div>
                           
                        </div>
                        <strong>${empresa.fullName}</strong>
                        <button>Visualizar</button>
                    </li>
                        `
                        
                         dropbox.appendChild(li)
                         count++
                }
            
        
        })
    }
    const ul = document.querySelector('#entrepris-list')
     
    if(ul!=null){

        entreprises.forEach((empresa) => {

                let textButton = online.following.includes(empresa.id)? 'A seguir' : 'Seguir'
            
                let li = document.createElement('li')
                li.innerHTML = `
                
                <li>
                <div class="ftdd">
                    <div class="d">
                        <div class="card-img-news-conection">
                            <div>${empresa.fullName[0]}${empresa.fullName[1]}${empresa.fullName[2]}</div>
                        </div>
                        <div class="dd">
                            <strong>${empresa.fullName}</strong>
                            <strong>

                                <small>${empresa.contact.email}</small>
                            </strong>
                        </div>
                    </div>
                    <div class="card-content-news-user-conection">
                        <div class="card-buttons">
                            <button class="bt" id="${empresa.id}" onclick="followEntreprise()">${textButton}</button>
                        </div>
                    </div>
                </div>
                <p>
                   ${empresa.description}
                </p>
                </li>
                `
                ul.appendChild(li)
            })    

    }
    
    const listaProfissionais = document.querySelector('#list-profissionals')
     
    if(listaProfissionais!=null){
       console.log(users)
        users.forEach((user) => {
            if(user.id != online.id){
                if(online.conection.accept.includes(user.id)){
                    console.log(user)
                    let li = document.createElement('li')
                    li.innerHTML = `
                    
                    <li>

                    <div class="card-img-news-conection">
                            <div>${user.firstName[0]}${user.lastName[0]}</div>
                        </div>

                        <div class="card-content-news-user-conection">
                            <strong>${user.firstName} ${user.lastName}</strong>
                            <strong>

                                <small>${user.contact.email}</small>
                            </strong>

                            <p>
                                ${user.career.title}
                            </p>

                            <div class="card-buttons">
                                <button>Seguir</button>

                            </div>
                        </div>

                    </li>
                    `
                    listaProfissionais.appendChild(li)
                }
            }
        }) 

    }

  




        

    const sectionNavProfileCenter = document.querySelector('#section-nav-profile-center')
   
    if(sectionNavProfileCenter != null){
     
        online.following.forEach( idEntreprise => {
          
            entreprises.forEach( empresa => {
                
                if(idEntreprise == empresa.id ){

                   recruits.forEach(  recrutamento=> {
                        
                        if(recrutamento.EntreprisId == empresa.id){
                            let li = document.createElement('article')
                            li.innerHTML = `
                            
                            <article class="card-post anime-left">
                                <div class="card-img-post">
                                    <div class="img-post">${empresa.fullName[0]}${empresa.fullName[1]}${empresa.fullName[2]}</div>
                                </div>
                                <div class="card-desc-post">
                                    <strong>${empresa.fullName}</strong>
                                    <small class="date-post">
                                    ${recrutamento.date}
                                    </small>
                                    
                                    <ul>
                                        <li>
                                            <i class="bi bi-award"></i>_ <span>${recrutamento.hability}</span>
                                        </li>

                                        <li>
                                            <i class="bi bi-mortarboard"></i>_ <span>${recrutamento.skills}</span>
                                        </li>

                                        <li>
                                            <i class="bi bi-lamp"></i>_ <span>${recrutamento.description}</span>
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
                            sectionNavProfileCenter.appendChild(li)
                        }   
                  })
                }
            })    
                    
        })  
    }      

}
function followEntreprise(){

    const workLinkBD = JSON.parse(localStorage.getItem('workLinkBD'))
    const { entreprises, users, online } = workLinkBD
    let btns = document.querySelectorAll(".bt")
    let obj

    btns.forEach(btn =>{

        btn.addEventListener("click",() => {

            obj = btn.id

            entreprises.forEach(empresa =>{
        
                if( empresa.id == obj){
                    if(empresa.followers.includes(online.id)){

                        const indexEntrepris = empresa.followers.findIndex( (user) => user.id === online.id )
                        const indexUser = online.following.findIndex( (user) => user.id === online.id )

                        empresa.followers.splice(indexEntrepris,1)
                        online.following.splice(indexUser,1)
                        UpdateDataBase(online,workLinkBD)

                    }else{

                        empresa.followers.push(online.id)
                        online.following.push(empresa.id)
                       UpdateDataBase(online,workLinkBD)

                    }
                }
            })  
        })
    })  
    
  
}

function UpdateDataBase(online, workLinkBD) {

    const index = workLinkBD.users.findIndex( (user) => user.id === online.id )
    workLinkBD.users[index] = online
    
    localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
    window.location.reload()                                                                                                                                                      

}

function DataHomeSearchPageUserOnline() {

    const workLinkBD = JSON.parse(localStorage.getItem('workLinkBD'))
    const search = document.querySelector('#search').value.trim()

    const { entreprise, users, online } = workLinkBD
    ListUsersHomeSearchPage(entreprise, users, search, online)
}



function ListUsersHomeSearchPage(FindEnterprise, users, search, online) {
const listAllWorklinkBd = document.querySelector('#search-users')

    listAllWorklinkBd.innerHTML = ''



if (search === '') {
    AppendNoResultsToList(listAllWorklinkBd);
    return
}


const searchWords = search.split(" ")

const newFirstname = searchWords[0].toLowerCase().trim()
const newLastName = searchWords[1] ? searchWords[1].toLowerCase().trim() : ''

let usersFound = false


users.forEach((user) => {
    const { firstName, lastName, id } = user
    let email = user.contact.email
    
    if ((firstName.toLowerCase().includes(newFirstname) || lastName.toLowerCase().includes(newFirstname))  && id !== online.id) {
        if (firstName[0].includes(newFirstname[0]) || lastName.toLowerCase().includes(newFirstname)) {
            AppendUserToList(listAllWorklinkBd, firstName, lastName,email)
            usersFound = true
        }else{
            AppendUserToList(listAllWorklinkBd, firstName, lastName,email)
             usersFound = true
        }
        
    }
})


if (!usersFound) {
    AppendNoResultsToList(listAllWorklinkBd)
}

console.log("")
FindEnterprise.forEach((enterprise) => {
    if (enterprise.Name.toLowerCase().includes(search.toLowerCase()) && enterprise.id !== online.id) {
        if (enterprise.Name[0].toLowerCase().includes(search[0].toLowerCase())) {
            AppendEntrepriseToList(listAllWorklinkBd, enterprise.Name)
        }else{
            AppendEntrepriseToList(listAllWorklinkBd, enterprise.Name)
        }
       
    }
});
}

function AppendUserToList(listAllWorklinkBd, firstName, lastName, email) {
    
let li = document.createElement('li');
li.innerHTML = `
<li>
<section class="sugestoes">
        <div class="card-img-conection">
            <div class="img-conection">
            ${firstName[0]}${lastName[0]}
            </div>
        </div>
        
        <div class="info">
            <strong>${firstName} ${lastName}<small>${email}</small></strong>
            <button>Conectar-se</button>
        </div>
</section>

</li>
`;
listAllWorklinkBd.appendChild(li);
}

function AppendEntrepriseToList(listAllWorklinkBd, name) {
   
let li = document.createElement('li');
li.innerHTML = `
    <section class="sugestoes">
        <img src="../../assets/image/profile/default.jpg" alt="">
        <strong>${name}</strong>
        <i class="bi bi-three-dots-vertical"></i>
    </section>
`;
listAllWorklinkBd.appendChild(li);
}

function AppendNoResultsToList(listAllWorklinkBd) {
let li = document.createElement('li');
li.innerHTML = `
    <section class="sugestoes">
        <h1><i>Sem Resultados</i></h1>
    </section>
`;
listAllWorklinkBd.appendChild(li);
}