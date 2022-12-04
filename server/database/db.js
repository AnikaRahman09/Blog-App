import mongoose from "mongoose"


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ctxi1k9-shard-00-00.pru4shv.mongodb.net:27017,ac-ctxi1k9-shard-00-01.pru4shv.mongodb.net:27017,ac-ctxi1k9-shard-00-02.pru4shv.mongodb.net:27017/?ssl=true&replicaSet=atlas-61txuy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
      await mongoose.connect(URL, { useNewUrlParser: true });
      console.log('Database connection established')
    } catch (error) {
        console.error('Error while connecting with database', error);
    }
}

export default Connection;