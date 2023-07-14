const luisConfig = require('../../config/LuisConfig')
class LuisHelper {
  
  async recognizer(text) {
    const { 
      CluProjectName, 
      CluDeploymentName, 
    } = process.env

  
    const data =
    {
        analysisInput:
        {
            conversationItem:
            {
                text,
                id: '1',
                participantId: '1'
            }
        },
        parameters:
        {
            projectName: CluProjectName,
            deploymentName: CluDeploymentName
        },
        kind: 'Conversation'
    };

    const recognize = await luisConfig.analyzeConversation(data);

    return recognize.result.prediction
  }
}

module.exports = LuisHelper
