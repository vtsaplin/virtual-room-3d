///<reference path="./three.d.ts"/>

declare module THREE {
  export class ColladaLoader {
    options: any;
    load(name: string, readyCallback: (result: any) => void);
  }
}
