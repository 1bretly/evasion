const friend = document.getElementById("friend")

fetch("https://evasion.cyclic.app/friends-killers")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data = data[Math.floor(Math.random() * data.length)]
    data = `${data.name}: ${data.killer}- ${data.perks.join(", ")}`
    friend.innerHTML = data
    console.log(data)
  })
