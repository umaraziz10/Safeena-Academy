# Gunakan Node versi stabil
FROM node:18-alpine

RUN apk add --no-cache python3 py3-pip python3-dev build-base

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Set up virtual environment dan install Python deps
RUN python3 -m venv /venv && \
    . /venv/bin/activate && \
    pip install --no-cache-dir -r requirements.txt

# Tambahkan venv ke PATH
ENV PATH="/venv/bin:$PATH"

ENV NODE_ENV=production
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]
