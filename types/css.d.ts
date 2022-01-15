import * as CSS from 'csstype';
/**
 * Motivation: Ability to inject CSS Variables using "Styles" object.
 * How to get around the Typing issues:
 * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
 */
declare module 'csstype' {
  interface Properties {
    // ...or allow any other property
    [index: string]: any;
  }
}
