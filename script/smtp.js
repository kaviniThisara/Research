function sendEmail() {
	var semail = document.getElementById("efrom").value;
	var ename = document.getElementById("ename").value;
	var phone = document.getElementById("ephone").value;
	var cname = document.getElementById("cname").value;
	var esubject = document.getElementById("esubject").value;
	var emessage = document.getElementById("emessage").value;

	window.location.href = "mailto:sachin.ramesh.sr@gmail.com?subject=From%20AuthDNA%20CDAP%20Website%20Contact%20Form&body=Name%3A%20"+ename+"%0ACompany%3A%20"+cname+"%0APhone%3A%20"+phone+"%0AEmail%3A%20"+semail+"%0ASubject%3A%20"+esubject+"%0AMessage%3A%20"+emessage;
}