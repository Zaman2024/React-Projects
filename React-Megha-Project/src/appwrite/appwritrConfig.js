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
    //--- Post Update ------
async updatePost (slug,{title, content, featuredImage, status}) {
    try {
        return await this.databases.updateDocument(
            config.AppwriteDatabaseId,
            config.AppwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status
            }
        )
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser:: error" , error);
    }
}
    //--- Post Delete ---
async deletePost ({slug}){
    try {
        await this.databases.deleteDocument(
            config.AppwriteDatabaseId,
            config.AppwriteCollectionId,
            slug
        )
        return true
    } catch (error) {
        console.log("Appwrite service :: deletePost :: error",error);
        return false
    }
}
async getPost( slug){
    try {
        return await this.databases.getDocument(
            config.AppwriteDatabaseId,
            config.AppwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log("Appwrite service :: getPost:: error",error)
    }
}
async getPosts(queries =[Query.equal("status", "active")]){
    try {

        await this.databases.listDocuments(
            config.AppwriteDatabaseId,
            config.AppwriteCollectionId,
            queries,
        )
        
    } catch (error) {
        console.log("Appwrite service :: getPosts::error",error);
        return false
    }
}

}

const appwriteService = new Service()

export default appwriteService