import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<style>
#overlay {
    top: 0px;
	left: 0px;
    background: url(./img/rdw/templates/handwarmer.png) no-repeat;
    height: 1080px;
    width: 1920px;
    position: absolute;
    color: white;
}
#tournament {
    padding-top: 44px;
}

#round {
    padding-top: 44px;
}

#best {
    padding-top: 44px;
}

#com0 {
    position: absolute;
    left: 54px;
    top: 483px;
    width: 224px;

}

#com1 {
    position: absolute;
    left: 687px;
    top: 483px;
    width: 224px;
  
}

#player0 {
    position: absolute;
    left: 54px;
    top: 994px;
    width: 224px;
}

#player1 {
    position: absolute;
    left: 687px;
    top: 994px;
    width: 224px;
}

.names {
    text-align: center;
    font-size: 28px;
    font-family: "Nintender";
    font-weight: 300;
}
	
#box {
    position: absolute;
    left: 655px;
    top: 15px;
    text-align: center;
    width: 1242px;
    font-size: 44px;
}

</style>
<div id="overlay">
    <div id="com0" class="names">${this.generalData.tournament.commentators[0].name}</div>
    <div id="com1" class="names">${this.generalData.tournament.commentators[1].name}</div>
    <div id="player0" class="names">${this.playerData[0].player.name}</div>
    <div id="player1" class="names">${this.playerData[1].player.name}</div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}
