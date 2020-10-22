// Business Logic

class UserService {
    constructor(collection){
        this.collection = collection;
    }

    create = function create(username, email, password){
        //Check user exists
        


        const hashedPassword = this.hashPassword(password);

        const user = await this.collection.insertOne({
            username,
            email,
            password: hashedPassword,
            joinDate: Date.now(),
            lastLogin: Date.now()
        })
    }

    async getUserByUsername(username){
        const user = await collection.findOne({username});
        return user
    }

    async getUserByEmail(email){
        const user = await collection.findOne({email});
        return user
    }

    async getAll(){
        const users = await collection.find().toArray();
        return users
    }

    hashPassword(){

    }

    async usernameTaken(username){
        const user = await this.getUserByUsername(username);
        if(user){
            return true
        }else{
            return false
        }
    }

    async emailTaken(email){
        const user = await this.getUserByEmail(email);
        if(user){
            return true
        }else{
            return false
        }
    }

    checkUserExists(username, email){
        const usernameTaken = this.usernameTaken(username);
        const emailTaken = this.emailTaken(email);

        await Promise.all([usernameTaken, emailTaken]);

        if(usernameTaken){
            
        }
    }

}

module.exports = UserService;
