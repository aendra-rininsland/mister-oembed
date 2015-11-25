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

import * as oembed from 'node-oembed';
import * as request from 'request';
import * as $ from 'zepto';

export default class MisterOEmbed {
  public constructor(config:IMrOConfigObject) {
    if (!config.selector) {
      throw new Error('You must specify a selector');
    } else {
      let selector:string = config.selector;
    }

    let container:HTMLElement = config.container ? $(config.container)[0] : document;

    // Observe container for new oEmbed links
    let observer:MutationObserver = new MutationObserver(function(mutations:Array<MutationRecord>):void {
      mutations.forEach(function(mutation:MutationRecord):void {
        for (var i:number = 0; i < mutation.addedNodes.length; i++) {
          // This is where I do the things.
        }
      });
    });
    observer.observe(container, { childList: true });
  }

  public static get(url:string, config:{}, cb:Function): void {
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
