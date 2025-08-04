const messages = [
  "Bike leke nikle the, paani ne dhoka de diya. 💔",
  "Attendance gayi bhaad mein, chai aur pakode laao! ☕🧆",
  "Teacher bhi nahi aayenge... shayad. 😏",
  "Ye mausam ka jadoo hai mitwa! 🎶",
  "Aaj baarish, kal dhoop, par college kabhi nahi! 😎",
  "Shoes gile ho gaye, ab toh sach mein impossible hai jana. 👟💦",
  "Baarish mein sirf hero jaate hain... hum toh coder hain. 👨‍💻",
  "Bus aayi nahi, aur mann bhi gaya. 🚌💤",
  "Chalo ek aur nap le lete hain, baarish ke bahane. 😴🌧️",
  "Baarish = Mood off = College off. Simple math. 📉",
  "College ka gate dekhte hi paani double ho gaya. 😩",
  "Mummy bhi boli - beta mat ja, bheeg jaayega. 👩‍👦",
  "Kya faayda jaake? Notes bhi toh bheeg jaate. 📚💧"
];

document.getElementById('changeMsg').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById('funnyText').textContent = messages[randomIndex];
});

document.getElementById('noBtn').addEventListener('click', () => {
  const audio = document.getElementById('noSound');
  audio.play();
  alert("Bilkul nahi jaunga !! 😂");
});
