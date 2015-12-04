/**
 * Mister oEmbed
 * Your friendly oEmbed friend!
 *
 * 2015 Ændrew Rininsland, The Times and Sunday Times
 * MIT License
 *
 * WIP — Use at your own risk until either v1.0.0 or this notice is removed!
 *
 */

import * as oembed from 'oembed';

export default class MisterOEmbed {
  public constructor(config: IMrOConfigObject) {
    let container: HTMLElement = config.container ? $(config.container)[0] : document;
    let selector: string;

    if (!config.selector) {
      throw new Error('You must specify a selector');
    } else {
      selector = config.selector;
    }

    // Observe container for new oEmbed links
    let observer: MutationObserver = new MutationObserver(function(mutations: Array<MutationRecord>): void {
      mutations.forEach(function(mutation: MutationRecord): void {
        for (var i: number = 0; i < mutation.addedNodes.length; i++) {
          if ($(mutation.addedNodes).is(selector)) {
            console.log('yay');
          }
        }
      });
    });
    observer.observe(container, { childList: true });
  }

  public static get(url: string, config: {}, cb: oembed.CallbackHandler): void {
    oembed.fetch(url, config ? config : {}, cb);
  }
}

/**
 * Basic config interface
 */
export interface IMrOConfigObject {
  selector: string;
  container: string;
  embedlyKey? : string;
  // fallback?:boolean,
  // maxWidth?:number,
  // maxHeight?:number,
  // includeHandle?:boolean,
  // embedMethod?:string,
  // onProviderNotFound?:Function,
  // beforeEmbed?:Function,
  // afterEmbed?:Function,
  // onEmbed?:boolean,
  // onError?: Function,
  // ajaxOptions?: {}
  // longUrlAjaxOptions?: {}
}
