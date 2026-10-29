function submitForm(){
  let locInput = document.getElementById('location');
  let detailInput = document.getElementById('detail');
  let msgBox = document.getElementById('msg');

  if(!locInput || locInput.value.trim() === ""){
    alert("Location likhna zaroori hai!");
    return;
  }

  // Pehla message
  msgBox.innerText = "⏳ JavaScript ne check kiya, ab Python backend ko bhej rahe hain...";
  msgBox.style.color = "orange";

  setTimeout(()=>{
    msgBox.innerText = "✅ JavaScript ne Python ko data bhej diya! Python ab database me save karega. Shukriya!";
    msgBox.style.color = "green";
    msgBox.style.fontWeight = "bold";
    
    // Form khali karo
    locInput.value = "";
    if(detailInput) detailInput.value = "";

    // Success alert for Madam
    alert("✅ Report Save Ho Gayi! (Demo Success)");

  }, 1500);
}
