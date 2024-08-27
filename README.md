# Super Car Chatbot

## Overview

Super Car Chatbot is an interactive application designed to provide detailed information about supercars by parsing, embedding, and querying their manuals. Currently, the chatbot supports:  
- Ferrari Spider 458 
There are plans to expand to other supercars in the future. The application uses advanced AI technologies to process and respond to user queries based on the parsed manual.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications and static websites.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, adding static type definitions.
- **LangChain**: A framework for building applications with large language models (LLMs) and integrating with various AI services.
- **Pinecone**: A vector database used for efficient similarity search and retrieval of embedded documents.
- **Clerk Auth**: An authentication solution providing user sign-up, login, and management features.
- **MUI (Material-UI)**: A popular React component library for implementing Material Design in the frontend.
- **ShadcnUI**: A component library for building accessible and customizable user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for designing responsive and modern user interfaces.

## How It Works

1. **Manual Parsing**: The chatbot begins by loading and parsing a supercar manual (currently, the Ferrari Spider 458 manual). This is done using LangChain's `PDFLoader`.
2. **Embedding Creation**: The parsed content of the manual is embedded using Hugging Face's embedding models. These embeddings are then stored in Pinecone for efficient retrieval.
3. **Query Processing**: When a user submits a query, the chatbot creates an embedding for the query and retrieves relevant information from Pinecone.
4. **Response Generation**: The retrieved context is used to generate a response using a large language model (LLM) provided by Hugging Face. The LLM produces a coherent and contextually relevant response based on the query and the manual content.
5. **User Authentication**: Clerk Auth handles user authentication, ensuring secure access to the chatbot's features.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/hasibshaif/super-car-chatbot.git
   cd super-car-chatbot
   ```

2. **Install Dependencies**

   Make sure you have Node.js installed. Then, install the project dependencies:

   ```bash
   npm install
   ```

3. **Set up Environment Variables**

   Create a `.env.local` file in the root directory of the project and add the following environment variables:

   ```
   OPENAI_API_KEY=your-openai-api-key
   PINECONE_API_KEY=your-pinecone-api-key
   PINECONE_INDEX=your-pinecone-index
   PINECONE_ENVIRONMENT=your-pinecone-environment
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
   CLERK_SECRET_KEY=your-clerk-secret-key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   ```

4. **Run a development server**

   Start the development server to view the application locally:

   ```bash
   npm run dev
   ```

   Open http://localhost:3000 in your browser to see the application.
