async function data () {
    const res =await fetch(URL);
    const data = await res.json();
}

async function getUser() {
  const response = await fetch('https://api.example.com/user');
  const user = await response.json();
  console.log(user.name);
}
