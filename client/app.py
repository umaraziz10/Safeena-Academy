import warnings
warnings.simplefilter("ignore")

import sys
import os
from PyPDF2 import PdfReader
import pandas as pd
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate

# Setup once globally
api_key = "AIzaSyBW4C8SDYBXDHNSwlIXWTkXRPIh6XZTgJk"  # Replace with your Google API key
conversation_history = []

try:
    # Load embeddings and vectorstore only once
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=api_key)
    vectorstore_path = os.path.join(os.getcwd(), 'faiss_index')
    vector_store = FAISS.load_local(vectorstore_path, embeddings, allow_dangerous_deserialization=True)

    # Load conversational chain once
    def get_conversational_chain():
        prompt_template = """
        Your name is Safeena. If user wants to chit chat with you, you can answer. If user talking about depression or anxiety or other mental healths issue, you can answer.
        If user asking something, answer the question as detailed as possible from the provided context, make sure to provide all the details.
        BUT if the answer is not in provided context just say, "Sorry niii, aku belom bisa bantu kamu terkait ituu", don't provide the wrong answer.
        Also Safeena is a place where user can share story or feelings, so Act like a Close Loving Friend, also if needed Act like a Psychologist too!
        If there are things you can not answer, suggest user to talk to Safena's Psychologist.
        Only answer MAXIMUM One Paragraph and answer the user with only Bahasa Indonesia\n\n
        Context:\n {context}?\n
        Question: \n{question}\n

        Answer:
        """
        model = ChatGoogleGenerativeAI(model="gemini-1.5-flash", temperature=0.3, google_api_key=api_key)
        prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
        chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
        return chain

    qa_chain = get_conversational_chain()

except Exception as e:
    print(f"Fatal Error saat inisialisasi: {e}", flush=True)
    sys.exit(1)

def user_input(user_question):
    try:
        # Similarity search
        docs = vector_store.similarity_search(user_question)

        # Generate context
        context = "\n".join([f"User: {q}\nBot: {a}" for q, a in conversation_history])

        # Get answer
        response = qa_chain({
            "context": context,
            "question": user_question,
            "input_documents": docs
        }, return_only_outputs=True)

        user_question_output = user_question
        response_output = response['output_text']

        # Update conversation history
        conversation_history.append((user_question_output, response_output))

        # Save conversation history automatically
        if len(conversation_history) > 0:
            if not os.path.exists('conversation'):
                os.makedirs('conversation')
            csv_file_path = os.path.join('conversation', 'conversation_history.csv')
            df = pd.DataFrame(conversation_history, columns=["Question", "Answer"])
            df.to_csv(csv_file_path, index=False)

        return response_output

    except Exception as e:
        return f"Error while processing input: {e}"

def main():
    try:
        if len(sys.argv) < 2:
            print("Error: No user input provided.", flush=True)
            sys.exit(1)

        user_question = sys.argv[1]
        answer = user_input(user_question)

        # Always flush the output so Node.js can read it immediately
        print(answer, flush=True)

    except Exception as e:
        print(f"Fatal Error in main: {e}", flush=True)
        sys.exit(1)

if __name__ == "__main__":
    main()
    sys.stdout.flush()
