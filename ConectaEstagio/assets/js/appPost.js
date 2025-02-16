function Post() {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const {online, users, careers} = workLinkBD


    const selectHability = document.querySelector("#select-hability")
    const formListSkillToPost = document.querySelector("#form-list-skill-to-post")


    careers.forEach(career => {

        let option = document.createElement("option")

        option.setAttribute('value', career.id)

        option.innerHTML = `_${career.title}`

        selectHability.appendChild(option)
        
    });

    selectHability.addEventListener("change", ({target}) => {

        careers.forEach(career => {

            if (career.id == target.value) {
                const {skills} = career

                while (formListSkillToPost.firstChild) {
                    formListSkillToPost.removeChild(formListSkillToPost.firstChild);
                }

                skills.forEach(skill => {
                    let label = document.createElement("label")
                   
                    label.setAttribute('for', skill)
                    label.setAttribute('class', "anime-left")

                    label.innerHTML = `
                        <input 
                            class="input-career"
                            type="checkbox"
                            name="text"
                            id="${skill}"
                        />
                        <label for="${skill}">${skill}</label>
                    `

                    formListSkillToPost.appendChild(label)
                })

            }

        })


    })

    const btnPost = document.querySelector("#btn-create-post")
    
    btnPost.addEventListener("click", ({target}) => {
        

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )
    const { users, online, careers, recruits } = workLinkBD
    let description_public = document.querySelector("#description-public").value
    let title = document.querySelector("#select-hability")
    let hability = title.options[title.selectedIndex].value
    let auxHability
    let skills =document.querySelectorAll('input[name="text"]:checked')
    let auxskills=[]
    let data = new Date()
    let dataCompleta = data.toLocaleDateString()
    
   
    skills.forEach((verify) =>{
        auxskills.push(verify.id)
       
    })
    
    
    careers.forEach(carreira =>{

        if(carreira.id == hability){
            auxHability=carreira.title
        }
    })

    let pubEntreprises = {
        id:Math.floor(Math.random()*1e15),
        EntreprisId:online.id,
        date:dataCompleta,
        description:description_public,
        hability:auxHability,
        skills: auxskills
    }
    let objPost={
         EnterpriseId:online.id,
         postId:pubEntreprises.id
    }

    if( pubEntreprises.hability != "" && pubEntreprises.skills.length != 0 && pubEntreprises.description != ""){
        recruits.push(pubEntreprises)
        online.post.push(objPost)
        console.log(recruits)
        UpdateDataBase(online,workLinkBD)
     
    }
    })
   
    let aux = {
       name:"",
        phone:""
    }
    let count=0
   
    console.log(count)
    
        const apiUrl = 'http://localhost:8000/whatsapp';
    
        const auxUsers = {
            follows: [
            ]
        }
        for (let index = 0; index <= online.followers.length; index++) {
      
            users.forEach(user => {
             if (user.id == online.followers[index]) {
                 if ( user.contact.phone != "9xx-xxx-xxx"){
                    aux.name = user.firstName + " " + user.lastName
                    aux.phone = user.contact.phone
                    auxUsers.follows.push(aux)
                 }
             }
            })
             
         }
        console.log(auxUsers)
        const postData = async () => {
            try {
                const response = await fetch('http://localhost:8000/whatsapp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(auxUsers.follows)
                });
        
                const data = await response.json();
                console.log('Post successful!');
                console.log(data);
                console.log(auxUsers.follows)
            } catch (error) {
                console.error('Error posting to API:', error);
            }
        };
        
        postData();

    
    
    function UpdateDataBase(online, workLinkBD) {

        const index = workLinkBD.entreprises.findIndex( (empresa) => empresa.id === online.id )
        workLinkBD.entreprises[index] = online
        
        localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
        window.location.reload()                                                                                                                                                      
    
    }
}