function UpdateDataUserOnlie() {

    const workLinkBD = JSON.parse( localStorage.getItem('workLinkBD') )

    const {online, users, careers} = workLinkBD

    const firstUserOnlineToUpdate = document.querySelector(".first-user-online-to-update")
    let stateFirstUserOnlineToUpdate = false

    const lastUserOnlineToUpdate = document.querySelector(".last-user-online-to-update")
    let stateLastUserOnlineToUpdate = false

    const numberUserOnlineToUpdate = document.querySelector(".number-user-online-to-update")
    let stateNumberUserOnlineToUpdate = false

    const emailUserOnlineToUpdate = document.querySelector(".email-user-online-to-update")
    let stateEmailUserOnlineToUpdate = false

    const gpsUserOnlineToUpdate = document.querySelector(".gps-user-online-to-update")
    let stateGpsUserOnlineToUpdate = false

    const descUserOnlineToUpdate = document.querySelector(".desc-user-online-to-update")
    let stateDescUserOnlineToUpdate = false

    const langUserOnlineToUpdate = document.querySelector(".lang-user-online-to-update")
    let stateLangUserOnlineToUpdate = false

    const selectCareerUserOnlineToUpdate = document.querySelector('#select-career-user-online-to-update') 
    let stateSelectCareerUserOnlineToUpdate = false


    let regexNames = /^[a-zA-Z]+$/
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let regexPassword = /^.{8,}$/


    VerifyDateToUpdate()


    // update first name
    if (stateFirstUserOnlineToUpdate) {
        online.firstName = firstUserOnlineToUpdate.value.trim()
        UpDateDataBase()   
    }

    // update last name
    if (stateLastUserOnlineToUpdate) {
        online.lastName = lastUserOnlineToUpdate.value.trim()
        UpDateDataBase()   
    }

    // update gps
    if (stateGpsUserOnlineToUpdate) {
        online.gps = gpsUserOnlineToUpdate.value.trim()
        UpDateDataBase()
    }

     // update number phone
     if (stateNumberUserOnlineToUpdate) {
        online.contact.phone = numberUserOnlineToUpdate.value.trim()
        UpDateDataBase()
    }

    // update description
    if (stateDescUserOnlineToUpdate) {
        online.description = descUserOnlineToUpdate.value.trim()
        UpDateDataBase()
    }

    // update lang
    if (stateLangUserOnlineToUpdate) {
        
        const newLangs = langUserOnlineToUpdate.value.trim().split(",")

        if (online.lang.length === 0) {

            newLangs.forEach((newLang) => {
                online.lang.push(newLang.trim())
            })
            
        } else {

            online.lang = []

            newLangs.forEach((newLang) => {
                online.lang.push(newLang.trim())
            })

        }

        UpDateDataBase()

    }

    // update career
    if (stateSelectCareerUserOnlineToUpdate) {

        const inputsCareer = document.querySelectorAll(".input-career") 

        let auxCareer = careers.find(career => career.id == selectCareerUserOnlineToUpdate.value )
        
        online.career.title = auxCareer.title
        
        online.career.skills = []

        inputsCareer.forEach(input => {

            if (input.checked)
                online.career.skills.push(input.id)

        })


        UpDateDataBase()


    }
        
    





    function VerifyDateToUpdate() {

        const initPhone = [ "91" , "92" , "93" , "94" , "95" , "99" ]


        // validate first name
        if (firstUserOnlineToUpdate.value.trim() && regexNames.test(firstUserOnlineToUpdate.value.trim()) && firstUserOnlineToUpdate.value.trim().length >= 2) {
            stateFirstUserOnlineToUpdate = true
        } else {
            stateFirstUserOnlineToUpdate = false
        }

        // validate last name
        if (lastUserOnlineToUpdate.value.trim() && regexNames.test(lastUserOnlineToUpdate.value.trim()) && lastUserOnlineToUpdate.value.trim().length >= 2) {
            stateLastUserOnlineToUpdate = true
        } else {
            stateLastUserOnlineToUpdate = false
        }

        // validate description
        if (descUserOnlineToUpdate.value.trim()) {
            stateDescUserOnlineToUpdate = true
        } else {
            stateDescUserOnlineToUpdate = false
        }

        // validate gps
        if (gpsUserOnlineToUpdate.value.trim() && gpsUserOnlineToUpdate.value.trim().length >= 2) {
            stateGpsUserOnlineToUpdate = true
        } else {
            stateGpsUserOnlineToUpdate = false
        }

        // validate number phone
        if (numberUserOnlineToUpdate.value.trim() && numberUserOnlineToUpdate.value.trim().length === 9 && initPhone.includes(numberUserOnlineToUpdate.value.trim().slice(0, 2))) {
            stateNumberUserOnlineToUpdate = true
        } else {
            stateNumberUserOnlineToUpdate = false

        }

        // validate lang
        if (langUserOnlineToUpdate.value.trim() && langUserOnlineToUpdate.value.trim().length >= 2) {
            stateLangUserOnlineToUpdate = true
        } else {
            stateLangUserOnlineToUpdate = false

        }


        // validate email

        let verifyIfEmailExistInDataBase = users.some((user) => user.contact.email !== emailUserOnlineToUpdate.value.trim())

        if (emailUserOnlineToUpdate.value.trim() && regexEmail.test(emailUserOnlineToUpdate.value.trim()) && !verifyIfEmailExistInDataBase ) {
            stateEmailUserOnlineToUpdate = true
        } else {
            stateEmailUserOnlineToUpdate = false
        }


        // validate career

        if (selectCareerUserOnlineToUpdate.value != 0) {
            stateSelectCareerUserOnlineToUpdate = true
        } else {
            stateSelectCareerUserOnlineToUpdate = false
        }

        
    }


    function UpDateDataBase() {

        users.forEach((user, index) => {
            if (user.id === online.id)
                users[index] = online
        })   

        localStorage.setItem( 'workLinkBD' , JSON.stringify( workLinkBD ) )
        window.location.reload()

    }

}