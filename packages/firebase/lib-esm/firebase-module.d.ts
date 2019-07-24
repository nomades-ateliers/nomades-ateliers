interface INomadeFirebase {
    app: any;
    auth: () => any;
    database: () => any;
    initializeApp: (params: any) => any;
    licence: string;
}
export declare const nomadesFirebase: <T>(lib: T & INomadeFirebase) => void | T;
export {};
