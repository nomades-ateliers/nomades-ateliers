declare var process: any;
interface INomadeFirebase {
    app: any;
    auth: () => any;
    database: () => any;
    initializeApp: (params: any) => any;
    licence: string;
}
declare const nFbUtils: {
    displayError: (message: string) => void;
    user: string;
    project: string;
};
declare const nomadesFirebase: <T>(lib: T & INomadeFirebase) => void | T;
