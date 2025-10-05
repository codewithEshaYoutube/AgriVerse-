# AgriVerse Hugging Face Token Setup

## Environment Variable Configuration

To use the AI-powered agricultural chatbot, you need to set up the Hugging Face token.

### Step 1: Create .env file
Create a file named `.env` in the `/my-react-app/` directory (same level as package.json).

### Step 2: Add the token
Add the following line to your `.env` file:

```
REACT_APP_AGRIVERSE_TOKEN=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
```

### Step 3: Restart the development server
After creating the `.env` file, restart your React development server:

```bash
npm start
```

### Important Notes:
- The `.env` file should be in the `/my-react-app/` directory
- Make sure to restart the server after adding the token
- The token name is `REACT_APP_AGRIVERSE_TOKEN` (as specified)
- Never commit the `.env` file to version control

### Token Details:
- **Token Name**: AgriVerse_Token
- **Environment Variable**: REACT_APP_AGRIVERSE_TOKEN
- **Model**: recobo/agriculture-bert-uncased
- **API Endpoint**: https://api-inference.huggingface.co/models/recobo/agriculture-bert-uncased
- **Purpose**: Agricultural AI chatbot responses

### Troubleshooting:
If the chatbot still shows errors:
1. Make sure the `.env` file is in the correct location (`/my-react-app/.env`)
2. Restart the development server completely (`Ctrl+C` then `npm start`)
3. Check the browser console for any error messages
4. Verify the token is correctly formatted in the `.env` file

Once configured, the chatbot will be able to provide AI-powered responses to agricultural questions!
