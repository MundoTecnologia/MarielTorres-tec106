function ShowDataEntreprisOnline() {
    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const { online, entreprises, recruits } = workLinkBD

    
    const fullNameEntreprisOnline = document.querySelectorAll(".fullName-Entrepris-online")
    const nifEntreprisOnline = document.querySelectorAll(".nif-Entrepris-online")
    const contactEntreprisOnline = document.querySelectorAll(".contact-Entrepris-online")
    const emailEntreprisOnline = document.querySelectorAll(".email-Entrepris-online")
    const gpsEntreprisOnline = document.querySelectorAll(".gps-Entrepris-online")
    const postEntreprisOnline = document.querySelectorAll(".post-Entrepris-online")
    const followersEntreprisOnline = document.querySelectorAll(".followers-Entrepris-online")
    const descUserOnline = document.querySelectorAll(".desc-user-online")
    


    

    
    
    
    fullNameEntreprisOnline.forEach( (fullName) => {
        fullName.innerHTML = online.fullName
    })

    nifEntreprisOnline.forEach( (nif) => {
        nif.innerHTML = `_Nif: ${online.nif}`
    })

    contactEntreprisOnline.forEach( (contact) => {
        contact.innerHTML = online.contact.phone
    })

    emailEntreprisOnline.forEach( (email) => {
        email.innerHTML = online.contact.email
    })

    gpsEntreprisOnline.forEach( (gps) => {
        gps.innerHTML = online.gps
    })

    postEntreprisOnline.forEach( (post) => {
        post.innerHTML = online.post.length
    })

    followersEntreprisOnline.forEach( (follower) => {
        follower.innerHTML = online.followers.length
    })

    descUserOnline.forEach( (description) => {
        description.innerHTML = online.description
    })


    const listaPub = document.querySelector('#section-nav-profile-center')
    
    if( listaPub != null ){
      
        for (let index = recruits.length-1; index >= 0; index--) {
           
            
            if(online.id == recruits[index].EntreprisId){
                 
                let li = document.createElement('article')
                li.innerHTML = `
                <article class="card-post anime-left">
                    <div class="card-img-post">
                        <div class="img-post">${online.fullName[0]}${online.fullName[1]}${online.fullName[2]}</div>
                    </div>
                    <div class="card-desc-post">
                        <strong>${online.fullName}</strong>
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
             listaPub.appendChild(li)
            }
        }
            
        

    }


}
function publications(){

    let mostrarSection = document.querySelector("#section-post")
    mostrarSection.style = "display:flex;"
}
function closePublications(){
    let mostrarSection = document.querySelector("#section-post")
    mostrarSection.style = "display:none;"
}

function UpdateDataBase(online, workLinkBD) {

    const index = workLinkBD.entreprises.findIndex( (empresa) => empresa.id === online.id )
    workLinkBD.entreprises[index] = online
    
    localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
    window.location.reload()                                                                                                                                                      

}
