declare var global: Window;

declare module "*.vue" {
    import Vue from 'vue';
    export default Vue;
}

declare module "*.svg" {
    const content: any;
    export default content;
}

declare interface tizen {}

declare module "url";
declare module "debounce-decorator";
declare module "swipe-listener";

type Fetch = (input: string|RequestInfo|Request, init?: RequestInit) => Promise<Response>;
