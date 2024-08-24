import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client;
    databases;
    bucket;

constructor() {
    this.client
        .setEndpoint(config.AppwriteUrl)
        .setProject(config.AppwriteProjectId)
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)
}
    //--- Create Post----
async createPost({title, slug, content, featuredImage, status, userId}){
    try {
        await this.databases.createDocument(
            config.AppwriteDatabaseId,
            config.AppwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            }
        )  
    } catch (error) {
        console.log("Appwrite service :: createPost :: error", error)
    }

}

async updatePost (slug,{title, content, featuredImage, status}) {
    try {
        await this.databases.updateDocument()
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser:: error" , error);
    }
}

}

const appwriteService = new Service()

export default appwriteService