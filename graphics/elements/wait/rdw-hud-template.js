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
        background: url('./img/rdw/templates/wait.png') no-repeat;
        height: 1080px;
        width: 1920px;
        position: absolute;
        font-family: "Nintender";
        color: white;
        letter-spacing: 0.1em;
    }

    #com0 {
        position: absolute;
        left: 376px;
        bottom: 8px;
    }

    #com1 {
        position: absolute;
        right: 376px;
        bottom: 8px;
    }
    #com0handle {
        position: absolute;
        left: 540px;
        bottom: 62px;
    }

    #com1handle {
        position: absolute;
        right: 540px;
        bottom: 62px;
    }

    .coms {
        text-align: center;
        font-size: 32px;
        width: 420px;
    }

    .handle {
        text-align: center;
        font-size: 24px;
        width: 260px;
    }


</style>

<div id="overlay">
<div id="com0" class="coms">${this.generalData.tournament.commentators[0].name}</div>
<div id="com1" class="coms">${this.generalData.tournament.commentators[1].name}</div>

<div id="com0handle" class="handle"> ${this.generalData.tournament.commentators[0].info}</span></div>
<div id="com1handle" class="handle"> ${this.generalData.tournament.commentators[1].info}</span></div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}
