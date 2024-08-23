import config from "../config/config";
import {Client, Account, ID} from "appwrite"

//-----Authentication Service

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.AppwriteUrl)
            .setProject(config.AppwriteProjectId)
        this.account = new Account(this.client)
    }
//---- Account Creation or Sign up----
    async creactAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
            //--call another method--
                return this.login(email, password)
            }else {
                return userAccount
            }   
        } catch (error) {
            throw error;
        }
    }
            //--- User Login----
    async login ({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }
             // -- Get User Status
    async getCurrentUser () {
        try {   
        } catch (error) {
            console.log('Appwrite service :: getCurrentUser:: error' , error);
        } 
        return null;
    }
}

const authService = new AuthService();

export default AuthService