alert("let's play a game")
const pillChoice = prompt(
  "would you like to take the 'red pill' or the 'blue pill'?"
)

if (pillChoice == "red pill") {
  alert("you ded")
  isDead = true
} else if (pillChoice == "blue pill")
  pathChoice = prompt(
    "You wake up in Narnia and see a fork in the road. Do you choose to go through the 'Forest' or through the 'Mountains'?"
  )
isDead = false

if (pathChoice == "Mountains")
  option1 = prompt(
    "after days of trekking in the mountains, do you 'rest'? or do you 'move along'"
  )
else if (pathChoice == "Forest") {
  option2 = prompt(
    "while walking through the forest you see a rabbit. do you 'pet it' or 'hide' behind some vines"
  )
  option1 = null
}

if (option1 == "rest")
  alert("you find peace and live the rest of your life as a farmer")
if (option1 == "move along")
  alert(
    "due to fatigue, you get severely injured and find yourself stuck waiting for help or death to come. Whichever comes first."
  )

if (option2 == "pet it")
  alert(
    "as your luck may have it, the creature turns out to be a were-rabbit which bites turning you into it's loyal were-rabbit mate"
  )
if (option2 == "hide")
  alert("you just hid from a rabbit, you just lost in life lol")
