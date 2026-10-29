function submitForm(){
 let name = document.getElementById('name')?.value || "Anonymous";
 let loc = document.getElementById('location')?.value || "";
 
 if(loc==""){
   alert("Location likhna zaroori hai!");
   return;
 }
 
 document.getElementById('msg').innerText = "⏳ JavaScript ne check kiya, ab Python backend ko bhej rahe hain...";
 
 setTimeout(()=>{
   document.getElementById('msg').innerText = "✅ JavaScript ne Python ko data bhej diya! Python ab database me save karega!";
 }, 1500);
}

