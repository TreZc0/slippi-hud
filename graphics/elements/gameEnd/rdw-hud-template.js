import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

let teamMode = false;

if (this.generalData && this.generalData.slippi && this.generalData.slippi.isTeams) {
	teamMode = true;
}

return html`
<style>
#container {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
	font-family: "Nintender";
}
#overlay {
	position:absolute;
	left: 0px;
	top: 0px;
	background: url('./img/rdw/templates/GameEnd.png') no-repeat 0px 0px;
	width: 1920px;
	height: 1080px;
}

#LScore {
	position: absolute;
    left: 380px;
}
#RScore {
	position: absolute;
    right: 377px;
}

#LName {
	position: absolute;
    left: 448px;
}
#RName {
	position: absolute;
	right: 448px;
}

.name {
	font-size: 30px;
	top: 8px;
	width: 337px;
    text-align: center;
	color: white;
	letter-spacing: 0.1em;
}

.score {
	font-size: 30px;
	color: white;
	font-size: 30px;
	top: 8px;
	text-align: center;
	letter-spacing: 0.1em;
}

.title {
    color: white;
    font-size: 20px;
    text-align: center;
    width: 268px;
	position: absolute;
	left: 826px;
	top: 135px;
	letter-spacing: 0.1em;
}

.small {
	font-size: 20px;
	margin-top: 5px;
}

</style>
<div id="container">
	<div id="overlay"></div>

	<div id="LName" class="name${teamMode ? ' small' : ''}">${teamMode ? html`${this.playerData[0].player.name} - ${this.playerData[1].player.name}` : html`${this.playerData[0].player.name}`}</div>
	<div id="RName" class="name${teamMode ? ' small' : ''}">${teamMode ? html`${this.playerData[2].player.name} - ${this.playerData[3].player.name}` : html`${this.playerData[1].player.name}`}</div>

	<div id="LScore" class="score">${teamMode ? html`${this.generalData.tournament.scores[this.generalData.slippi.activeTeams.findIndex(team => team === this.playerData[0].slippi.teamId)].score}` : html`${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}`}</div>
	<div id="RScore" class="score">${teamMode ? html`${this.generalData.tournament.scores[this.generalData.slippi.activeTeams.findIndex(team => team === this.playerData[2].slippi.teamId)].score}` : html`${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}`}</div>

	<div id="round" class="title">${this.generalData.tournament.round}</div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}
