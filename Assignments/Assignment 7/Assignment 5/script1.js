const aname = document.getElementById('applicant_name')
const form = document.getElementById('form')
form.addEventListener('submit' , (e)=>{
    let messages = []
    if(aname.value === '' || aname.value == null){
    messages.push('Name is Required')
    }
    if(messages.length>0)
    {
    e.preventDefault()
    }
})