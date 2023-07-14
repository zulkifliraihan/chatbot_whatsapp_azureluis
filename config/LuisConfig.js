const { ConversationAnalysisClient, ConversationalTask } = require ("@azure/ai-language-conversations");
const { AzureKeyCredential } = require ("@azure/core-auth");
const dotenv = require("dotenv");
dotenv.config();

const {
    CluAPIKey,
    CluAPIHostName,
} = process.env

const luisConfig = new ConversationAnalysisClient(CluAPIHostName, new AzureKeyCredential(CluAPIKey));


module.exports = luisConfig
