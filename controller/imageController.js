const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage=async (req,res)=>{
    const {prompt,size}=req.body;
    const imgSize=size==='Small'?'256x256':size==='Medium'?'512x512':'1024x1024';
    try {
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: imgSize
        });
        const image_url = response.data.data[0].url;
        res.status(200).json({
            sucess:true,
            data:image_url
        })
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
        res.status(404).json({
            sucess:false,
            error:"could not generate image"
        })
    }
    
}

module.exports={generateImage};