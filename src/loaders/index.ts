import {HighlightrClient} from "../highlightrClient/HighlightrClient";
import RuntimeHandler from "../services/threading/RuntimeHandler";
import {IHighlightrClient} from "../types/IHighlightrClient";

export const setupClient = async ({clientApp} : {clientApp: IHighlightrClient}) => {
    console.log(`Highlightr ${clientApp.version.name}`)

    RuntimeHandler.setup();
}
