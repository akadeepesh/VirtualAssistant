from django.http import JsonResponse
import json
from django import forms
from django.shortcuts import render, redirect
from win32gui import GetWindowText, GetForegroundWindow
import win32gui
import win32con
from AppOpener import open
from .models import AddName
from datetime import datetime
import pywhatkit
import pyttsx3
import speech_recognition as sr
import time
from gpt4all import GPT4All
import webbrowser
import pyautogui


def speak(command):
    engine = pyttsx3.init()
    engine.say(command)
    engine.runAndWait()


def enum_windows_callback(hwnd, title_to_close):
    if win32gui.IsWindowVisible(hwnd):
        title = win32gui.GetWindowText(hwnd)
        if title_to_close in title:
            win32gui.PostMessage(hwnd, win32con.WM_CLOSE, 0, 0)


def home(request):
    return render(request, "index.html")


def process_command_api(request):
    command = None
    Output = None
    username = None
    message = None
    app_map = {
        "browser": "microsoft edge",
        "chrome": "GOOGLE CHROME",
        "whatsapp": "WHATSAPP",
        "word": "WORD",
        "ppt": "POWERPOINT",
        "powerpoint": "POWERPOINT",
        "wordpad": "WORDPAD",
        "notepad": "notepad",
        "note": "notepad",
        "code": "VISUAL STUDIO CODE",
        "visual studio": "VISUAL STUDIO CODE",
        "code editor": "VISUAL STUDIO CODE",
        "tg": "telegram",
        "telegram": "telegram",
        "this pc": "this pc",
        "settings": "settings",
        "paint": "paint",
        "dc": "DISCORD",
        "discord": "DISCORD",
        "camera": "camera",
        "spotify": "Spotify",
    }

    def send_message(username, message):
        def calculate_wait_time(message_length):
            if message_length <= 2:
                return 10
            elif message_length <= 5:
                return 15
            else:
                speak("Your message is quite long to send, still I will try.")
                return 40

        if AddName.objects.filter(username=username).exists():
            user = AddName.objects.get(username=username)
            phone_number = user.phonenum
            now = datetime.now()
            current_hr = int(now.strftime("%H"))
            current_min = int(now.strftime("%M")) + 1
            try:
                speak("Trying to send your Message! Please be paitent")
                wait_time = calculate_wait_time(len(message))
                time.sleep(wait_time)
                pywhatkit.sendwhatmsg(
                    str(phone_number), message, current_hr, current_min
                )
                Output = f"{message} sent to {username}"
                speak("Successfully Sent!")
                response = {
                    "Output": Output,
                }
                return JsonResponse(response)
            except Exception as e:
                print(e)
                speak(f"An Unexpected Error occurred: {e}")
        else:
            speak(f"Please enter details of {username} here")
            request.session["username"] = username
            webbrowser.open("http://127.0.0.1:8000/Whatsapp")
            return redirect("Whatsapp")

    if request.method == "POST":
        try:
            data = json.loads(request.body)
            command = data.get("command")
        except:
            if command is None:
                r = sr.Recognizer()
                with sr.Microphone() as source:
                    speak("Hang tight! Getting ready")
                    r.adjust_for_ambient_noise(source)
                    speak("How can I help you")
                    audio = r.listen(source, timeout=10)
                    try:
                        command = r.recognize_google(audio)
                        speak("Got it! Genrating best results for you...")
                        command = command.lower()
                    except sr.UnknownValueError:
                        command = None
                    except sr.RequestError as e:
                        speak(
                            "Uh oh! Couldn't request results from Google Speech Recognition service; {0}".format(
                                e
                            )
                        )
        if command:
            if "say" in command:
                a = command.rfind("to")
                message = command[3:a].strip()
                username = command[a + 2 :].strip().capitalize()
                response = send_message(username, message)
                if isinstance(response, JsonResponse):
                    return JsonResponse(response)

            elif "play" in command:
                song = command.replace("play", "") + "audio"
                speak("playing" + song)
                Output = "Enjoy the song! ^_^"
                pywhatkit.playonyt(song)

            elif "where is" in command:
                Output = command.replace("where is", "")
                url = f"https://google.nl/maps/place/{Output}/&amp;"
                speak(f"locating {Output} on maps")
                webbrowser.get().open(url)
                Output = "Located " + Output.capitalize()

            elif "close this" in command:
                Output = "Closed Current App"
                handle = win32gui.GetForegroundWindow()
                title = GetWindowText(GetForegroundWindow())
                speak(f"Closing {title}")
                win32gui.PostMessage(handle, win32con.WM_CLOSE, 0, 0)

            elif "close" in command:
                title_to_close = command.split()[1].capitalize()
                Output = f"Closed {title_to_close}"
                speak(Output)
                win32gui.EnumWindows(enum_windows_callback, title_to_close)

            elif "open" in command or "run" in command or "use" in command:
                for keyword, app_name in app_map.items():
                    if keyword in command:
                        Output = f"Running {app_name} for you"
                        speak(Output)
                        open(app_name)
                        break

            elif Output == None:
                speak("Hold a minute! Asking GPT to answer your query")
                model = GPT4All(model_name="orca-mini-3b.ggmlv3.q4_0.bin")
                with model.chat_session():
                    response = model.generate(prompt=command, temp=0, max_tokens=1000)
                    l = len(model.current_chat_session)
                    a = model.current_chat_session[l - 1]
                    Output = a["content"].strip()
            if Output != None:
                Output = Output.capitalize()
            response_data = {
                "command": command,
                "Output": Output,
            }
            return JsonResponse(response_data)

    return JsonResponse({"error": "Invalid request"})


class WhatsappForm(forms.Form):
    username = forms.CharField(label="Receivers Name", max_length=30)
    phonenum = forms.CharField(label="Receivers Ph. Number", max_length=30)


def Whatsapp(request):
    username = request.session.get("username", "")
    if request.method == "POST":
        form = WhatsappForm(request.POST)
        if form.is_valid():
            addname = AddName(
                username=form.cleaned_data["username"],
                phonenum=form.cleaned_data["phonenum"],
            )
            addname.save()
            # response_data = {
            #     'redirect': True,  # Include this flag in the JSON response
            # }
            pyautogui.hotkey("ctrl", "w")
            return redirect("home")
            # return JsonResponse(response_data)
    else:
        form = WhatsappForm()
    return render(request, "Whatsapp.html", {"form": form, "username": username})
    # response_data = {
    #     'form': str(form),
    #     'username': username,
    # }
    # return JsonResponse(response_data)
