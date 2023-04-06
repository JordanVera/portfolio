const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '256x256',
    });

    const imageUrls = response.data.data;

    res.status(200).json({
      success: true,
      data: imageUrls,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      msg: 'The image could not be generated',
    });
  }
};

module.exports = { generateImage };
