import * as firebaseDefault from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
interface INomadeFirebase {
    app: any;
    auth: () => firebaseDefault.auth.Auth;
    database: () => firebaseDefault.database.Database;
    initializeApp: (params: any) => void;
    licence: string;
}
export declare const firebase: void | Partial<INomadeFirebase>;
export {};
