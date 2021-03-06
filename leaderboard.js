console.clear();

const leaderboard = [
	{
		rank: 1,
		name: "Purak",
		tag: "El Phantom#3863",
		img: "https://cdn.discordapp.com/avatars/687410302681219158/3e7c357efbf8c278c7f686c75b461a01.webp?size=128",
		date: "20/03/XXXX"
	},
	{
		rank: 1,
		name: "Hondo",
		tag: "Quentin#4055",
		img: "https://cdn.discordapp.com/avatars/691480635834892380/89c51ecf652a606f0c32a04f0f6e65cb.webp?size=128",
		date: "20/03/XXXX"
	}
];

const clientBar = [
	{
		name: "Purak",
		img: "https://cdn.discordapp.com/avatars/687410302681219158/3e7c357efbf8c278c7f686c75b461a01.webp?size=128",
		prix: 0
	},
	{
		name: "Hondo",
		img: "https://cdn.discordapp.com/avatars/691480635834892380/89c51ecf652a606f0c32a04f0f6e65cb.webp?size=128",
		prix: 1
	},

];

leaderboard.forEach((member) => {
	let newRow = document.createElement("li");
	newRow.classList = "c-list__item";
	newRow.innerHTML = `
		<div class="c-list__grid">
			<div class="c-flag c-place u-bg--transparent">${member.rank}</div>
			<div class="c-media">
				<img class="c-avatar c-media__img" src="${member.img}" />
				<div class="c-media__content">
					<div class="c-media__title">${member.name}</div>
					<a class="c-media__link u-text--small" target="_blank">@${member.tag}</a>
				</div>
			</div>
			<div class="u-text--right c-color">
				<div class="u-mt--8">
					<strong>${member.date}</strong>
				</div>
			</div>
		</div>
	`;
	if (member.rank === 1) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--yellow");
		newRow.querySelector(".c-color").classList.add("u-text--yellow");
	} else if (member.rank === 2) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--teal");
		newRow.querySelector(".c-color").classList.add("u-text--teal");
	} else if (member.rank === 3) {
		newRow.querySelector(".c-place").classList.add("u-text--dark");
		newRow.querySelector(".c-place").classList.add("u-bg--orange");
		newRow.querySelector(".c-color").classList.add("u-text--orange");
	}
	list.appendChild(newRow);
});

let sortedTeam = clientBar.sort((a, b) => b.prix - a.prix)
let winner = sortedTeam[0]

// Render winner card
const winnerCard = document.getElementById("winner");
winnerCard.innerHTML = `
	<div class="u-text-small u-text--medium u-mb--16">Client du mois</div>
	<img class="c-avatar c-avatar--lg" src="${winner.img}"/>
	<h3 class="u-mt--16">${winner.name}</h3>
	<span class="u-text--teal u-text--small">${winner.name}</span>
`;


function openNav() {
	if (document.getElementById("mySidenav").style.width === "250px"){
		closeNav();
	}
	else{
	  	document.getElementById("mySidenav").style.width = "250px";
	  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
