fetch("https://evasion.cyclic.app/friends-survivors")
  .then((res) => res.json())
  .then((data) => {
    let result = data[Math.floor(Math.random() * data.length)]
    console.log(result)
    const friend = document.getElementById("friend")
    friend.innerHTML =
      result.name +
      ": " +
      result.survivor +
      ", " +
      result.perks.toString().replaceAll(",", ", ")
  })
