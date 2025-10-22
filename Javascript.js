window.onload = function(){

    const subjects = document.querySelectorAll(".textframe");
    const mainTextCont = document.getElementById("mainTextCont");
    
    for(let i=0 ; i < subjects.length ; i++){

        let subject = subjects[i];
    
        subject.onclick = function(){
            let selected = this.dataset.subject;
            loadContent(selected);
        };
    
    }
}
function loadContent(subjectName){
    if (subjectName === 'CO') {
        mainTextCont.innerHTML = "<h2>Computer Organization</h2><p>This is the Computer Organization section.</p>";
      } else if (subjectName === 'SD') {
        mainTextCont.innerHTML = "<h2>System Dynamics</h2><p>This is the System Dynamics section.</p>";
      } else if (subjectName === 'PR') {
        mainTextCont.innerHTML = "<h2>Advanced Programming</h2><p>Welcome to Advanced Programming!</p>";
      } else if (subjectName === 'SE') {
        mainTextCont.innerHTML = "<h2>Software Engineering</h2><p>Software Engineering content goes here.</p>";
      } else if (subjectName === 'DM') {
        mainTextCont.innerHTML = "<h2>Discrete Mathematics</h2><p>Discrete Math content will appear here.</p>";
      }
    

}

