/*
 * Type definitions for waitMe.js 1.18[23.09.16]
 * This typescript definition file created by Murat ÖNER.
 * Created Date: 06-27-2015.
 * Updated Date: 10-18-2015.
 * https://github.com/muratoner/typescript visit for more typescript definition file.
 * http://www.muratoner.net address visit for typescript and other technologies about more information.
 */

/**
* waitMe definition
*/
interface JQuery {
    waitMe(command: "hide") => any
    waitMe(options: IWaitMeOptions) => any
}

interface IWaitMeOptions {
    /** 
    * Animation effect (string).
    * Use: 'bounce'
    * Default: 'bounce' effect.
    */
    effect: "bounce" | "rotatePlane" | "stretch" | "orbit" | "roundBounce" | "win8_linear" | "win8" | "ios" | "facebook" | "rotation" | "timer" | "pulse" | "progressBar" | "bouncePulse" | "img" | "none"
    /**
    * Place text under the effect (string).
    * Use: 'text'.
    */
    text: string
    /**
    * Background for container (string).
    * Use: 'rgba(255,255,255,0.7)'. You can use color and image.
    */
    bg: any
    /**
    * Color for background animation and text (string, array).
    * Use: '#000', ['','',...] - you can use multicolor for effect
    */
    color: string | array
    /**
    * Set max size for elem animation (string).
    * Use: 40. By default, use empty string.
    */
    maxSize: string
    /**
    * Change text position (string).
    * Use: 'vertical'
    * Default, 'horizontal'.
    */
    textPos: "vertical" | "horizontal"
    /**
    * Change font size (string).
    * Use: '18px'. By default, use empty string.
    */
    fontSize: string
    /**
    * Url to image (string).
    * Use: 'url'. By default, use empty string. Use with effect: 'img'.
    */
    source: string
    /**
    * Code execution after closed (function).
    * Use: function(){}
    */
    onClose: function
}
