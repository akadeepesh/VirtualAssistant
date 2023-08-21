I created a Virtual Assistant to simplify my daily life work. The backend was developed using Django, while the frontend was created using react.js. To connect the two frameworks, I utilized the RestApi framework provided by Django. This virtual assistant is truly remarkable as it can perform a variety of tasks. For instance, it can send instant messages on WhatsApp by simply using the name of the recipient. It also has the capability to play songs on YouTube, locate a specific location on Google Maps, close the current app without specifying its name, and open any application by specifying its name or current window. Furthermore, I integrated the GPT4ALL open source model into the assistant so that it can handle any query or task beyond the my specified functions.

The functioning of the program is not overly complex. On my web page, I have provided two options for inputting commands: either by typing them or by using the microphone to speak them. If I choose to speak the command, it will be displayed in the input box, and the response will be generated accordingly. When I click on the microphone option, a POST request is sent to the backend. The backend program then attempts to fetch data from the input box. If this is not possible, it activates the microphone, allowing me to speak the command instead. In simpler terms, when I type a command, it gets directly stored in a variable, and the microphone does not need to be activated. 

To facilitate the sending of messages on WhatsApp, I created a database that stores usernames and phone numbers. If the username is not already stored, the program will redirect me to another page where I can enter the required details. This ensures that the assistant can seamlessly send messages without any issues. Overall, this Virtual Assistant has greatly enhanced my productivity and made my daily tasks much more efficient.


# Virtual Assistant - Simplifying Daily Tasks

Welcome to the Virtual Assistant project, designed to streamline your daily tasks and enhance your productivity. This repository contains the code for a versatile Virtual Assistant developed using Django for the backend and React.js for the frontend. The integration is achieved through the RestApi framework provided by Django, enabling seamless communication between the two frameworks.

## Key Features

- **Multi-Functional**: This Virtual Assistant offers a wide range of capabilities to simplify your life. It can perform tasks like sending instant WhatsApp messages, playing songs on YouTube, locating places on Google Maps, closing current applications, and opening specific applications.

- **GPT-4 Powered**: The Virtual Assistant is powered by the GPT-4ALL open-source model. It's capable of handling a variety of queries and tasks beyond the predefined functions. This integration enhances the Assistant's ability to understand and respond effectively to your needs.

- **Voice and Text Input**: Interacting with the Assistant is effortless. You have the option to input commands either by typing them or by using your voice through the microphone. The Assistant responds accordingly, making it adaptable to your preferences.

## Getting Started

1. **Clone the Repository**: Start by cloning this repository to your local machine using the following command:

   ```
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Setting Up Backend and Frontend**:
   - Navigate to the `backend` directory for the Django backend setup.
   - Navigate to the `frontend` directory for the React.js frontend setup.

3. **Running the Application**:
   - Navigate to the root directory, run `pip install -r requirements.txt` to download required packages.
   - In the `backend` directory, Navigate to the directory having manage.py file and run the Django server with command `python manage.py runserver`

4. **Interact with the Virtual Assistant**:
   - Access the web page to interact with the Virtual Assistant.
   - Input commands by typing or speaking through the microphone option.

## Sending WhatsApp Messages

The Assistant makes sending WhatsApp messages easy:
1. It utilizes a database to store usernames and phone numbers.
2. If a username is not stored, you'll be redirected to a page to enter the required details.
3. This seamless integration allows the Assistant to send WhatsApp messages without any hiccups.

## How it Works

1. **Input Options**: Choose between typing commands or using the microphone for voice input.

2. **Frontend Interaction**:
   - On the frontend, you can input commands in the provided text area or toggle the microphone icon to use voice input.
   - When the microphone is activated, the icon changes color to indicate its status.

3. **Handling Voice Input**:
   - When the microphone is clicked, the React state is updated to activate voice input mode.
   - The Assistant sends a POST request to the backend's `/api/process_command/` endpoint with the input command.
   - The CSRF token is included in the request headers to ensure security.

4. **Handling Typed Input**:
   - When you type a command in the input text area and click "Get response," a POST request is sent to the backend with the typed command.

5. **Backend Processing**:
   - The Django backend's `process_command_api` view processes the received command and performs the corresponding action or generates a response.

6. **Response Display**:
   - The backend generates a response based on the command and sends it back to the frontend.
   - The response is displayed in the output text area, providing you with the Assistant's answer or action confirmation.

7. **Continued Interaction**:
   - You can continue to interact with the Virtual Assistant, toggling the microphone or typing commands as needed.

With this frontend-backend interaction, the Virtual Assistant provides a seamless and user-friendly interface for inputting commands, receiving responses, and efficiently handling various tasks and queries.
