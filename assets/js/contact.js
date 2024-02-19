function submitdata() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phonenumber = document.getElementById("phonenumber").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

if(name == "") {
    alert("name harus di isi")
} else if(email == "") {
    alert("email harus di isi")
} else if(phonenumber == "") {
    alert("name harus di isi")
} else if(message == "") {
    alert("message harus di isi")
}
    const emailDestination = "rocketbunny@gmail.com"
    let a = document.createElement('a')
    a.href = `mailto:${emailDestination}?subject=${subject}&body=Halo saya ${name}, ${message}, bisakah hubungi saya di nomor ${phonenumber} terimakasih`
    
    a.click()

} 