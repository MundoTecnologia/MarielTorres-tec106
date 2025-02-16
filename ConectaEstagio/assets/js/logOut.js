function logOut() {
  const workLinkBD = JSON.parse(localStorage.getItem("workLinkBD"));

  const pathPageExit = '/workLink/pages/loginFrom/AJUDA/AJUDA';
  
  const page = '../'
  workLinkBD.online = null;
  localStorage.setItem("workLinkBD", JSON.stringify(workLinkBD));
  window.location.href = pathPageExit;
}
