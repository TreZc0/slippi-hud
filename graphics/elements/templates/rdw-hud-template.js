import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

let colors = ["red", "blue", "yellow", "green"];

if (!this.ready)
return html``;

return html`
<style>
#BG {
	position: absolute;
	background: url('./img/rdw/templates/tournament_bg.png') 0px 0px no-repeat;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
	overflow: hidden;
	font-family: Nintender;
}
#FG {
	position: absolute;
	background: url('./img/rdw/templates/tournament_fg.png') 0px 0px no-repeat;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
}
#P1P {
	left: 0px;
}
#P2P {
	right: 0px;
}
#P1Sponsor {
	position: absolute;
	background: url('./img/sponsors/${this.playerData[0].player.sponsor}.png') 0px 0px no-repeat;
	left: 0px;
	top: 1013px;
	width: 1920px;
	height: 1080px;
}
#P2Sponsor {
	position: absolute;
	background: url('./img/sponsors/${this.playerData[1].player.sponsor}.png') 0px 0px no-repeat;
	left: 1856px;
	top: 1013px;
	width: 1920px;
	height: 1080px;
}
#P1Character {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/portrait.png') 0px 0px no-repeat;
	left: 0px;
	top: 822px;
	width: 133px;
	height: 188px;
	transform: ScaleX(-1);
}
#P2Character {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/portrait.png') 0px 0px no-repeat;
	left: 1787px;
	top: 822px;
	width: 133px;
	height: 188px;
}
#P1Name {
    left: 5px;
}
#P2Name {
    right: 5px;
}
#P1Score {
    left: 259px;
}
#P2Score {
    right: 259px;
}
#P1Stocks {	
	left: 10px;
	flex-direction: row;
}
#P2Stocks {
	right: 10px;
	flex-direction: row-reverse;
}
#round {
	top: 16px;
}
#best {
	top: 45px;
}
.name {
	top: 1025px;
	position: absolute;
    font-size: 30px;
    width: 294px;
    text-align: center;
}
.score {
	top: 960px;
	position: absolute;
    font-size: 36px;
    width: 44px;
    text-align: center;
}
.title {
    color: white;
    font-size: 20px;
    text-align: center;
    width: 268px;
	position: absolute;
	right: 15px;
	letter-spacing: 0.1em;
}
.stocks {
	position: absolute;
	top: 949px;
	height: 32px;
	width: 160px;
	display: flex;
}
.stockImg {
	width: 32px;
	margin-right: 5px;
}
.red {
	border-color: #f15959 !important;;
}
.yellow {
	border-color: #febe3f !important;;
}
.green {
	border-color: #4ce44c !important;;
}
.blue {
	border-color: #6565fe !important;;
}
.border {
	position: absolute;
	top: 565px;
    width: 298px;
    height: 413px;
	z-index: -1;
	border-top: 16px solid;
	border-bottom: 16px solid;
	border-left: 3px solid;
	border-right: 3px solid;
}
</style>

<div id="BG">
	<div class="border ${colors[this.playerData[0].slippi.port-1]}" id="P1P"></div>
	<div class="border ${colors[this.playerData[1].slippi.port-1]}" id="P2P"></div>
	<div id="FG"></div>
	<div id="round" class="title">${this.generalData.tournament.round}</div>
	<div id="best" class="title">Best Of ${this.generalData.tournament.bestOf}</div>

	<div id="P1Name" class="name"> ${this.playerData[0].player.name}</div>
	<div id="P1Sponsor"></div>
	<div id="P1Score" class="score">${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}</div>
	<div id="P1Stocks" class="stocks">
		<div class="stock" style="animation: 0.2s linear 0s 1"><img class="stockImg" src="./img/slippi-hud/stocks/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png"></div>
	</div>
	
	<div id="P2Name" class="name"> ${this.playerData[1].player.name}</div>
	<div id="P2Sponsor"></div>
	<div id="P2Score" class="score">${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}</div>
	<div id="P2Stocks" class="stocks">
		<div class="stock" style="animation: 0.2s linear 0s 1"><img class="stockImg" src="./img/slippi-hud/stocks/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png"></div>
	</div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}
