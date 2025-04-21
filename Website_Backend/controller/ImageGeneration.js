const axios = require("axios");

// Route to generate an image using DeepAI
exports.ImageGeneration = async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      "https://api.edenai.run/v2/image/generation",
      {
        providers: "stabilityai",
        text: prompt,
        resolution: "512x512",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.EDENAI_AI_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const imageUrl = response.data.stabilityai.items[0].image_resource_url;
    res.json({ imageUrl });
  } catch (error) {
    console.error(
      "Error generating image:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Image generation failed" });
  }
};