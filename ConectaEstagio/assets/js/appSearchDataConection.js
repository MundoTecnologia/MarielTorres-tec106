let inputSearch=document.getElementById('search-my-connection-profile')

inputSearch.addEventListener('keyup', ({target}) => {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )
    const{ users, online } = workLinkBD
    const listConnected = document.querySelector('#list-connection-profil')

    while (listConnected.firstChild) {
        listConnected.removeChild(listConnected.firstChild)
    } 

    online.conection.accept.forEach((index) => {
        
        users.forEach( user => {

            if ( index == user.id ) {
        
                if ( user.firstName.toLowerCase().trim().includes(target.value) || user.lastName.toLowerCase().trim().includes(target.value) ) {

                    let li = document.createElement('li')

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
                                <span>${user.career.title}</span>
                            </div>

                            <small>
                            _${user.description} 
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
                            
                    listConnected.appendChild(li)
                    
                }
                    
            }

        });
    });

      
  
})
  