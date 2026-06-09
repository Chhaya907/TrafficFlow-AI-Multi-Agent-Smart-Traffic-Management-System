const { GoogleGenerativeAI } =
require("@google/generative-ai");

require("dotenv").config();

const genAI =
new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

async function runAgent(
  source,
  destination,
  weather,
  route
) {

  const model =
  genAI.getGenerativeModel({
    model: "gemini-2.5-flash"
  });

  const prompt = `
You are an AI Traffic Management Agent.

Source: ${source}

Destination: ${destination}

Weather: ${weather}

Distance: ${route.distance}

Duration: ${route.duration}

Analyze:

1. Congestion risk
2. Route recommendation
3. Driver advice

Return a structured report.
`;

  const result =
  await model.generateContent(prompt);

  return result.response.text();
}

module.exports = runAgent;