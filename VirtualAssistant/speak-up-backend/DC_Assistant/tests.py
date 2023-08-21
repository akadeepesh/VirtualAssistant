from django.test import TestCase

# from gpt4all import GPT4All
# model = GPT4All(model_name='orca-mini-3b.ggmlv3.q4_0.bin')
# with model.chat_session():
#     command = "provide me cpp code of rat in a maze"
#     response = model.generate(prompt=command, temp=0, max_tokens=1000)
#     l = len(model.current_chat_session)
#     a = model.current_chat_session[l-1]
#     Output = a['content'].strip()
#     print(Output)
#     print('\n\n\n\n')
#     print(len(Output))

# import win32gui
# import win32con

# def enum_windows_callback(hwnd, title_to_close):
#     if win32gui.IsWindowVisible(hwnd):
#         title = win32gui.GetWindowText(hwnd)
#         if title_to_close in title:
#             win32gui.PostMessage(hwnd, win32con.WM_CLOSE, 0, 0)

# title_to_close = "Edge"
# win32gui.EnumWindows(enum_windows_callback, title_to_close)
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent
a = os.path.join(BASE_DIR, "speak-up-frontend", "build", "static")
print(a)
# `pip3 install assemblyai` (macOS)
# `pip install assemblyai` (Windows)
# Install the assemblyai package by executing the command `pip3 install assemblyai` (macOS) or `pip install assemblyai` (Windows).

# # Import the AssemblyAI module
# import assemblyai as aai

# # Your API token is already set here
# aai.settings.api_key = "340023aa723e4288ace477ddd6b6ea5a"

# # Create a transcriber object.
# transcriber = aai.Transcriber()

# # If you have a local audio file, you can transcribe it using the code below.
# # Make sure to replace the filename with the path to your local audio file.
# transcript = transcriber.transcribe("./my-local-audio-file.wav")

# # Alternatively, if you have a URL to an audio file, you can transcribe it with the following code.
# # Uncomment the line below and replace the URL with the link to your audio file.
# # transcript = transcriber.transcribe("https://storage.googleapis.com/aai-web-samples/espn-bears.m4a")

# # After the transcription is complete, the text is printed out to the console.
# print(transcript.text)

# dcenv\Scripts\activate --> cd VirtualAssistant

# for readme.md (by bing ai)
# Virtual Assistant

# This is a Django project that includes a virtual assistant capable of recognizing speech commands and responding to them. The assistant uses the `speech_recognition` and `pyttsx3` modules to recognize speech from the microphone and convert text to speech, respectively. It also uses the `gpt4all` module to generate responses to unrecognized commands, and the `pywhatkit` module to send messages using WhatsApp and play songs on YouTube.

# ## Features

# - Speech recognition: The assistant can recognize speech commands spoken into the microphone.
# - Text-to-speech: The assistant can convert text responses into spoken audio.
# - Command handling: The assistant can handle specific commands, such as sending messages using WhatsApp or playing songs on YouTube.
# - Response generation: The assistant can use the `gpt4all` module to generate responses to unrecognized commands.


# For resume - (by bing ai)
# - Developed a Django-based virtual assistant capable of recognizing speech commands and responding to them using the `speech_recognition`, `pyttsx3`, `gpt4all`, and `pywhatkit` modules.
# - Implemented features such as speech recognition, text-to-speech conversion, command handling, and response generation using artificial intelligence.


# My tips (will maybe add on home page with name pro tips maybe):
# It's not necessary to have same username as in your whatsapp, it's just about the phonenumber, you can have xyz and can send message to any phone number
